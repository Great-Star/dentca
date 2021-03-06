webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts",
		"auth.module",
		"common"
	],
	"./checkout/checkout.module": [
		"../../../../../src/app/checkout/checkout.module.ts",
		"checkout.module",
		"common"
	],
	"./home/index": [
		"../../../../../src/app/home/index.ts",
		"index.1",
		"common"
	],
	"./product/index": [
		"../../../../../src/app/product/index.ts",
		"index",
		"common"
	],
	"./user/index": [
		"../../../../../src/app/user/index.ts",
		"index.0",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(httpService) {
        this.httpService = httpService;
        window.location.href = this.httpService.getFullUrl('spree/admin');
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"default\" *ngIf=\"currentUrl\">\r\n  <section>\r\n    <app-header *ngIf=\"currentUrl && !isCheckoutRoute()\" [taxonomies]=\"taxonomies$ | async\"></app-header>\r\n    <app-checkout-header [currentStep]=\"currentStep\" *ngIf=\"currentUrl && isCheckoutRoute()\"></app-checkout-header>\r\n\r\n    <app-loading-indicator></app-loading-indicator>\r\n    <app-notification></app-notification>\r\n\r\n    <main *ngIf=\"currentUrl\" class=\"body container\">\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n\r\n    <app-checkout-footer *ngIf=\"currentUrl && isCheckoutRoute()\"></app-checkout-footer>\r\n    <app-footer *ngIf=\"currentUrl && !isCheckoutRoute()\"></app-footer>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n  padding-top: 110px;\n  padding-bottom: 30px;\n  padding-right: 50px;\n  padding-left: 50px; }\n\n.dash {\n  padding-top: 0px;\n  padding-left: 250px;\n  background-color: #efefef; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_checkout_service__ = __webpack_require__("../../../../../src/app/core/services/checkout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_actions_product_actions__ = __webpack_require__("../../../../../src/app/product/actions/product-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_actions_menu_actions__ = __webpack_require__("../../../../../src/app/layout/actions/menu.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_reducers_selectors__ = __webpack_require__("../../../../../src/app/auth/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_reducers_selectors__ = __webpack_require__("../../../../../src/app/product/reducers/selectors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Core


// Services

// Store







var AppComponent = (function () {
    function AppComponent(router, checkoutService, store, authActions, productActions, menuActions, userActions) {
        var _this = this;
        this.router = router;
        this.checkoutService = checkoutService;
        this.store = store;
        this.authActions = authActions;
        this.productActions = productActions;
        this.menuActions = menuActions;
        this.userActions = userActions;
        this.checkoutUrls = [
            '/checkout/cart',
            '/checkout/address',
            '/checkout/delivery',
            '/checkout/payment'
        ];
        router
            .events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (e) {
            _this.currentUrl = e.url;
            _this.findCurrentStep(_this.currentUrl);
            window.scrollTo(0, 0);
        });
        this.taxonomies$ = this.store.select(__WEBPACK_IMPORTED_MODULE_9__product_reducers_selectors__["b" /* getTaxonomies */]);
        this.store.dispatch(this.authActions.authorize());
        this.store.dispatch(this.productActions.getAllTaxonomies());
        this.store.dispatch(this.productActions.getAllProducts());
        this.store.dispatch(this.menuActions.getAllDropDowns());
        this.store.dispatch(this.menuActions.getAllLinkPages());
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_8__auth_reducers_selectors__["a" /* getAuthStatus */])
            .subscribe(function (isAuth) {
            if (isAuth) {
                _this.store.dispatch(_this.userActions.getUser());
                _this.orderSub$ = _this.checkoutService.fetchCurrentOrder()
                    .subscribe();
                _this.store.dispatch(_this.userActions.getUserOrders());
            }
        });
    };
    AppComponent.prototype.isCheckoutRoute = function () {
        if (!this.currentUrl) {
            return false;
        }
        var index = this.checkoutUrls.indexOf(this.currentUrl);
        if (index >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.findCurrentStep = function (currentRoute) {
        var currRouteFragments = currentRoute.split('/');
        var length = currRouteFragments.length;
        this.currentStep = currentRoute.split('/')[length - 1];
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.orderSub$.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_checkout_service__["a" /* CheckoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_checkout_service__["a" /* CheckoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["f" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__auth_actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__auth_actions_auth_actions__["a" /* AuthActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__product_actions_product_actions__["a" /* ProductActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__product_actions_product_actions__["a" /* ProductActions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__layout_actions_menu_actions__["a" /* MenuActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__layout_actions_menu_actions__["a" /* MenuActions */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__user_actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__user_actions_user_actions__["a" /* UserActions */]) === "function" && _g || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_checkout_header_checkout_header_component__ = __webpack_require__("../../../../../src/app/layout/checkout-header/checkout-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_checkout_footer_checkout_footer_component__ = __webpack_require__("../../../../../src/app/layout/checkout-footer/checkout-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_actions_product_actions__ = __webpack_require__("../../../../../src/app/product/actions/product-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_reducers_search_actions__ = __webpack_require__("../../../../../src/app/home/reducers/search.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_reducers__ = __webpack_require__("../../../../../src/app/app.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_index__ = __webpack_require__("../../../../../src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__layout_index__ = __webpack_require__("../../../../../src/app/layout/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__blog_blog_module__ = __webpack_require__("../../../../../src/app/blog/blog.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngui_map__ = __webpack_require__("../../../../@ngui/map/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/combineLatest.js");
/**
 * TODO: move API key to config file
 * TODO: investigate the users of ProductActions / SearchActions; justify its placement in AppModule.providers
 * TODO: remove StoreDevtoolsModule depending on environment
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core





// Components




// Routes


// Store





// Modules



// Modules - Custom

// Modules - Utility


// RX









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__layout_checkout_header_checkout_header_component__["a" /* CheckoutHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__layout_checkout_footer_checkout_footer_component__["a" /* CheckoutFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__["a" /* AdminComponent */],
        ],
        imports: [
            // Core
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            // DynamicComponentModuleFactory.buildModule([
            //   FormsModule
            // ]),
            // Routes
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* routes */]),
            // Store
            __WEBPACK_IMPORTED_MODULE_10__ngrx_store__["g" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_13__app_reducers__["a" /* reducer */]),
            __WEBPACK_IMPORTED_MODULE_14__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension({
                maxAge: 15
            }),
            // Modules - Global
            __WEBPACK_IMPORTED_MODULE_15__core_index__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_16__shared_index__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_17__layout_index__["a" /* LayoutModule */],
            // Modules - Eagerly-loaded
            __WEBPACK_IMPORTED_MODULE_18__blog_blog_module__["a" /* BlogModule */],
            // Modules - Utility
            __WEBPACK_IMPORTED_MODULE_19__ngui_map__["a" /* NguiMapModule */].forRoot({
                apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDxyTHZsBeo1IDPnR_VSw8p9Yxg9Eb8PnQ'
            }),
            __WEBPACK_IMPORTED_MODULE_20_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__product_actions_product_actions__["a" /* ProductActions */],
            __WEBPACK_IMPORTED_MODULE_12__home_reducers_search_actions__["a" /* SearchActions */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export developmentReducer */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_reducers_search_reducers__ = __webpack_require__("../../../../../src/app/home/reducers/search.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_reducers_product_reducer__ = __webpack_require__("../../../../../src/app/product/reducers/product-reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_reducers_user_reducer__ = __webpack_require__("../../../../../src/app/user/reducers/user.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_reducers_checkout_reducer__ = __webpack_require__("../../../../../src/app/checkout/reducers/checkout.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_reducers_auth_reducer__ = __webpack_require__("../../../../../src/app/auth/reducers/auth.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_reducers_menu_reducers__ = __webpack_require__("../../../../../src/app/layout/reducers/menu.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blog_center_reducers_center_reducer__ = __webpack_require__("../../../../../src/app/blog/center/reducers/center.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_core_compose__ = __webpack_require__("../../../../@ngrx/core/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngrx_store_freeze__);








/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */

var reducers = {
    products: __WEBPACK_IMPORTED_MODULE_2__product_reducers_product_reducer__["a" /* productReducer */],
    auth: __WEBPACK_IMPORTED_MODULE_5__auth_reducers_auth_reducer__["a" /* authReducer */],
    checkout: __WEBPACK_IMPORTED_MODULE_4__checkout_reducers_checkout_reducer__["a" /* checkoutReducer */],
    users: __WEBPACK_IMPORTED_MODULE_3__user_reducers_user_reducer__["a" /* userReducer */],
    search: __WEBPACK_IMPORTED_MODULE_0__home_reducers_search_reducers__["a" /* searchReducer */],
    menu: __WEBPACK_IMPORTED_MODULE_6__layout_reducers_menu_reducers__["a" /* menuReducer */],
    center: __WEBPACK_IMPORTED_MODULE_7__blog_center_reducers_center_reducer__["a" /* centerReducer */],
};
var developmentReducer = Object(__WEBPACK_IMPORTED_MODULE_9__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_10_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["h" /* combineReducers */])(reducers);
;
var productionReducer = Object(__WEBPACK_IMPORTED_MODULE_8__ngrx_store__["h" /* combineReducers */])(reducers);
/**
 *
 *
 * @export
 * @param {*} state
 * @param {*} action
 * @returns
 */
function reducer(state, action) {
    if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
//# sourceMappingURL=app.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blog_blog_routes__ = __webpack_require__("../../../../../src/app/blog/blog.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_guards_auth_guard__ = __webpack_require__("../../../../../src/app/core/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/shared/components/not-found/not-found.component.ts");

// Guards



var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'blog'
    },
    // Routes - Eagerly-loaded
    {
        path: 'blog',
        children: __WEBPACK_IMPORTED_MODULE_0__blog_blog_routes__["a" /* routes */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */]
    },
    // Routes - Lazy-loaded
    {
        path: 'home',
        loadChildren: './home/index#HomeModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__core_guards_auth_guard__["a" /* CanActivateViaAuthGuard */]]
    },
    {
        path: 'product',
        loadChildren: './product/index#ProductModule'
    },
    {
        path: 'checkout',
        loadChildren: './checkout/checkout.module#CheckoutModule'
    },
    {
        path: 'user',
        loadChildren: './user/index#UserModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__core_guards_auth_guard__["a" /* CanActivateViaAuthGuard */]]
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_3__shared_components_not_found_not_found_component__["a" /* NotFoundComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__shared_components_not_found_not_found_component__["a" /* NotFoundComponent */]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/auth/actions/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthActions; });
var AuthActions = (function () {
    function AuthActions() {
    }
    AuthActions.prototype.authorize = function () {
        return { type: AuthActions.AUTHORIZE };
    };
    AuthActions.prototype.login = function () {
        return { type: AuthActions.LOGIN };
    };
    AuthActions.prototype.loginSuccess = function () {
        return { type: AuthActions.LOGIN_SUCCESS };
    };
    AuthActions.prototype.logout = function () {
        return { type: AuthActions.LOGOUT };
    };
    AuthActions.prototype.logoutSuccess = function () {
        return { type: AuthActions.LOGOUT_SUCCESS };
    };
    return AuthActions;
}());

AuthActions.LOGIN = 'LOGIN';
AuthActions.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
AuthActions.LOGOUT = 'LOGOUT';
AuthActions.LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
AuthActions.AUTHORIZE = 'AUTHORIZE';
//# sourceMappingURL=auth.actions.js.map

/***/ }),

/***/ "../../../../../src/app/auth/effects/auth.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationEffects = (function () {
    function AuthenticationEffects(actions$, authService, authActions) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.authActions = authActions;
        // tslint:disable-next-line:member-ordering
        this.Authorized$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__["a" /* AuthActions */].AUTHORIZE)
            .switchMap(function () { return _this.authService.authorized(); })
            .filter(function (data) { return !data.error && data.count; })
            .map(function () { return _this.authActions.loginSuccess(); });
    }
    return AuthenticationEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */]) === "function" && _a || Object)
], AuthenticationEffects.prototype, "Authorized$", void 0);
AuthenticationEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__["a" /* AuthActions */]) === "function" && _d || Object])
], AuthenticationEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.effects.js.map

/***/ }),

/***/ "../../../../../src/app/auth/reducers/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_state__ = __webpack_require__("../../../../../src/app/auth/reducers/auth.state.ts");


var initialState = new __WEBPACK_IMPORTED_MODULE_1__auth_state__["a" /* AuthStateRecord */]();
var authReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["a" /* AuthActions */].LOGIN_SUCCESS:
            return state.merge({ isAuthenticated: true });
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["a" /* AuthActions */].LOGOUT_SUCCESS:
            return state.merge({ isAuthenticated: false });
        default:
            return state;
    }
};
//# sourceMappingURL=auth.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/auth/reducers/auth.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthStateRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);

var AuthStateRecord = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    isAuthenticated: false
});
//# sourceMappingURL=auth.state.js.map

/***/ }),

/***/ "../../../../../src/app/auth/reducers/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAuthStatus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);

// Base product state function
function getAuthState(state) {
    return state.auth;
}
// ******************** Individual selectors ***************************
var fetchAuthStatus = function (state) {
    return state.isAuthenticated;
};
// *************************** PUBLIC API's ****************************
var getAuthStatus = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getAuthState, fetchAuthStatus);
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/blog.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BlogComponent);

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_dynamic_component_index__ = __webpack_require__("../../../../angular2-dynamic-component/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_dynamic_component_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_dynamic_component_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_page_static_page_component__ = __webpack_require__("../../../../../src/app/blog/static-page/static-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__center_center_module__ = __webpack_require__("../../../../../src/app/blog/center/center.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core


// Routes

// Components


// import { ToHtmlPipe } from './../shared/pipes/to-html.pipe';



var BlogModule = (function () {
    function BlogModule() {
    }
    return BlogModule;
}());
BlogModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_index__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_dynamic_component_index__["DynamicComponentModule"],
            __WEBPACK_IMPORTED_MODULE_7__center_center_module__["a" /* CenterModule */]
            // RouterModule.forChild(routes),   // don't register here; register this module's routes at its parent module;
            // To specify the routing prefix of an eagerly-loaded module (/blog => BlogModule),
            // the best way is to create the routes in said module but register them externally (allow guards, filters)
            // read: https://stackoverflow.com/questions/41020569/angular2-routing-import-submodule-with-routing-making-it-prefixed
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__blog_component__["a" /* BlogComponent */],
            // ToHtmlPipe,
            __WEBPACK_IMPORTED_MODULE_5__static_page_static_page_component__["a" /* StaticPageComponent */],
        ],
    })
], BlogModule);

//# sourceMappingURL=blog.module.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_page_static_page_component__ = __webpack_require__("../../../../../src/app/blog/static-page/static-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__center_center_routes__ = __webpack_require__("../../../../../src/app/blog/center/center.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/shared/components/not-found/not-found.component.ts");



var routes = [
    // navigate to welcome page
    {
        path: '',
        redirectTo: 'page/welcome',
        pathMatch: 'full'
    },
    // route for static pages whose contents are able to be customized through admin panel
    {
        path: 'page/:id',
        component: __WEBPACK_IMPORTED_MODULE_0__static_page_static_page_component__["a" /* StaticPageComponent */]
    },
    {
        path: 'center',
        children: __WEBPACK_IMPORTED_MODULE_1__center_center_routes__["a" /* routes */]
    },
    // route for 404 page
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_2__shared_components_not_found_not_found_component__["a" /* NotFoundComponent */]
    }
];
//# sourceMappingURL=blog.routes.js.map

/***/ }),

/***/ "../../../../../src/app/blog/center/actions/center.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterActions; });
var CenterActions = (function () {
    function CenterActions() {
    }
    CenterActions.prototype.getActivatedCenters = function () {
        return {
            type: CenterActions.GET_ACTIVATED_CENTERS
        };
    };
    CenterActions.prototype.getActivatedCentersSuccess = function (centers) {
        return {
            type: CenterActions.GET_ACTIVATED_CENTERS_SUCCESS,
            payload: centers
        };
    };
    CenterActions.prototype.getCountry = function () {
        return {
            type: CenterActions.GET_COUNTRY
        };
    };
    CenterActions.prototype.getCountrySuccess = function (country) {
        return {
            type: CenterActions.GET_COUNTRY_SUCCESS,
            payload: country
        };
    };
    return CenterActions;
}());

CenterActions.GET_ACTIVATED_CENTERS = 'GET_ACTIVATED_CENTERS';
CenterActions.GET_ACTIVATED_CENTERS_SUCCESS = 'GET_ACTIVATED_CENTERS_SUCCESS';
CenterActions.GET_COUNTRY = 'GET_COUNTRY';
CenterActions.GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS';
//# sourceMappingURL=center.actions.js.map

/***/ }),

/***/ "../../../../../src/app/blog/center/center.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/blog/center/center.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/center/center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_center_actions__ = __webpack_require__("../../../../../src/app/blog/center/actions/center.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CenterComponent = (function () {
    function CenterComponent(store, centerActions) {
        this.store = store;
        this.centerActions = centerActions;
        this.store.dispatch(this.centerActions.getActivatedCenters());
        this.store.dispatch(this.centerActions.getCountry());
    }
    CenterComponent.prototype.ngOnInit = function () {
    };
    return CenterComponent;
}());
CenterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-center',
        template: __webpack_require__("../../../../../src/app/blog/center/center.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/center/center.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__actions_center_actions__["a" /* CenterActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__actions_center_actions__["a" /* CenterActions */]) === "function" && _b || Object])
], CenterComponent);

var _a, _b;
//# sourceMappingURL=center.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/center/center.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngui_map__ = __webpack_require__("../../../../@ngui/map/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__center_component__ = __webpack_require__("../../../../../src/app/blog/center/center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_center_map_center_map_component__ = __webpack_require__("../../../../../src/app/blog/center/components/center-map/center-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_center_application_center_application_component__ = __webpack_require__("../../../../../src/app/blog/center/components/center-application/center-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_center_application_success_center_application_success_component__ = __webpack_require__("../../../../../src/app/blog/center/components/center-application-success/center-application-success.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CenterModule = (function () {
    function CenterModule() {
    }
    return CenterModule;
}());
CenterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_index__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngui_map__["a" /* NguiMapModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__center_component__["a" /* CenterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_center_map_center_map_component__["a" /* CenterMapComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_center_application_center_application_component__["a" /* CenterApplicationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_center_application_success_center_application_success_component__["a" /* CenterApplicationSuccessComponent */]
        ]
    })
], CenterModule);

//# sourceMappingURL=center.module.js.map

/***/ }),

/***/ "../../../../../src/app/blog/center/center.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__center_component__ = __webpack_require__("../../../../../src/app/blog/center/center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_center_map_center_map_component__ = __webpack_require__("../../../../../src/app/blog/center/components/center-map/center-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_center_application_center_application_component__ = __webpack_require__("../../../../../src/app/blog/center/components/center-application/center-application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_center_application_success_center_application_success_component__ = __webpack_require__("../../../../../src/app/blog/center/components/center-application-success/center-application-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_guards_center_guard__ = __webpack_require__("../../../../../src/app/core/guards/center.guard.ts");





var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_0__center_component__["a" /* CenterComponent */],
        children: [
            { path: '', redirectTo: 'map', pathMatch: 'full' },
            { path: 'map', component: __WEBPACK_IMPORTED_MODULE_1__components_center_map_center_map_component__["a" /* CenterMapComponent */] },
            { path: 'application', component: __WEBPACK_IMPORTED_MODULE_2__components_center_application_center_application_component__["a" /* CenterApplicationComponent */] },
            {
                path: 'application/success',
                component: __WEBPACK_IMPORTED_MODULE_3__components_center_application_success_center_application_success_component__["a" /* CenterApplicationSuccessComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_4__core_guards_center_guard__["a" /* CanActivateViaCenterGuard */]]
            }
        ]
    }
];
//# sourceMappingURL=center.routes.js.map

/***/ }),

/***/ "../../../../../src/app/blog/center/components/center-application-success/center-application-success.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!completedCenterApp\">\n  <p>You are not authorized to access this page!</p>\n</div>\n\n<div *ngIf=\"completedCenterApp\">\n  <h1>\n    Dentca-4 Center Application Successful!\n  </h1>\n\n  <p>Your Dentca-4 Center Application has been submitted.</p>\n  <p>Submitted on: {{ completedCenterApp.address.created_at | date }}</p>\n\n  <table class=\"table\">\n    <tbody>\n      <tr>\n        <th scope=\"row\">Office Name</th>\n        <td>{{ completedCenterApp.office_name }}</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">Address</th>\n        <td>{{ getFullAddress(completedCenterApp.address) }}</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">Email</th>\n        <td>{{ completedCenterApp.email }}</td>\n      </tr>\n      <tr *ngIf=\"completedCenterApp.website\">\n        <th scope=\"row\">Website</th>\n        <td>{{ completedCenterApp.website }}</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">Number of Doctors</th>\n        <td>{{ completedCenterApp.num_of_doctors }}</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">Number of Staff</th>\n        <td>{{ completedCenterApp.num_of_staff }}</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">Head Doctor</th>\n        <td>{{ completedCenterApp.head_doctor }}</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">College</th>\n        <td>{{ completedCenterApp.college }}</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">Degree</th>\n        <td>{{ completedCenterApp.degree }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<a [routerLink]=\"['/blog/center/map']\">Go back to Map Page</a>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/blog/center/components/center-application-success/center-application-success.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/center/components/center-application-success/center-application-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterApplicationSuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_center_service__ = __webpack_require__("../../../../../src/app/core/services/center.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_address__ = __webpack_require__("../../../../../src/app/core/models/address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_center_selectors__ = __webpack_require__("../../../../../src/app/blog/center/reducers/center.selectors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CenterApplicationSuccessComponent = (function () {
    function CenterApplicationSuccessComponent(centerService, store) {
        this.centerService = centerService;
        this.store = store;
        this.completedCenterApp = null;
        this.getFullAddress = __WEBPACK_IMPORTED_MODULE_2__core_models_address__["b" /* getFullAddress */];
    }
    CenterApplicationSuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.completedCenterApp = this.centerService.completedCenterApp;
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers_center_selectors__["b" /* getCountry */])
            .first(function (value) { return value.toJSON().states; })
            .filter(function (value) { return value && value.toJSON().states && value.toJSON().states.length > 0; })
            .subscribe(function (value) {
            var country = value.toJSON();
            if (_this.completedCenterApp) {
                _this.completedCenterApp.address.state_text = country.states.find((function (state) { return state.id === +_this.completedCenterApp.address.state_id; })).name;
            }
        });
    };
    CenterApplicationSuccessComponent.prototype.ngOnDestroy = function () {
        this.centerService.completedCenterApp = null;
    };
    return CenterApplicationSuccessComponent;
}());
CenterApplicationSuccessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-center-application-success',
        template: __webpack_require__("../../../../../src/app/blog/center/components/center-application-success/center-application-success.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/center/components/center-application-success/center-application-success.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_center_service__["a" /* CenterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_center_service__["a" /* CenterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["f" /* Store */]) === "function" && _b || Object])
], CenterApplicationSuccessComponent);

var _a, _b;
//# sourceMappingURL=center-application-success.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/center/components/center-application/center-application.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nTODO:\n- consider writing components for form group items;\n  - must take into account nested form groups and custom validation errors / messages\n\nAngular 2 validated forms:\n- use reactive forms whenever possible\n- put sync / async validation during the FormBuilder creation\n\n- for markup:\n  - use css for: required green / red borders\n  - to be used in conjunction with the ff. rules:\n    - follow Bootstrap form control convention\n    - 'control-label' class on all control labels\n    - 'required' class on all required labels / inputs\n-->\n\n<h1>\n  Create Dentca-4 Center Application\n</h1>\n\n<br/>\n\n<!-- stateQuery -->\n<div class=\"row\">\n  <div class=\"form-group col-md-6\">\n    <label for=\"state-checker\">Please check first for Dentca-4 availability by entering your ZIP code: </label>\n    <input id=\"state-checker\"\n           class=\"form-control\"\n           type=\"number\"\n           pattern=\"[0-9]{5}\"\n           [(ngModel)]=\"stateQuery\"\n           (keyup)=\"onStateQueryKeyUp($event)\"\n           required>\n    <div *ngIf=\"stateQuery && stateQuery.toString().length === 5 && stateQueryAllowed\">\n      <p>Congratulations, you can reserve this area!</p>\n    </div>\n    <div *ngIf=\"stateQuery && stateQuery.toString().length === 5 && !stateQueryAllowed\">\n      <p>Sorry, that area is already taken. Please contact our <a href=\"mailto:info@dentca.com\">sales associate</a>.</p>\n    </div>\n  </div>\n</div>\n\n<form [formGroup]=\"centerAppForm\" (ngSubmit)=\"save()\" novalidate>\n\n  <!-- office_name -->\n  <div class=\"form-group\"\n       [ngClass]=\"{'has-error': hasError('office_name')}\">\n    <label class=\"center-block control-label required\" >Office Name:</label>\n    <input class=\"form-control required\"\n           formControlName=\"office_name\">\n    <div *ngIf=\"hasError('office_name')\">\n      <span class=\"help-block\"\n            *ngIf=\"getElementFromFG('office_name', centerAppForm).errors.required\">\n        Office name is required.\n      </span>\n    </div>\n  </div>\n\n  <!-- head_doctor -->\n  <div class=\"form-group\"\n       [ngClass]=\"{'has-error': hasError('head_doctor')}\">\n    <label class=\"center-block control-label required\" >Head Doctor:</label>\n    <input class=\"form-control required\"\n           formControlName=\"head_doctor\">\n    <div *ngIf=\"hasError('head_doctor')\">\n      <span class=\"help-block\"\n            *ngIf=\"getElementFromFG('head_doctor', centerAppForm).errors.required\">\n        Head Doctor is required.\n      </span>\n    </div>\n  </div>\n\n  <br/>\n\n  <!-- address -->\n  <div formGroupName=\"address_attributes\" class=\"well well-lg\">\n    <h4>Address</h4>\n\n    <div class=\"row\">\n\n      <div class=\"col-md-6\">\n        <!-- address_attributes.firstname -->\n        <div class=\"form-group\"\n             [ngClass]=\"{'has-error': hasError('address_attributes.firstname')}\">\n          <label class=\"center-block control-label required\">First Name:</label>\n          <input class=\"form-control required\"\n                 formControlName=\"firstname\">\n          <div *ngIf=\"hasError('address_attributes.firstname')\">\n        <span class=\"help-block\"\n              *ngIf=\"getElementFromFG('address_attributes.firstname', centerAppForm).errors.required\">\n          Address is required.\n        </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <!-- address_attributes.lastname -->\n        <div class=\"form-group\"\n             [ngClass]=\"{'has-error': hasError('address_attributes.lastname')}\">\n          <label class=\"center-block control-label required\">Last Name:</label>\n          <input class=\"form-control required\"\n                 formControlName=\"lastname\">\n          <div *ngIf=\"hasError('address_attributes.lastname')\">\n        <span class=\"help-block\"\n              *ngIf=\"getElementFromFG('address_attributes.lastname', centerAppForm).errors.required\">\n          Address is required.\n        </span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <!-- address_attributes.address1 -->\n    <div class=\"form-group\"\n         [ngClass]=\"{'has-error': hasError('address_attributes.address1')}\">\n      <label class=\"center-block control-label required\">Address 1:</label>\n      <input class=\"form-control required\"\n             formControlName=\"address1\">\n      <div *ngIf=\"hasError('address_attributes.address1')\">\n        <span class=\"help-block\"\n              *ngIf=\"getElementFromFG('address_attributes.address1', centerAppForm).errors.required\">\n          Address is required.\n        </span>\n      </div>\n    </div>\n\n    <!-- address_attributes.address2 -->\n    <div class=\"form-group\">\n      <label class=\"center-block control-label\">Address 2:</label>\n      <input class=\"form-control\" formControlName=\"address2\">\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-md-6\">\n\n        <!-- address_attributes.city -->\n        <div class=\"form-group\"\n             [ngClass]=\"{'has-error': hasError('address_attributes.city')}\">\n          <label class=\"center-block control-label required\" >City:</label>\n          <input class=\"form-control required\"\n                 formControlName=\"city\">\n          <div *ngIf=\"hasError('address_attributes.city')\">\n        <span class=\"help-block\"\n              *ngIf=\"getElementFromFG('address_attributes.city', centerAppForm).errors.required\">\n          City is required.\n        </span>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"col-md-3\">\n\n        <!-- address_attributes.state_id -->\n        <div class=\"form-group\"\n             [ngClass]=\"{'has-error': hasError('address_attributes.state_id')}\">\n          <label class=\"center-block control-label required\" >State:</label>\n          <select class=\"form-control required\" formControlName=\"state_id\">\n            <option value=\"\" selected=\"selected\"></option>\n            <option *ngFor=\"let state of states\" [value]=\"state.id\">{{ state.name }}</option>\n          </select>\n          <div *ngIf=\"hasError('address_attributes.state_id')\">\n        <span class=\"help-block\"\n              *ngIf=\"getElementFromFG('address_attributes.state_id', centerAppForm).errors.required\">\n          State is required.\n        </span>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"col-md-3\">\n\n        <!-- address_attributes.zipcode -->\n        <div class=\"form-group\"\n             [ngClass]=\"{'has-error': hasError('address_attributes.zipcode')}\">\n          <label class=\"center-block control-label required\" >Zip:</label>\n          <input class=\"form-control required\"\n                 type=\"number\"\n                 formControlName=\"zipcode\">\n          <div *ngIf=\"hasError('address_attributes.zipcode')\">\n        <span class=\"help-block\"\n              *ngIf=\"getElementFromFG('address_attributes.zipcode', centerAppForm).errors.required\">\n          Zip Code is required.\n        </span>\n            <span class=\"help-block\"\n                  *ngIf=\"getElementFromFG('address_attributes.zipcode', centerAppForm).errors.pattern\">\n          Zip Code must be exactly 5 numbers.\n        </span>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <!-- address_attributes.phone -->\n    <div class=\"form-group\"\n         [ngClass]=\"{'has-error': hasError('address_attributes.phone')}\">\n      <label class=\"center-block control-label required\">Phone</label>\n      <input class=\"form-control required\"\n             formControlName=\"phone\">\n      <div *ngIf=\"hasError('address_attributes.phone')\">\n        <span class=\"help-block\"\n              *ngIf=\"getElementFromFG('address_attributes.phone', centerAppForm).errors.required\">\n          Phone is required.\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <!-- email -->\n  <div class=\"form-group\"\n       [ngClass]=\"{'has-error': hasError('email')}\">\n    <label class=\"center-block control-label required\" >Email:</label>\n    <input class=\"form-control required\"\n           formControlName=\"email\">\n    <div *ngIf=\"hasError('email')\">\n      <span class=\"help-block\"\n            *ngIf=\"getElementFromFG('email', centerAppForm).errors.required\">\n        Email is required.\n      </span>\n      <span class=\"help-block\"\n            *ngIf=\"getElementFromFG('email', centerAppForm).errors.pattern\">\n        Email must be a valid email address_attributes.\n      </span>\n    </div>\n  </div>\n\n  <!-- Website -->\n  <div class=\"form-group\">\n    <label class=\"center-block control-label\">Website:</label>\n    <input class=\"form-control\" formControlName=\"website\">\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-md-6\">\n\n      <!-- num_of_doctors -->\n      <div class=\"form-group\"\n           [ngClass]=\"{'has-error': hasError('num_of_doctors')}\">\n        <label class=\"center-block control-label required\" >Number of Doctors:</label>\n        <input class=\"form-control required\"\n               type=\"number\"\n               formControlName=\"num_of_doctors\">\n        <div *ngIf=\"hasError('num_of_doctors')\">\n      <span class=\"help-block\"\n            *ngIf=\"getElementFromFG('num_of_doctors', centerAppForm).errors.required\">\n        Number of Doctors is required.\n      </span>\n          <span class=\"help-block\"\n                *ngIf=\"getElementFromFG('num_of_doctors', centerAppForm).errors.pattern\">\n        Number of Doctors must be any number greater than or equal to 1.\n      </span>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-md-6\">\n\n      <!-- num_of_staff -->\n      <div class=\"form-group\"\n           [ngClass]=\"{'has-error': hasError('num_of_staff')}\">\n        <label class=\"center-block control-label required\" >Number of Staff:</label>\n        <input class=\"form-control required\"\n               type=\"number\"\n               formControlName=\"num_of_staff\">\n        <div *ngIf=\"hasError('num_of_staff')\">\n      <span class=\"help-block\"\n            *ngIf=\"getElementFromFG('num_of_staff', centerAppForm).errors.required\">\n        Number of Staff is required.\n      </span>\n          <span class=\"help-block\"\n                *ngIf=\"getElementFromFG('num_of_staff', centerAppForm).errors.pattern\">\n        Number of Staff must be any number greater than or equal to 1.\n      </span>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <br/>\n\n  <div class=\"well well-lg\">\n    <h4>Education</h4>\n\n    <!-- college -->\n    <div class=\"form-group\"\n         [ngClass]=\"{'has-error': hasError('college')}\">\n      <label class=\"center-block control-label required\" >College:</label>\n      <input class=\"form-control required\"\n             formControlName=\"college\">\n      <div *ngIf=\"hasError('college')\">\n      <span class=\"help-block\"\n            *ngIf=\"getElementFromFG('college', centerAppForm).errors.required\">\n        College is required.\n      </span>\n      </div>\n    </div>\n\n    <!-- degree -->\n    <div class=\"form-group\"\n         [ngClass]=\"{'has-error': hasError('degree')}\">\n      <label class=\"center-block control-label required\" >Degree:</label>\n      <input class=\"form-control required\"\n             formControlName=\"degree\">\n      <div *ngIf=\"hasError('degree')\">\n      <span class=\"help-block\"\n            *ngIf=\"getElementFromFG('degree', centerAppForm).errors.required\">\n        Degree is required.\n      </span>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- submit -->\n  <div style=\"margin-bottom: 1em\">\n    <button type=\"submit\"\n            class=\"btn btn-lg btn-success\"\n            [disabled]=\"centerAppForm.pristine || centerAppForm.invalid\" >Save</button> &nbsp;\n    <button type=\"reset\"\n            class=\"btn btn-lg btn-danger\"\n            (click)=\"revert()\"\n            [disabled]=\"centerAppForm.pristine && centerAppForm.get('address_attributes').pristine\" >Revert</button>\n  </div>\n</form>\n\n<!--\n<p>Form value: {{ centerAppForm.value | json }}</p>\n<p>Form valid: {{ centerAppForm.valid | json }}</p>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/blog/center/components/center-application/center-application.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Show asterisk for required fields */\n.control-label.required:after {\n  color: #FF527B;\n  content: \"*\";\n  margin-left: 5px;\n  top: 7px; }\n\n/* Green & Red borders for validity of required fields */\n.ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #FF527B;\n  /* red */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/center/components/center-application/center-application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_address__ = __webpack_require__("../../../../../src/app/core/models/address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_center_service__ = __webpack_require__("../../../../../src/app/core/services/center.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_center_selectors__ = __webpack_require__("../../../../../src/app/blog/center/reducers/center.selectors.ts");
/**
 * TODO:
 * - handle error on createCenterApp
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CenterApplicationComponent = (function () {
    function CenterApplicationComponent(router, formBuilder, centerService, store) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.centerService = centerService;
        this.store = store;
        this.stateQuery = null;
        this.stateQueryAllowed = false;
        this.centers = [];
    }
    CenterApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_6__reducers_center_selectors__["a" /* getActivatedCenters */])
            .first(function (value) { return value.length > 0; })
            .subscribe(function (centers) {
            _this.centers = centers;
        });
        this.store.select(__WEBPACK_IMPORTED_MODULE_6__reducers_center_selectors__["b" /* getCountry */])
            .first(function (value) { return value.toJSON().states; })
            .subscribe(function (country) {
            _this.states = country.toJSON().states;
        });
        // create form
        this.centerAppForm = this.formBuilder.group({
            office_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            head_doctor: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            address_attributes: this.formBuilder.group({
                firstname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                lastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                address1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                address2: '',
                city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                zipcode: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern(/^\d{5}$/i)]],
                phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                state_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
                // country_id: ['', Validators.required ] // Always USA
            }),
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern(/^\S+@\S+$/i)]],
            website: '',
            num_of_doctors: ['1', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern(/^[1-9][0-9]*$/i)]],
            num_of_staff: ['1', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern(/^[1-9][0-9]*$/i)]],
            college: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            degree: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    /**
     * UI button method; Save the form.
     */
    CenterApplicationComponent.prototype.save = function () {
        var _this = this;
        // create an immutable copy
        var formValue = this.centerAppForm.value;
        var newCenterApp = {
            office_name: formValue.office_name,
            head_doctor: formValue.head_doctor,
            address_attributes: {
                firstname: formValue.address_attributes.firstname,
                lastname: formValue.address_attributes.lastname,
                address1: formValue.address_attributes.address1,
                address2: formValue.address_attributes.address2,
                city: formValue.address_attributes.city,
                zipcode: formValue.address_attributes.zipcode,
                phone: formValue.address_attributes.phone,
                state_id: formValue.address_attributes.state_id,
                country_id: '232',
            },
            email: formValue.email,
            website: formValue.website,
            num_of_doctors: formValue.num_of_doctors,
            num_of_staff: formValue.num_of_staff,
            college: formValue.college,
            degree: formValue.degree
        };
        this.centerService.createCenterApp(newCenterApp)
            .first()
            .subscribe(function (value) {
            _this.router.navigate(['blog', 'center', 'application', 'success']);
        });
    };
    /**
     * UI button method; Reset the form.
     */
    CenterApplicationComponent.prototype.revert = function () {
        this.centerAppForm.reset({
            office_name: '',
            head_doctor: '',
            address_attributes: new __WEBPACK_IMPORTED_MODULE_3__core_models_address__["a" /* Address */](),
            email: '',
            website: '',
            num_of_doctors: '1',
            num_of_staff: '1',
            college: '',
            degree: ''
        });
    };
    /**
     * Return true if an element has failed validation.
     * Utilizes getElementFromFG() to obtain elements from nested FormGroups.
     */
    CenterApplicationComponent.prototype.hasError = function (input) {
        var target = this.getElementFromFG(input, this.centerAppForm);
        return target.invalid &&
            (target.dirty ||
                target.touched);
    };
    /**
     * Retrieve an element from a FormGroup (nested or non-nested).
     * Example: to retrieve centerAppForm.address.address1, do:
     * getElementFromNestedFormGroup('address.address1', this.centerAppForm)
     */
    CenterApplicationComponent.prototype.getElementFromFG = function (input, target) {
        return input.split('.').reduce(function (obj, key) {
            return obj.get(key);
        }, target);
    };
    CenterApplicationComponent.prototype.onStateQueryKeyUp = function (event) {
        var _this = this;
        if (this.stateQuery && this.centers.length > 0) {
            var matchingCenters = this.centers.filter(function (center) { return center.address.zipcode === _this.stateQuery.toString(); });
            this.stateQueryAllowed = matchingCenters.length === 0 ? true : false;
        }
    };
    CenterApplicationComponent.prototype.ngOnDestroy = function () {
    };
    return CenterApplicationComponent;
}());
CenterApplicationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-center-application',
        template: __webpack_require__("../../../../../src/app/blog/center/components/center-application/center-application.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/center/components/center-application/center-application.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__core_services_center_service__["a" /* CenterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_services_center_service__["a" /* CenterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["f" /* Store */]) === "function" && _d || Object])
], CenterApplicationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=center-application.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/center/components/center-map/center-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>\n    Dentca-4 Center Locations:\n  </h1>\n</div>\n\n<p>\n  <a [routerLink]=\"['/blog/center/application']\">Apply for a Dentca-4 Center today!</a>\n</p>\n\n<div>\n  <ngui-map\n    zoom=\"4\"\n    center=\"Kansas\"\n    (mapReady$)=\"onMapReady($event)\"\n    (mapClick)=\"onMapClick($event)\"\n    (idle)=\"onIdle($event)\">\n    <marker *ngFor=\"let center of centersWithAddressFiltered\"\n            [position]=\"getFullAddress(center.address)\"\n            (initialized$)=\"onMarkerInit($event)\"\n            (click)=\"onMarkerClick($event, center)\"></marker>\n    <info-window id=\"infoWindow\">\n      <div *ngIf=\"marker.center\">\n        <h4>{{ marker.center.office_name }}</h4>\n        <p>{{ marker.center.head_doctor }}</p>\n        <p>{{ getFullAddress(marker.center.address) }}</p>\n        <p>Tel: {{ marker.center.address.phone }}</p>\n        <a *ngIf=\"marker.center.website\" href=\"{{ marker.center.website }}\">{{ marker.center.website }}</a>\n      </div>\n    </info-window>\n  </ngui-map>\n</div>\n\n<br/>\n\n<div class=\"form-group col-md-4\">\n  <label for=\"selectedState\">Filter by State: </label>\n  <select #stateFilter\n          class=\"form-control\"\n          [(ngModel)]=\"selectedState\"\n          (change)=\"onChange($event)\"\n          id=\"selectedState\">\n    <option value=\"\" selected>None</option>\n    <option disabled>──────────</option>\n    <option *ngFor=\"let state of states\"\n            [value]=\"state.id\">\n      {{ state.name }}\n    </option>\n  </select>\n</div>\n\n<div>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Office Name</th>\n        <th scope=\"col\">Head Doctor</th>\n        <th scope=\"col\">Address</th>\n        <th scope=\"col\">Phone</th>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">Website</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let center of centersWithAddressFiltered\">\n        <th scope=\"row\">{{ center.office_name }}</th>\n        <td>{{ center.head_doctor }}</td>\n        <td>{{ getFullAddress(center.address) }}</td>\n        <td>{{ center.address.phone }}</td>\n        <td>{{ center.email }}</td>\n        <td><a href=\"{{ center.website }}\">{{ center.website }}</a></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/blog/center/components/center-map/center-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/center/components/center-map/center-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_models_address__ = __webpack_require__("../../../../../src/app/core/models/address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_center_selectors__ = __webpack_require__("../../../../../src/app/blog/center/reducers/center.selectors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CenterMapComponent = (function () {
    function CenterMapComponent(store) {
        this.store = store;
        this.centersWithAddress = [];
        this.centersWithAddressFiltered = [];
        this.states = [];
        this.selectedState = '';
        this.selectedState$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.getFullAddress = __WEBPACK_IMPORTED_MODULE_3__core_models_address__["b" /* getFullAddress */];
        this.marker = {
            center: null
        };
    }
    CenterMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var centers$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__reducers_center_selectors__["a" /* getActivatedCenters */]);
        var country$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__reducers_center_selectors__["b" /* getCountry */]);
        this.centersWithAddressSub = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].combineLatest([centers$, country$, this.selectedState$])
            .filter(function (value) { return value[0].length > 0; })
            .filter(function (value) { return value[1] && value[1].toJSON().states && value[1].toJSON().states.length > 0; })
            .subscribe(function (value) {
            // get values from observables
            var centers = value[0];
            var country = value[1].toJSON();
            var search = value[2];
            // init states
            if (_this.states.length === 0) {
                _this.states = country.states;
            }
            // init centersWithAddress
            _this.centersWithAddress = centers.map(function (center) {
                var newCenter = center;
                newCenter.address.state_text = country.states.find((function (state) { return state.id === +center.address.state_id; })).name;
                return newCenter;
            });
            // refresh: centersWithAddressFiltered
            if (search === '') {
                _this.centersWithAddressFiltered = _this.centersWithAddress;
            }
            else {
                _this.centersWithAddressFiltered = _this.centersWithAddress.filter(function (center) { return search === center.address.state_id.toString(); });
            }
        });
    };
    // Map: ready
    CenterMapComponent.prototype.onMapReady = function (event) {
    };
    // Map: click
    CenterMapComponent.prototype.onMapClick = function (event) {
        // console.log(event);
    };
    // Map: idle
    CenterMapComponent.prototype.onIdle = function (event) {
        // console.log(event);
    };
    // Marker: initialized
    CenterMapComponent.prototype.onMarkerInit = function (event) {
        // console.log(event);
    };
    CenterMapComponent.prototype.onChange = function (event) {
        this.selectedState$.next(this.selectedState);
    };
    CenterMapComponent.prototype.onMarkerClick = function (event, data) {
        this.marker.center = data;
        event.target.nguiMapComponent.openInfoWindow('infoWindow', event.target);
    };
    CenterMapComponent.prototype.ngOnDestroy = function () {
        if (this.centersWithAddressSub) {
            this.centersWithAddressSub.unsubscribe();
        }
    };
    return CenterMapComponent;
}());
CenterMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-center-map',
        template: __webpack_require__("../../../../../src/app/blog/center/components/center-map/center-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/center/components/center-map/center-map.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["f" /* Store */]) === "function" && _a || Object])
], CenterMapComponent);

var _a;
//# sourceMappingURL=center-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/center/effects/center.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_center_actions__ = __webpack_require__("../../../../../src/app/blog/center/actions/center.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_center_service__ = __webpack_require__("../../../../../src/app/core/services/center.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CenterEffects = (function () {
    function CenterEffects(actions$, centerService, centerActions) {
        var _this = this;
        this.actions$ = actions$;
        this.centerService = centerService;
        this.centerActions = centerActions;
        this.GetActivatedCenters$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_0__actions_center_actions__["a" /* CenterActions */].GET_ACTIVATED_CENTERS)
            .switchMap(function (action) { return _this.centerService.getActivatedCenters(); })
            .map(function (data) { return _this.centerActions.getActivatedCentersSuccess(data); });
        this.GetCountry$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_0__actions_center_actions__["a" /* CenterActions */].GET_COUNTRY)
            .switchMap(function (action) { return _this.centerService.getCountry(); })
            .map(function (data) { return _this.centerActions.getCountrySuccess(data); });
    }
    return CenterEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]) === "function" && _a || Object)
], CenterEffects.prototype, "GetActivatedCenters$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]) === "function" && _b || Object)
], CenterEffects.prototype, "GetCountry$", void 0);
CenterEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__core_services_center_service__["a" /* CenterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_services_center_service__["a" /* CenterService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__actions_center_actions__["a" /* CenterActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__actions_center_actions__["a" /* CenterActions */]) === "function" && _e || Object])
], CenterEffects);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=center.effects.js.map

/***/ }),

/***/ "../../../../../src/app/blog/center/reducers/center.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return centerReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_center_actions__ = __webpack_require__("../../../../../src/app/blog/center/actions/center.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__center_state__ = __webpack_require__("../../../../../src/app/blog/center/reducers/center.state.ts");


var initialState = new __WEBPACK_IMPORTED_MODULE_1__center_state__["a" /* CenterStateRecord */]();
var centerReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_center_actions__["a" /* CenterActions */].GET_COUNTRY_SUCCESS:
            return state.merge({
                country: payload
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_center_actions__["a" /* CenterActions */].GET_ACTIVATED_CENTERS_SUCCESS:
            return state.merge({
                centers: payload
            });
        default:
            return state;
    }
};
//# sourceMappingURL=center.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/blog/center/reducers/center.selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCenterState */
/* unused harmony export fetchActivatedCenters */
/* unused harmony export fetchCountry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getActivatedCenters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCountry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);

// Base center state selector function
function getCenterState(state) {
    return state.center;
}
// ******************** Individual selectors ***************************
function fetchActivatedCenters(state) {
    return state.centers.toJS();
}
function fetchCountry(state) {
    return state.country;
}
// *************************** PUBLIC API's ****************************
var getActivatedCenters = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCenterState, fetchActivatedCenters);
var getCountry = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCenterState, fetchCountry);
//# sourceMappingURL=center.selectors.js.map

/***/ }),

/***/ "../../../../../src/app/blog/center/reducers/center.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterStateRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/**
 * Read more about Immutable Records here
 * 1. https://coderwall.com/p/vxk_tg/using-immutable-js-in-typescript
 * 2. http://untangled.io/immutable-js-the-foolproof-guide-to-creating-lists/
 * 3. https://blog.jscrambler.com/immutable-data-immutable-js/
 * 4. https://medium.com/azendoo-team/immutable-record-react-redux-99f389ed676#.91s1g124s
 */

var CenterStateRecord = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    centers: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
    country: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}),
});
//# sourceMappingURL=center.state.js.map

/***/ }),

/***/ "../../../../../src/app/blog/static-page/static-page.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template ngFor let-page [ngForOf]=\"(linkPages$ | async)\" let-i=\"index\">\n    <div *ngIf=\"getLink(page.link) == link_from\">\n        <ng-template dynamic-component [componentModules]=\"dynamicExtraModules\" [componentContext]=\"self\" [componentTemplate]=\"page.content | toHtml\"></ng-template>\n    </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/blog/static-page/static-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/static-page/static-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_reducers_selectors__ = __webpack_require__("../../../../../src/app/layout/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaticPageComponent = (function () {
    function StaticPageComponent(store, activatedRoute, router) {
        var _this = this;
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dynamicExtraModules = [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */]];
        this.self = this;
        router
            .events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (e) {
            _this.currentUrl = e.url;
            _this.findCurrentStep(_this.currentUrl);
            window.scrollTo(0, 0);
        });
    }
    StaticPageComponent.prototype.ngOnInit = function () {
        this.linkPages$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__layout_reducers_selectors__["b" /* getAllLinkPages */]);
        this.link_from = this.activatedRoute.snapshot.params.id;
    };
    StaticPageComponent.prototype.isPresent = function () {
        var _this = this;
        var isPresent = false;
        this.linkPages$.subscribe(function (pages) {
            for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
                var page = pages_1[_i];
                if (_this.getLink(page.link) == _this.link_from)
                    isPresent = true;
            }
        });
        return isPresent;
    };
    StaticPageComponent.prototype.getLink = function (link) {
        return link.replace('blog/page/', '');
    };
    StaticPageComponent.prototype.onNavigate = function (str) {
        this.router.navigate([str]);
    };
    StaticPageComponent.prototype.findCurrentStep = function (currentRoute) {
        this.link_from = currentRoute.replace('/blog/page/', '');
    };
    return StaticPageComponent;
}());
StaticPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-static-page',
        template: __webpack_require__("../../../../../src/app/blog/static-page/static-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/static-page/static-page.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], StaticPageComponent);

var _a, _b, _c;
//# sourceMappingURL=static-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/actions/checkout.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutActions; });
var CheckoutActions = (function () {
    function CheckoutActions() {
    }
    CheckoutActions.prototype.fetchCurrentOrder = function () {
        return { type: CheckoutActions.FETCH_CURRENT_ORDER };
    };
    CheckoutActions.prototype.fetchCurrentOrderSuccess = function (order) {
        return {
            type: CheckoutActions.FETCH_CURRENT_ORDER_SUCCESS,
            payload: order
        };
    };
    CheckoutActions.prototype.addToCart = function (variant_id, variants, price, origin) {
        return {
            type: CheckoutActions.ADD_TO_CART,
            payload: { variant_id: variant_id, variants: variants, price: price, origin: origin }
        };
    };
    CheckoutActions.prototype.addToCartSuccess = function (lineItem) {
        return {
            type: CheckoutActions.ADD_TO_CART_SUCCESS,
            payload: lineItem
        };
    };
    CheckoutActions.prototype.removeLineItem = function (lineItemId) {
        return {
            type: CheckoutActions.REMOVE_LINE_ITEM,
            payload: lineItemId
        };
    };
    CheckoutActions.prototype.removeLineItemSuccess = function (lineItem) {
        return {
            type: CheckoutActions.REMOVE_LINE_ITEM_SUCCESS,
            payload: lineItem
        };
    };
    CheckoutActions.prototype.changeLineItemQuantity = function (quantity, lineItemId) {
        return {
            type: CheckoutActions.CHANGE_LINE_ITEM_QUANTITY,
            payload: { quantity: quantity, lineItemId: lineItemId }
        };
    };
    CheckoutActions.prototype.placeOrder = function () {
        return { type: CheckoutActions.PLACE_ORDER };
    };
    CheckoutActions.prototype.changeOrderState = function () {
        return { type: CheckoutActions.CHANGE_ORDER_STATE };
    };
    CheckoutActions.prototype.changeOrderStateSuccess = function (order) {
        return {
            type: CheckoutActions.CHANGE_ORDER_STATE_SUCCESS,
            payload: order
        };
    };
    CheckoutActions.prototype.updateOrder = function () {
        return { type: CheckoutActions.UPDATE_ORDER };
    };
    CheckoutActions.prototype.updateOrderSuccess = function (order) {
        return {
            type: CheckoutActions.UPDATE_ORDER_SUCCESS,
            payload: order
        };
    };
    CheckoutActions.prototype.updateOrderAndState = function () {
        return { type: CheckoutActions.UPDATE_ORDER_AND_STATE };
    };
    CheckoutActions.prototype.updateOrderAndStateSuccess = function (order) {
        return {
            type: CheckoutActions.UPDATE_ORDER_AND_STATE_SUCCESS,
            payload: order
        };
    };
    CheckoutActions.prototype.orderCompleteSuccess = function () {
        return { type: CheckoutActions.ORDER_COMPLETE_SUCCESS };
    };
    CheckoutActions.prototype.updateAdjustmentOrder = function (adj_order) {
        return {
            type: CheckoutActions.UPDATE_ADJUSTMENT_ORDER,
            payload: adj_order
        };
    };
    return CheckoutActions;
}());

CheckoutActions.FETCH_CURRENT_ORDER = 'FETCH_CURRENT_ORDER';
CheckoutActions.FETCH_CURRENT_ORDER_SUCCESS = 'FETCH_CURRENT_ORDER_SUCCESS';
CheckoutActions.ADD_TO_CART = 'ADD_TO_CART';
CheckoutActions.ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
CheckoutActions.REMOVE_LINE_ITEM = 'REMOVE_LINE_ITEM';
CheckoutActions.REMOVE_LINE_ITEM_SUCCESS = 'REMOVE_LINE_ITEM_SUCCESS';
CheckoutActions.CHANGE_LINE_ITEM_QUANTITY = 'CHANGE_LINE_ITEM_QUANTITY';
CheckoutActions.PLACE_ORDER = 'PLACE_ORDER';
CheckoutActions.CHANGE_ORDER_STATE = 'CHANGE_ORDER_STATE';
CheckoutActions.CHANGE_ORDER_STATE_SUCCESS = 'CHANGE_ORDER_STATE_SUCCESS';
CheckoutActions.UPDATE_ORDER_AND_STATE = 'UPDATE_ORDER_AND_STATE';
CheckoutActions.UPDATE_ORDER_AND_STATE_SUCCESS = 'UPDATE_ORDER_AND_STATE_SUCCESS';
CheckoutActions.ORDER_COMPLETE_SUCCESS = 'ORDER_COMPLETE_SUCCESS';
CheckoutActions.UPDATE_ADJUSTMENT_ORDER = 'UPDATE_ADJUSTMENT_ORDER';
CheckoutActions.UPDATE_ORDER = 'UPDATE_ORDER';
CheckoutActions.UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';
//# sourceMappingURL=checkout.actions.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/effects/checkout.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_services_checkout_service__ = __webpack_require__("../../../../../src/app/core/services/checkout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutEffects = (function () {
    function CheckoutEffects(actions$, checkoutService, actions) {
        this.actions$ = actions$;
        this.checkoutService = checkoutService;
        this.actions = actions;
    }
    return CheckoutEffects;
}());
CheckoutEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__core_services_checkout_service__["a" /* CheckoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__core_services_checkout_service__["a" /* CheckoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__actions_checkout_actions__["a" /* CheckoutActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__actions_checkout_actions__["a" /* CheckoutActions */]) === "function" && _c || Object])
], CheckoutEffects);

var _a, _b, _c;
//# sourceMappingURL=checkout.effects.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/reducers/checkout.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkoutReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkout_state__ = __webpack_require__("../../../../../src/app/checkout/reducers/checkout.state.ts");


var initialState = new __WEBPACK_IMPORTED_MODULE_1__checkout_state__["a" /* CheckoutStateRecord */]();
var checkoutReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    var _lineItems, _lineItemEntities, _lineItemIds, _lineItem, _lineItemEntity, _lineItemId, _totalCartItems = 0, _totalCartValue, _totalItemValue, _ship_address, _bill_address, _shipmentEntities, _orderState, _adjustmentOrder, _orderNumber, _isOwnShipping, _selectedRateIndex, _isUpdated;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].FETCH_CURRENT_ORDER_SUCCESS:
            _orderNumber = payload.number;
            _lineItems = payload.line_items;
            _lineItemIds = _lineItems.map(function (lineItem) { return lineItem.id; });
            _totalCartItems = payload.total_quantity;
            _totalCartValue = parseFloat(payload.total);
            _totalItemValue = parseFloat(payload.item_total);
            _ship_address = payload.ship_address;
            _bill_address = payload.bill_address;
            _shipmentEntities = payload.shipments;
            _orderState = payload.state;
            _selectedRateIndex = 0;
            _isOwnShipping = false;
            _isUpdated = false;
            if (_shipmentEntities.length > 0) {
                var selectedId_1 = _shipmentEntities[0].selected_shipping_rate.id;
                _shipmentEntities[0].shipping_rates.map(function (rate, index) {
                    if (rate.id == selectedId_1) {
                        _selectedRateIndex = index;
                    }
                });
                _isOwnShipping = _shipmentEntities[0].is_own_shipping;
            }
            _lineItemEntities = _lineItems.reduce(function (lineItems, lineItem) {
                return Object.assign(lineItems, (_a = {},
                    _a[lineItem.id] = lineItem,
                    _a));
                var _a;
            }, {});
            return state.merge({
                orderNumber: _orderNumber,
                orderState: _orderState,
                lineItemIds: _lineItemIds,
                lineItemEntities: _lineItemEntities,
                totalCartItems: _totalCartItems,
                totalCartValue: _totalCartValue,
                totalItemValue: _totalItemValue,
                shipAddress: _ship_address,
                billAddress: _bill_address,
                shipmentEntities: _shipmentEntities,
                isOwnShipping: _isOwnShipping,
                selectedRateIndex: _selectedRateIndex,
                isUpdated: _isUpdated
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].ADD_TO_CART_SUCCESS:
            _lineItem = payload;
            _lineItemId = _lineItem.id;
            _isUpdated = true;
            // return the same state if the item is already included.
            if (state.lineItemIds.includes(_lineItemId)) {
                return state;
            }
            _totalCartItems = state.totalCartItems + _lineItem.quantity;
            _totalCartValue = state.totalCartValue + parseFloat(_lineItem.total);
            _totalItemValue = state.totalItemValue + parseFloat(_lineItem.total);
            _lineItemEntity = (_b = {}, _b[_lineItemId] = _lineItem, _b);
            _lineItemIds = state.lineItemIds.push(_lineItemId);
            return state.merge({
                lineItemIds: _lineItemIds,
                lineItemEntities: state.lineItemEntities.merge(_lineItemEntity),
                totalCartItems: _totalCartItems,
                totalCartValue: _totalCartValue,
                totalItemValue: _totalItemValue,
                isUpdated: _isUpdated
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].REMOVE_LINE_ITEM_SUCCESS:
            _lineItem = payload;
            _lineItemId = _lineItem.id;
            _isUpdated = true;
            var index = state.lineItemIds.indexOf(_lineItemId);
            if (index >= 0) {
                _lineItemIds = state.lineItemIds.splice(index, 1);
                _lineItemEntities = state.lineItemEntities.delete(_lineItemId.toString());
                _totalCartItems = state.totalCartItems - _lineItem.quantity;
                _totalCartValue = state.totalCartValue - parseFloat(_lineItem.total);
                _totalItemValue = state.totalItemValue - parseFloat(_lineItem.total);
            }
            return state.merge({
                lineItemIds: _lineItemIds,
                lineItemEntities: _lineItemEntities,
                totalCartItems: _totalCartItems,
                totalCartValue: _totalCartValue,
                isUpdated: _isUpdated
            });
        // case CheckoutActions.CHANGE_LINE_ITEM_QUANTITY:
        //   const quantity = payload.quantity;
        //   lineItemId = payload.lineItemId;
        //   _lineItemEntities = state.lineItemEntities;
        //   _lineItemEntities[lineItemId][quantity] = quantity;
        //   return state.merge({
        //     lineItemEntities: _lineItemEntities
        //   }) as CheckoutState;
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].UPDATE_ORDER_SUCCESS:
            _orderNumber = payload.number;
            _lineItems = payload.line_items;
            _lineItemIds = _lineItems.map(function (lineItem) { return lineItem.id; });
            _totalCartItems = payload.total_quantity;
            // _totalCartValue = parseFloat(payload.total);
            _totalItemValue = parseFloat(payload.item_total);
            _ship_address = payload.ship_address;
            _bill_address = payload.bill_address;
            _shipmentEntities = payload.shipments;
            _orderState = payload.state;
            _isUpdated = false;
            _lineItemEntities = _lineItems.reduce(function (lineItems, lineItem) {
                return Object.assign(lineItems, (_a = {},
                    _a[lineItem.id] = lineItem,
                    _a));
                var _a;
            }, {});
            return state.merge({
                orderNumber: _orderNumber,
                orderState: _orderState,
                lineItemIds: _lineItemIds,
                lineItemEntities: _lineItemEntities,
                totalCartItems: _totalCartItems,
                // totalCartValue: _totalCartValue,
                totalItemValue: _totalItemValue,
                shipAddress: _ship_address,
                billAddress: _bill_address,
                shipmentEntities: _shipmentEntities,
                isUpdated: _isUpdated
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].CHANGE_ORDER_STATE_SUCCESS:
            _orderState = payload.state;
            // _totalCartValue = parseFloat(payload.total);
            // _totalItemValue = parseFloat(payload.item_total);
            _shipmentEntities = payload.shipments;
            return state.merge({
                orderState: _orderState,
                // totalCartValue: _totalCartValue,
                // totalItemValue: _totalItemValue,
                shipmentEntities: _shipmentEntities
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].UPDATE_ORDER_AND_STATE_SUCCESS:
            _ship_address = payload.ship_address;
            _bill_address = payload.bill_address;
            _orderState = payload.state;
            _shipmentEntities = payload.shipments;
            _totalCartValue = parseFloat(payload.total);
            _totalItemValue = parseFloat(payload.item_total);
            _isUpdated = false;
            if (_shipmentEntities.length > 0) {
                var selectedId_2 = _shipmentEntities[0].selected_shipping_rate.id;
                _shipmentEntities[0].shipping_rates.map(function (rate, index) {
                    if (rate.id == selectedId_2) {
                        _selectedRateIndex = index;
                    }
                });
                _isOwnShipping = _shipmentEntities[0].is_own_shipping;
            }
            return state.merge({
                orderState: _orderState,
                shipAddress: _ship_address,
                billAddress: _bill_address,
                shipmentEntities: _shipmentEntities,
                totalItemValue: _totalItemValue,
                totalCartValue: _totalCartValue,
                isOwnShipping: _isOwnShipping,
                selectedRateIndex: _selectedRateIndex,
                isUpdated: _isUpdated
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].UPDATE_ADJUSTMENT_ORDER:
            _adjustmentOrder = payload;
            return state.merge({
                adjustmentOrder: _adjustmentOrder
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].ORDER_COMPLETE_SUCCESS:
            return initialState;
        default:
            return state;
    }
    var _b;
};
//# sourceMappingURL=checkout.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/reducers/checkout.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutStateRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);

var CheckoutStateRecord = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    orderNumber: null,
    orderState: null,
    lineItemIds: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
    lineItemEntities: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}),
    totalCartItems: 0,
    totalItemValue: 0,
    totalCartValue: 0,
    billAddress: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({}),
    shipAddress: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({}),
    shipmentEntities: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}),
    adjustmentOrder: null,
    isOwnShipping: false,
    selectedRateIndex: 0,
    isUpdated: false
});
//# sourceMappingURL=checkout.state.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/reducers/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCheckoutState */
/* unused harmony export fetchLineItems */
/* unused harmony export fetchOrderNumber */
/* unused harmony export fetchTotalCartItems */
/* unused harmony export fetchTotalCartValue */
/* unused harmony export fetchTotalItemValue */
/* unused harmony export fetchShipAddress */
/* unused harmony export fetchBillAddress */
/* unused harmony export fetchOrderState */
/* unused harmony export fetchAdjustmentOrderState */
/* unused harmony export fetchShipment */
/* unused harmony export fetchSelectedRate */
/* unused harmony export fetchIsOwnShipFlag */
/* unused harmony export fetchUpdateStatus */
/* unused harmony export fetchSelectedRateName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getLineItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getOrderNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getTotalCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getTotalCartValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getTotalItemValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getShipAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBillAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getOrderState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdjustmentOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getShipment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getIsOwnShipFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getSelectedRateIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getUpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getSelectedRateName; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);

// Base Cart State function
function getCheckoutState(state) {
    return state.checkout;
}
// ******************** Individual selectors ***************************
function fetchLineItems(state) {
    var ids = state.lineItemIds.toJS();
    var lineItemEntitites = state.lineItemEntities.toJS();
    return ids.map(function (id) { return lineItemEntitites[id]; });
}
function fetchOrderNumber(state) {
    return state.orderNumber;
}
function fetchTotalCartItems(state) {
    return state.totalCartItems;
}
function fetchTotalCartValue(state) {
    return state.totalCartValue;
}
function fetchTotalItemValue(state) {
    return state.totalItemValue;
}
function fetchShipAddress(state) {
    return state.shipAddress ? state.shipAddress.toJS() : state.shipAddress;
}
function fetchBillAddress(state) {
    return state.billAddress ? state.billAddress.toJS() : state.billAddress;
}
function fetchOrderState(state) {
    return state.orderState;
}
function fetchAdjustmentOrderState(state) {
    return state.adjustmentOrder;
}
function fetchShipment(state) {
    return state.shipmentEntities.toJS();
}
function fetchSelectedRate(state) {
    return state.selectedRateIndex;
}
function fetchIsOwnShipFlag(state) {
    return state.isOwnShipping;
}
function fetchUpdateStatus(state) {
    return state.isUpdated;
}
function fetchSelectedRateName(state) {
    var shipmentEntities = state.shipmentEntities.toJS();
    if (shipmentEntities.length > 0)
        return shipmentEntities[0].selected_shipping_rate.name;
    else
        return "";
}
// *************************** PUBLIC API's ****************************
var getLineItems = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchLineItems);
var getOrderNumber = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchOrderNumber);
var getTotalCartItems = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchTotalCartItems);
var getTotalCartValue = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchTotalCartValue);
var getTotalItemValue = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchTotalItemValue);
var getShipAddress = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchShipAddress);
var getBillAddress = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchBillAddress);
var getOrderState = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchOrderState);
var getAdjustmentOrder = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchAdjustmentOrderState);
var getShipment = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchShipment);
var getIsOwnShipFlag = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchIsOwnShipFlag);
var getSelectedRateIndex = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchSelectedRate);
var getUpdateStatus = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchUpdateStatus);
var getSelectedRateName = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchSelectedRateName);
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ "../../../../../src/app/core/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateViaAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_reducers_selectors__ = __webpack_require__("../../../../../src/app/auth/reducers/selectors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CanActivateViaAuthGuard = (function () {
    function CanActivateViaAuthGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    CanActivateViaAuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        this.subscription = this.store
            .select(__WEBPACK_IMPORTED_MODULE_3__auth_reducers_selectors__["a" /* getAuthStatus */])
            .subscribe(function (isAuthenticated) {
            _this.isAuthenticated = isAuthenticated;
            if (!isAuthenticated) {
                _this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
            }
        });
        return this.isAuthenticated;
    };
    CanActivateViaAuthGuard.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return CanActivateViaAuthGuard;
}());
CanActivateViaAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], CanActivateViaAuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/guards/center.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateViaCenterGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_center_service__ = __webpack_require__("../../../../../src/app/core/services/center.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateViaCenterGuard = (function () {
    function CanActivateViaCenterGuard(router, centerService) {
        this.router = router;
        this.centerService = centerService;
    }
    CanActivateViaCenterGuard.prototype.canActivate = function (route, state) {
        if (this.centerService.completedCenterApp !== null) {
            return true;
        }
        else {
            this.router.navigate(['/blog/center']);
            return false;
        }
    };
    return CanActivateViaCenterGuard;
}());
CanActivateViaCenterGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_center_service__["a" /* CenterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_center_service__["a" /* CenterService */]) === "function" && _b || Object])
], CanActivateViaCenterGuard);

var _a, _b;
//# sourceMappingURL=center.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export httpInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkout_effects_checkout_effects__ = __webpack_require__("../../../../../src/app/checkout/effects/checkout.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_checkout_service__ = __webpack_require__("../../../../../src/app/core/services/checkout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_product_service__ = __webpack_require__("../../../../../src/app/core/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_variant_retriver_service__ = __webpack_require__("../../../../../src/app/core/services/variant-retriver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_variant_parser_service__ = __webpack_require__("../../../../../src/app/core/services/variant-parser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_address_service__ = __webpack_require__("../../../../../src/app/core/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_effects_auth_effects__ = __webpack_require__("../../../../../src/app/auth/effects/auth.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product_effects_product_effects__ = __webpack_require__("../../../../../src/app/product/effects/product.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_effects_user_effects__ = __webpack_require__("../../../../../src/app/user/effects/user.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__("../../../../../src/app/core/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_center_guard__ = __webpack_require__("../../../../../src/app/core/guards/center.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_menu_service__ = __webpack_require__("../../../../../src/app/core/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__layout_actions_menu_actions__ = __webpack_require__("../../../../../src/app/layout/actions/menu.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__layout_effects_menu_effects__ = __webpack_require__("../../../../../src/app/layout/effects/menu.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_center_service__ = __webpack_require__("../../../../../src/app/core/services/center.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__blog_center_actions_center_actions__ = __webpack_require__("../../../../../src/app/blog/center/actions/center.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__blog_center_effects_center_effects__ = __webpack_require__("../../../../../src/app/blog/center/effects/center.effects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Components
// Services






// import { ProductDummyService } from './services/product-dummy.service';















function httpInterceptor(backend, defaultOptions) {
    return new __WEBPACK_IMPORTED_MODULE_6__services_http__["a" /* HttpService */](backend, defaultOptions);
}
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [],
        exports: [],
        imports: [
            // Were not working on modules sice update to rc-5
            // TO BE moved to respective modules.
            __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_13__auth_effects_auth_effects__["a" /* AuthenticationEffects */]),
            __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_14__product_effects_product_effects__["a" /* ProductEffects */]),
            __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_0__checkout_effects_checkout_effects__["a" /* CheckoutEffects */]),
            __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_16__user_effects_user_effects__["a" /* UserEffects */]),
            __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_22__layout_effects_menu_effects__["a" /* MenuEffects */]),
            __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_25__blog_center_effects_center_effects__["a" /* CenterEffects */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_variant_parser_service__["a" /* VariantParserService */],
            __WEBPACK_IMPORTED_MODULE_9__services_variant_retriver_service__["a" /* VariantRetriverService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_6__services_http__["a" /* HttpService */],
                useFactory: httpInterceptor,
                deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["XHRBackend"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]]
            },
            __WEBPACK_IMPORTED_MODULE_2__services_checkout_service__["a" /* CheckoutService */],
            // ProductDummyService,
            __WEBPACK_IMPORTED_MODULE_7__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_8__auth_actions_auth_actions__["a" /* AuthActions */],
            __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__["a" /* CheckoutActions */],
            __WEBPACK_IMPORTED_MODULE_15__user_actions_user_actions__["a" /* UserActions */],
            __WEBPACK_IMPORTED_MODULE_17__user_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_11__services_address_service__["a" /* AddressService */],
            __WEBPACK_IMPORTED_MODULE_20__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_21__layout_actions_menu_actions__["a" /* MenuActions */],
            __WEBPACK_IMPORTED_MODULE_23__services_center_service__["a" /* CenterService */],
            __WEBPACK_IMPORTED_MODULE_24__blog_center_actions_center_actions__["a" /* CenterActions */],
            __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* CanActivateViaAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_19__guards_center_guard__["a" /* CanActivateViaCenterGuard */]
        ]
    })
], CoreModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/core/models/address.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony export (immutable) */ __webpack_exports__["b"] = getFullAddress;
/* Address model
 * Detailed info http://guides.spreecommerce.org/developer/addresses.html
 * Public API's http://guides.spreecommerce.org/api/addresses.html
 */
var Address = (function () {
    function Address() {
    }
    return Address;
}());

function getFullAddress(address) {
    return address.address1 + ' ' +
        address.address2 + ' ' +
        address.city + ' ' +
        (address.state_text ? address.state_text : '') + ' ' +
        address.zipcode;
}
//# sourceMappingURL=address.js.map

/***/ }),

/***/ "../../../../../src/app/core/pipes/humanize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HumanizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// tslint:disable-next-line:use-pipe-transform-interface
var HumanizePipe = (function () {
    function HumanizePipe() {
    }
    /**
     *
     *
     * @param {any} value
     * @returns
     *
     * @memberof HumanizePipe
     */
    HumanizePipe.prototype.transform = function (value) {
        var updated_val = value;
        if (typeof (value) === 'string') {
            updated_val = value.replace(/\_/g, ' ');
        }
        return updated_val;
    };
    return HumanizePipe;
}());
HumanizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'humanize' })
], HumanizePipe);

;
//# sourceMappingURL=humanize.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/address.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddressService = (function () {
    function AddressService(http) {
        this.http = http;
    }
    AddressService.prototype.getCountries = function () {
        return this.http.get("/api/countries")
            .map(function (res) {
            var countries = res.json();
            return countries;
        });
    };
    return AddressService;
}());
AddressService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http__["a" /* HttpService */]) === "function" && _a || Object])
], AddressService);

var _a;
//# sourceMappingURL=address.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    /**
     * Creates an instance of AuthService.
     * @param {HttpService} http
     * @param {AuthActions} actions
     * @param {Store<AppState>} store
     *
     * @memberof AuthService
     */
    function AuthService(http, actions, store) {
        this.http = http;
        this.actions = actions;
        this.store = store;
    }
    /**
     *
     *
     * @param {any} data
     * @returns {Observable<any>}
     *
     * @memberof AuthService
     */
    AuthService.prototype.login = function (data) {
        var _this = this;
        return this.http.post('spree/login.json', { spree_user: data }).map(function (res) {
            data = res.json();
            if (!data.error) {
                // Setting token after login
                console.log(res.json());
                _this.setTokenInLocalStorage(data);
                _this.store.dispatch(_this.actions.loginSuccess());
            }
            else {
                _this.http.loading.next({
                    loading: false,
                    hasError: true,
                    hasMsg: 'Please enter valid Credentials'
                });
            }
            return data;
        });
        // catch should be handled here with the http observable
        // so that only the inner obs dies and not the effect Observable
        // otherwise no further login requests will be fired
        // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
    };
    /**
     *
     *
     * @param {any} data
     * @returns {Observable<any>}
     *
     * @memberof AuthService
     */
    AuthService.prototype.register = function (data) {
        var _this = this;
        return this.http.post('api/account', 
        // 'spree/signup.json',
        { spree_user: data }).map(function (res) {
            data = res.json();
            if (!data.errors) {
                // Setting token after login
                _this.setTokenInLocalStorage(res.json());
                _this.store.dispatch(_this.actions.loginSuccess());
            }
            else {
                _this.http.loading.next({
                    loading: false,
                    hasError: true,
                    hasMsg: 'Please enter valid Credentials'
                });
            }
            return res.json();
        });
        // catch should be handled here with the http observable
        // so that only the inner obs dies and not the effect Observable
        // otherwise no further login requests will be fired
        // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
    };
    /**
     *
     *
     * @returns {Observable<any>}
     *
     * @memberof AuthService
     */
    AuthService.prototype.authorized = function () {
        return this.http
            .get('spree/api/v1/users')
            .map(function (res) { return res.json(); });
        // catch should be handled here with the http observable
        // so that only the inner obs dies and not the effect Observable
        // otherwise no further login requests will be fired
        // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
    };
    /**
     *
     *
     * @returns
     *
     * @memberof AuthService
     */
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get('spree/logout.json')
            .map(function (res) {
            // Setting token after login
            localStorage.removeItem('user');
            _this.store.dispatch(_this.actions.logoutSuccess());
            return res.json();
        });
    };
    /**
     *
     *
     */
    AuthService.prototype.c_register = function (data) {
        var _this = this;
        console.log("corp---", data);
        return this.http.post('api/corporate_account', 
        // 'spree/signup.json',
        { corporate_account: data }).map(function (res) {
            data = res.json();
            console.log(data);
            if (!data.errors) {
                // Setting token after login
                // this.setTokenInLocalStorage(res.json());
                // this.store.dispatch(this.actions.loginSuccess());
            }
            else {
                _this.http.loading.next({
                    loading: false,
                    hasError: true,
                    hasMsg: 'Please enter valid Credentials'
                });
            }
            return res.json();
        });
        // catch should be handled here with the http observable
        // so that only the inner obs dies and not the effect Observable
        // otherwise no further login requests will be fired
        // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
    };
    AuthService.prototype.setTokenInLocalStorage = function (user_data) {
        var jsonData = JSON.stringify(user_data);
        localStorage.setItem('user', jsonData);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_actions_auth_actions__["a" /* AuthActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/center.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CenterService = (function () {
    function CenterService(http) {
        this.http = http;
        // cache
        this.completedCenterApp = null;
    }
    CenterService.prototype.createCenterApp = function (centerApp) {
        var _this = this;
        return this.http.post('api/center_applications', {
            center_application: centerApp
        }).map(function (res) {
            var response = res.json();
            // cache response to service
            _this.completedCenterApp = {
                office_name: response.office_name,
                head_doctor: response.head_doctor,
                email: response.email,
                website: response.website,
                num_of_doctors: response.num_of_doctors.toString(),
                num_of_staff: response.num_of_staff.toString(),
                college: response.college,
                degree: response.degree,
                state: response.state,
                address: {
                    firstname: response.address.firstname,
                    lastname: response.address.lastname,
                    address1: response.address.address1,
                    address2: response.address.address2,
                    city: response.address.city,
                    zipcode: response.address.zipcode,
                    phone: response.address.phone,
                    state_name: response.address.state_name,
                    alternative_phone: response.address.alternative_phone,
                    company: response.address.company,
                    state_id: response.address.state_id.toString(),
                    country_id: response.address.country_id.toString(),
                    created_at: response.address.created_at,
                    updated_at: response.address.updated_at
                }
            };
            return _this.completedCenterApp;
        }).catch(function (error) {
            console.log('In center.service createCenterApp catch: ' + error);
            return error;
        });
    };
    CenterService.prototype.getActivatedCenters = function () {
        return this.http.get('/api/center_applications/activated')
            .map(function (res) { return res.json(); });
    };
    // Hardcode for now; system only uses United States-based applications
    CenterService.prototype.getCountry = function () {
        return this.http.get('/api/countries/' + 232)
            .map(function (res) { return res.json(); });
    };
    return CenterService;
}());
CenterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http__["a" /* HttpService */]) === "function" && _a || Object])
], CenterService);

var _a;
//# sourceMappingURL=center.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/checkout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkout_reducers_selectors__ = __webpack_require__("../../../../../src/app/checkout/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckoutService = (function () {
    /**
     * Creates an instance of CheckoutService.
     * @param {HttpService} http
     * @param {CheckoutActions} actions
     * @param {Store<AppState>} store
     *
     * @memberof CheckoutService
     */
    function CheckoutService(http, actions, store) {
        var _this = this;
        this.http = http;
        this.actions = actions;
        this.store = store;
        this.store.select(__WEBPACK_IMPORTED_MODULE_0__checkout_reducers_selectors__["e" /* getOrderNumber */])
            .subscribe(function (number) { return _this.orderNumber = number; });
    }
    //  Change below methods once angular releases RC4, so that this methods can be called from effects
    //  Follow this linke to know more about this issue https://github.com/angular/angular/issues/12869
    /**
     *
     *
     * @param {number} variant_id
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.createNewLineItem = function (params) {
        // console.log(`spree/api/v1/orders/${this.orderNumber}/line_items?order_token=${this.getOrderToken()}`);
        console.log("original order", params.origin);
        return this.http.post("spree/api/v1/orders/" + this.orderNumber + "/line_items?order_token=" + this.getOrderToken(), {
            line_item: {
                variant_id: params.variant_id,
                quantity: 1,
                price: params.price,
                original_line_item: params.origin
            }
        }).map(function (res) {
            var lineItem = res.json();
            return lineItem;
        });
    };
    /**
     *
     *
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.fetchCurrentOrder = function () {
        var _this = this;
        return this.http.get('spree/api/v1/orders/current').map(function (res) {
            var order = res.json();
            if (order) {
                var token = order.token;
                _this.setOrderTokenInLocalStorage({ order_token: token });
                return _this.store.dispatch(_this.actions.fetchCurrentOrderSuccess(order));
            }
            else {
                _this.createEmptyOrder()
                    .subscribe();
            }
        });
    };
    /**
     *
     *
     * @param {any} orderNumber
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.getOrder = function (orderNumber) {
        return this.http.get("spree/api/v1/orders/" + orderNumber + ".json").map(function (res) {
            var order = res.json();
            return order;
        });
    };
    /**
     *
     *
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.createEmptyOrder = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
            'Content-Type': 'text/plain',
            'X-Spree-Token': user && user.spree_api_key
        });
        return this.http.post('spree/api/v1/orders.json', {}, { headers: headers }).map(function (res) {
            var order = res.json();
            var token = order.token;
            _this.setOrderTokenInLocalStorage({ order_token: token });
            return _this.store.dispatch(_this.actions.fetchCurrentOrderSuccess(order));
        });
    };
    /**
     *
     *
     * @param {LineItem} lineItem
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.deleteLineItem = function (lineItem) {
        var _this = this;
        return this.http.delete("spree/api/v1/orders/" + this.orderNumber + "/line_items/" + lineItem.id + "?order_token=" + this.getOrderToken())
            .map(function () {
            _this.store.dispatch(_this.actions.removeLineItemSuccess(lineItem));
        });
    };
    /**
     *
     *
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.changeOrderState = function () {
        var _this = this;
        console.log(this.orderNumber, this.getOrderToken);
        return this.http.put("spree/api/v1/checkouts/" + this.orderNumber + "/next.json?order_token=" + this.getOrderToken(), {})
            .map(function (res) {
            var order = res.json();
            console.log("order state", order);
            _this.store.dispatch(_this.actions.changeOrderStateSuccess(order));
        });
    };
    /**
     *
     *
     * @param {any} params
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.updateOrder = function () {
        var _this = this;
        return this.http.put("spree/api/v1/orders/" + this.orderNumber + ".json?order_token=" + this.getOrderToken(), {
            "order": {
                "user_id": this.getUserId()
            }
        })
            .map(function (res) {
            var order = res.json();
            _this.store.dispatch(_this.actions.updateOrderSuccess(order));
        });
    };
    /**
     *
     *
     * @param {any} params
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.updateOrderAndState = function (params) {
        var _this = this;
        return this.http.put("spree/api/v1/checkouts/" + this.orderNumber + ".json?order_token=" + this.getOrderToken(), params).map(function (res) {
            var order = res.json();
            console.log("order*****", order);
            _this.store.dispatch(_this.actions.updateOrderAndStateSuccess(order));
        });
    };
    /**
     *
     *
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.availablePaymentMethods = function () {
        return this.http.get("spree/api/v1/orders/" + this.orderNumber + "/payments/new?order_token=" + this.getOrderToken()).map(function (res) {
            var payments = res.json();
            return payments;
        });
    };
    /**
     *
     *
     * @param {any} paymentModeId
     * @param {any} paymentAmount
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.createNewPayment = function (paymentModeId, paymentAmount) {
        var _this = this;
        return this.http.post("spree/api/v1/orders/" + this.orderNumber + "/payments?order_token=" + this.getOrderToken(), {
            payment: {
                payment_method_id: paymentModeId,
                amount: paymentAmount
            }
        }).map(function (res) {
            _this.changeOrderState()
                .subscribe();
        });
    };
    /**
     *
     *
     * @private
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.getOrderToken = function () {
        var order = JSON.parse(localStorage.getItem('order'));
        var token = order.order_token;
        return token;
    };
    CheckoutService.prototype.getUserId = function () {
        var userId = JSON.parse(localStorage.getItem('user')).id;
        return userId;
    };
    /**
     *
     *
     * @private
     * @param {any} token
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.setOrderTokenInLocalStorage = function (token) {
        var jsonData = JSON.stringify(token);
        localStorage.setItem('order', jsonData);
    };
    return CheckoutService;
}());
CheckoutService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__http__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__["a" /* CheckoutActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__["a" /* CheckoutActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["f" /* Store */]) === "function" && _c || Object])
], CheckoutService);

var _a, _b, _c;
//# sourceMappingURL=checkout.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/http.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Http Intercepter Service
 * TODO: Add Loader and Toasty Service currently using console log
 * for showing errors and response and request completion;
 */





var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.loading = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        return _this;
    }
    /**
     * Performs any type of http request.
     * @param url
     * @param options
     * @returns {Observable<Response>}
     */
    HttpService.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options);
    };
    /**
     * Performs a request with `get` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.get = function (url, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.get.call(this, this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    HttpService.prototype.getLocal = function (url, options) {
        return _super.prototype.get.call(this, url, options);
    };
    /**
     * Performs a request with `post` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.post = function (url, body, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.post.call(this, this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    /**
     * Performs a request with `put` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.put = function (url, body, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.put.call(this, this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    /**
     * Performs a request with `delete` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.delete = function (url, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.delete.call(this, this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    /**
     * Request options.
     * @param options
     * @returns {RequestOptionsArgs}
     */
    HttpService.prototype.requestOptions = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        }
        if (options.headers == null) {
            var user = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : null;
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'X-Spree-Token': user && user.spree_api_key
            });
        }
        return options;
    };
    /**
     * Build API url.
     * @param url
     * @returns {string}
     */
    HttpService.prototype.getFullUrl = function (url) {
        return __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_ENDPOINT + url;
    };
    /**
     * Request interceptor.
     */
    HttpService.prototype.requestInterceptor = function () {
        console.log('Sending Request');
        // this.loaderService.showPreloader();
        this.loading.next({
            loading: true, hasError: false, hasMsg: ''
        });
    };
    /**
     * Response interceptor.
     */
    HttpService.prototype.responseInterceptor = function () {
        console.log('Request Complete');
        // this.loaderService.hidePreloader();
    };
    /**
     * Error handler.
     * @param error
     * @param caught
     * @returns {ErrorObservable}
     */
    HttpService.prototype.onCatch = function (error, caught) {
        console.log('Something went terrible wrong and error is', error);
        // this.loaderService.popError();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(error);
    };
    /**
     * onSubscribeSuccess
     * @param res
     */
    HttpService.prototype.onSubscribeSuccess = function (res) {
        this.loading.next({
            loading: false, hasError: false, hasMsg: ''
        });
    };
    /**
     * onSubscribeError
     * @param error
     */
    HttpService.prototype.onSubscribeError = function (error) {
        console.log('Something Went wrong while subscribing', error);
        // this.loaderService.popError();
        this.loading.next({
            loading: false, hasError: true, hasMsg: 'Something went wrong'
        });
    };
    /**
     * onFinally
     */
    HttpService.prototype.onFinally = function () {
        this.responseInterceptor();
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]));
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["ConnectionBackend"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["ConnectionBackend"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]) === "function" && _b || Object])
], HttpService);

var _a, _b;
//# sourceMappingURL=http.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
    }
    MenuService.prototype.getAllDropDowns = function () {
        return this.http
            .get('api/drop_downs')
            .map(function (res) { return res.json(); });
    };
    MenuService.prototype.getDropDownPage = function (id) {
        return this.http
            .get('api/drop_downs/' + id)
            .map(function (res) { return res.json(); });
    };
    MenuService.prototype.getDropDownPageByItem = function (id, item_id) {
        return this.http
            .get('api/drop_downs/' + id + '/drop_down_items/' + item_id)
            .map(function (res) { return res.json(); });
    };
    MenuService.prototype.getLinkPages = function () {
        return this.http
            .get('api/maintainable_pages')
            .map(function (res) { return res.json(); });
    };
    return MenuService;
}());
MenuService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http__["a" /* HttpService */]) === "function" && _a || Object])
], MenuService);

var _a;
//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function () {
    /**
     * Creates an instance of ProductService.
     * @param {HttpService} http
     *
     * @memberof ProductService
     */
    function ProductService(http) {
        this.http = http;
    }
    /**
     *
     *
     * @param {string} id
     * @returns {Observable<any>}
     *
     * @memberof ProductService
     */
    ProductService.prototype.getProduct = function (id) {
        return this.http.get("/api/products/" + id)
            .map(function (res) { return res.json(); });
    };
    /**
     *
     *
     * @returns {*}
     *
     * @memberof ProductService
     */
    ProductService.prototype.getTaxonomies = function () {
        var _this = this;
        return this.http.get("/spree/api/v1/taxonomies?set=nested")
            .map(function (res) {
            _this.setTaxonsInLocalStorage(res.json());
            return res.json();
        });
    };
    /**
     *
     *
     * @returns {*}
     *
     * @memberof ProductService
     */
    ProductService.prototype.getProducts = function () {
        return this.http.get("/api/products")
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.setTaxonsInLocalStorage = function (data) {
        if (data.count > 0) {
            var taxons = JSON.stringify(data.taxonomies[0].root.taxons);
            localStorage.setItem('taxons', taxons);
        }
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__http__["a" /* HttpService */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/variant-parser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariantParserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VariantParserService = (function () {
    function VariantParserService() {
    }
    VariantParserService.prototype.getVariantOptionHash = function (optionTypes, variantOptionTypes) {
        var variantOptionHash = {};
        for (var i = 0; i < optionTypes.length; i++) {
            if (optionTypes[i].option_case.name == 'Selection') {
                variantOptionHash[optionTypes[i].name] = Object.assign({}, this.getVariantValueHash(optionTypes[i], variantOptionTypes));
            }
        }
        return variantOptionHash;
    };
    VariantParserService.prototype.getVariantValueHash = function (optionType, variantOptionTypes) {
        var innerHash = {};
        for (var i = 0; i < variantOptionTypes.length; i++) {
            if (variantOptionTypes[i].option_type_id == optionType.id) {
                var values = variantOptionTypes[i].product_variant_values;
                for (var j = 0; j < values.length; j++) {
                    innerHash[values[j].name] = Object.assign({}, {
                        id: optionType.option_values[j].id,
                        price: values[j].price
                    });
                }
            }
        }
        return innerHash;
    };
    return VariantParserService;
}());
VariantParserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], VariantParserService);

//# sourceMappingURL=variant-parser.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/variant-retriver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariantRetriverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VariantRetriverService = (function () {
    function VariantRetriverService() {
        this.customSelectedOptions = {};
        this.currentVariantIds = [];
        this.variantId = null;
        this.variant = null;
    }
    VariantRetriverService.prototype.getCurrentSelectedOptions = function (selectedOption, currentOptions) {
        currentOptions[selectedOption.option_type_name] = Object.assign({}, {
            name: selectedOption.name,
            id: selectedOption.id
        });
        return currentOptions;
    };
    return VariantRetriverService;
}());
VariantRetriverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], VariantRetriverService);

//# sourceMappingURL=variant-retriver.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/reducers/search.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchActions; });
var SearchActions = (function () {
    function SearchActions() {
    }
    /**
     * @method getAllFtilers
     * Fetches all the filters that have been getSelectedProduct
     * Used in filterSummaryComponent
     */
    SearchActions.prototype.getAllFiltes = function () {
        return { type: SearchActions.GET_ALL_FILTERS };
    };
    /**
     * @method addFilter
     * @param taxon Class Taxon
     * Get's triggered on checking the checkboxes in TaxonsComponent.
     */
    SearchActions.prototype.addFilter = function (taxon) {
        return {
            type: SearchActions.ADD_FILTER,
            payload: taxon
        };
    };
    /**
     * @method removeFilter
     * @param taxon
     * Get's triggered at 2 places:-
     * 1. When user unchecks the checkbox.
     * 2. When user clears the selected filtes in filterSummaryComponent
     */
    SearchActions.prototype.removeFilter = function (taxon) {
        return {
            type: SearchActions.REMOVE_FILTER,
            payload: taxon
        };
    };
    return SearchActions;
}());

SearchActions.GET_ALL_FILTERS = 'GET_ALL_FILTERS';
SearchActions.ADD_FILTER = 'ADD_FILTER';
SearchActions.REMOVE_FILTER = 'REMOVE_FILTER';
//# sourceMappingURL=search.actions.js.map

/***/ }),

/***/ "../../../../../src/app/home/reducers/search.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return searchReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_actions__ = __webpack_require__("../../../../../src/app/home/reducers/search.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_state__ = __webpack_require__("../../../../../src/app/home/reducers/search.state.ts");


var initialState = new __WEBPACK_IMPORTED_MODULE_1__search_state__["a" /* SearchStateRecord */]();
var searchReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__search_actions__["a" /* SearchActions */].ADD_FILTER:
            var filterAlreadyPresent_1 = false;
            state.selectedFilters.forEach(function (filter) {
                var filterId = filter['id'];
                if (filterId === payload.id) {
                    filterAlreadyPresent_1 = true;
                }
            });
            if (filterAlreadyPresent_1) {
                return state;
            }
            else {
                var _selectedFilters_1 = state.selectedFilters.concat([payload]);
                var _selectedTaxonIds_1 = state.selectedTaxonIds.concat(payload.id);
                return state.merge({
                    selectedFilters: _selectedFilters_1,
                    selectedTaxonIds: _selectedTaxonIds_1
                });
            }
        case __WEBPACK_IMPORTED_MODULE_0__search_actions__["a" /* SearchActions */].REMOVE_FILTER:
            var removeIndex_1 = -1;
            state.selectedFilters.forEach(function (filter, index) {
                var filterId = filter['id'];
                if (filterId === payload.id) {
                    removeIndex_1 = index;
                }
            });
            var _selectedFilters = state.selectedFilters.remove(removeIndex_1);
            var taxonRemoveIndex = state.selectedTaxonIds.findIndex(function (filterId) { return payload.id === filterId; });
            var _selectedTaxonIds = state.selectedTaxonIds.remove(taxonRemoveIndex);
            return state.merge({
                selectedFilters: _selectedFilters,
                selectedTaxonIds: _selectedTaxonIds
            });
        default:
            return state;
    }
};
//# sourceMappingURL=search.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/home/reducers/search.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchStateRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/** Search state
 * [{
 *   name: 'Bag',
 *   taxonId: 1
 * }, {
 *   name: 'T-shirts',
 *   taxonId: 9
 * }]
 *
*/

var SearchStateRecord = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    selectedFilters: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
    selectedTaxonIds: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([])
});
//# sourceMappingURL=search.state.js.map

/***/ }),

/***/ "../../../../../src/app/layout/actions/menu.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuActions; });
var MenuActions = (function () {
    function MenuActions() {
    }
    // static GET_SELECTED_DROP_DOWN = 'GET_SELECTED_DROP_DOWN';
    // static GET_SELECTED_DROP_DOWN_SUCCESS = 'GET_SELECTED_DROP_DOWN_SUCCESS';
    // static GET_SELECTED_DROP_DOWN_ITEM = 'GET_SELECTED_DROP_DOWN_ITEM';
    // static GET_SELECTED_DROP_DOWN_ITEM_SUCCESS = 'GET_SELECTED_DROP_DOWN_ITEM_SUCCESS';
    MenuActions.prototype.getAllDropDowns = function () {
        return { type: MenuActions.GET_ALL_DROP_DOWNS };
    };
    MenuActions.prototype.getAllDropDownsSuccess = function (drop_downs) {
        return {
            type: MenuActions.GET_ALL_DROP_DOWNS_SUCCESS,
            payload: drop_downs
        };
    };
    MenuActions.prototype.getAllLinkPages = function () {
        return { type: MenuActions.GET_ALL_LINK_PAGES };
    };
    MenuActions.prototype.getAllLinkPagesSuccess = function (pages) {
        return {
            type: MenuActions.GET_ALL_LINK_PAGES_SUCCESS,
            payload: pages
        };
    };
    return MenuActions;
}());

MenuActions.GET_ALL_DROP_DOWNS = 'GET_ALL_DROP_DOWNS';
MenuActions.GET_ALL_DROP_DOWNS_SUCCESS = 'GET_ALL_DROP_DOWNS_SUCCESS';
MenuActions.GET_ALL_LINK_PAGES = 'GET_ALL_LINK_PAGES';
MenuActions.GET_ALL_LINK_PAGES_SUCCESS = 'GET_ALL_LINK_PAGES_SUCCESS';
//# sourceMappingURL=menu.actions.js.map

/***/ }),

/***/ "../../../../../src/app/layout/checkout-footer/checkout-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"checkout-footer\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/checkout-footer/checkout-footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkout-footer {\n  background: #fff;\n  border-top: 1px solid #f5f5f6; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/checkout-footer/checkout-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutFooterComponent = (function () {
    function CheckoutFooterComponent() {
    }
    CheckoutFooterComponent.prototype.ngOnInit = function () {
    };
    return CheckoutFooterComponent;
}());
CheckoutFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkout-footer',
        template: __webpack_require__("../../../../../src/app/layout/checkout-footer/checkout-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/checkout-footer/checkout-footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CheckoutFooterComponent);

//# sourceMappingURL=checkout-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/checkout-header/checkout-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"checkout-header\">\r\n    <div class=\"full-container\">\r\n        <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/logo.png\" alt=\"Angular Spree\"></a>\r\n        <ol class=\"checkout-steps\">\r\n            <li class=\"step step1\">\r\n                <a [ngClass]=\"{'can-click': checkIfClickable('cart'), 'active': isActiveRoute('cart')}\" [routerLink]=\"getRouterLink('cart')\">Bag</a>\r\n            </li>\r\n            <li class=\"divider\"></li>\r\n            <li class=\"step step2\">\r\n                <a [ngClass]=\"{'can-click': checkIfClickable('delivery'), 'active': isActiveRoute('delivery')}\" [routerLink]=\"getRouterLink('delivery')\">Delivery</a>\r\n            </li>\r\n            <li class=\"divider\"></li>\r\n            <li class=\"step step3\">\r\n                <a [ngClass]=\"{'can-click': checkIfClickable('address'), 'active': isActiveRoute('address')}\" [routerLink]=\"getRouterLink('address')\">Address</a>\r\n            </li>\r\n            <li class=\"divider\"></li>\r\n            <li class=\"step step4\">\r\n                <a [ngClass]=\"{'can-click': checkIfClickable('payment'), 'active': isActiveRoute('payment')}\" [routerLink]=\"getRouterLink('payment')\">Payment</a>\r\n            </li>\r\n        </ol>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/checkout-header/checkout-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkout-header {\n  padding: 20px 0;\n  height: 78px;\n  border-bottom: 1px solid #f5f5f6;\n  width: 100%;\n  z-index: 1;\n  background: #fff; }\n  .checkout-header .full-container {\n    max-width: 980px;\n    margin: 0 auto; }\n    .checkout-header .full-container .navbar-brand {\n      padding: 0px;\n      display: inline-block; }\n      .checkout-header .full-container .navbar-brand img {\n        height: 46px;\n        margin-top: -4px; }\n    .checkout-header .full-container .checkout-steps {\n      margin-left: 25%;\n      margin-top: 8px;\n      margin-bottom: 8px;\n      width: 45%;\n      display: inline-block;\n      padding: 0px; }\n      .checkout-header .full-container .checkout-steps .step {\n        display: inline-block;\n        background: #fff;\n        padding: 0px; }\n        .checkout-header .full-container .checkout-steps .step a {\n          color: #535766;\n          text-transform: uppercase;\n          font-size: 12px;\n          font-weight: 600;\n          font-family: \"Whitney-semi-bold\";\n          letter-spacing: 3px;\n          text-decoration: none;\n          cursor: text; }\n        .checkout-header .full-container .checkout-steps .step .can-click {\n          cursor: pointer; }\n        .checkout-header .full-container .checkout-steps .step .active {\n          color: #20bd99;\n          border-bottom: 2px solid #20bd99;\n          padding-bottom: 5px; }\n      .checkout-header .full-container .checkout-steps .step1 {\n        margin-right: 5px; }\n      .checkout-header .full-container .checkout-steps .step2 {\n        margin: 0 5px; }\n      .checkout-header .full-container .checkout-steps .step3 {\n        margin-left: 0 5px; }\n      .checkout-header .full-container .checkout-steps .step4 {\n        margin-left: 5px; }\n      .checkout-header .full-container .checkout-steps .divider {\n        width: 6%;\n        border-top: 1px dashed #94969f;\n        height: 5px;\n        display: inline-block !important;\n        background: #fff;\n        color: #535766 !important;\n        padding: 0 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/checkout-header/checkout-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutHeaderComponent = (function () {
    function CheckoutHeaderComponent(router) {
        this.router = router;
        this.checkoutStep = ['cart', 'delivery', 'address', 'payment'];
    }
    CheckoutHeaderComponent.prototype.ngOnInit = function () {
    };
    CheckoutHeaderComponent.prototype.isActiveRoute = function (step) {
        if (!this.currentStep) {
            return false;
        }
        if (step === this.currentStep) {
            return true;
        }
        else {
            return false;
        }
    };
    CheckoutHeaderComponent.prototype.checkIfClickable = function (clickStep) {
        return this.isLinkAccessible(clickStep);
    };
    CheckoutHeaderComponent.prototype.getRouterLink = function (step) {
        var isAccessible = this.isLinkAccessible(step);
        var link = [];
        if (isAccessible) {
            link = ['/checkout', step];
        }
        return link;
    };
    CheckoutHeaderComponent.prototype.isLinkAccessible = function (step) {
        if (!this.currentStep) {
            return false;
        }
        var currentStepIndex = this.checkoutStep.indexOf(this.currentStep);
        var stepIndex = this.checkoutStep.indexOf(step);
        if (stepIndex <= currentStepIndex) {
            return true;
        }
        else {
            return false;
        }
    };
    return CheckoutHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CheckoutHeaderComponent.prototype, "currentStep", void 0);
CheckoutHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkout-header',
        template: __webpack_require__("../../../../../src/app/layout/checkout-header/checkout-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/checkout-header/checkout-header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], CheckoutHeaderComponent);

var _a;
//# sourceMappingURL=checkout-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/effects/menu.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_menu_actions__ = __webpack_require__("../../../../../src/app/layout/actions/menu.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_menu_service__ = __webpack_require__("../../../../../src/app/core/services/menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuEffects = (function () {
    function MenuEffects(actions$, menuService, menuActions) {
        var _this = this;
        this.actions$ = actions$;
        this.menuService = menuService;
        this.menuActions = menuActions;
        this.GetAllDropDowns$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_menu_actions__["a" /* MenuActions */].GET_ALL_DROP_DOWNS)
            .switchMap(function (action) { return _this.menuService.getAllDropDowns(); })
            .map(function (data) { return _this.menuActions.getAllDropDownsSuccess(data); });
        this.GetAllLinkPages$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_menu_actions__["a" /* MenuActions */].GET_ALL_LINK_PAGES)
            .switchMap(function (action) { return _this.menuService.getLinkPages(); })
            .map(function (data) { return _this.menuActions.getAllLinkPagesSuccess(data); });
    }
    return MenuEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]) === "function" && _a || Object)
], MenuEffects.prototype, "GetAllDropDowns$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]) === "function" && _b || Object)
], MenuEffects.prototype, "GetAllLinkPages$", void 0);
MenuEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__core_services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_services_menu_service__["a" /* MenuService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__actions_menu_actions__["a" /* MenuActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_menu_actions__["a" /* MenuActions */]) === "function" && _e || Object])
], MenuEffects);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=menu.effects.js.map

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <!-- row -->\r\n            <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\r\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                    <!-- widgets column left -->\r\n                    <ul class=\"list-unstyled clear-margins\">\r\n                        <!-- widgets -->\r\n                        <li class=\"widget-container widget_nav_menu\">\r\n                            <!-- widgets list -->\r\n                            <h1 class=\"title-widget\">Company</h1>\r\n                            <ul>\r\n                                <li><a href=\"#\"> About Us</a></li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- widgets column left end -->\r\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                    <!-- widgets column left -->\r\n                    <ul class=\"list-unstyled clear-margins\">\r\n                        <!-- widgets -->\r\n                        <li class=\"widget-container widget_nav_menu\">\r\n                            <!-- widgets list -->\r\n                            <h1 class=\"title-widget\">Products</h1>\r\n                            <ul>\r\n                                <li><a href=\"#\">  Starter Kit</a></li>\r\n                                <li><a href=\"#\">  Tray</a></li>\r\n                                <li><a href=\"#\">  Lip Ruler</a></li>\r\n                                <li><a href=\"#\">  Jaw Gauge</a></li>\r\n                                <li><a href=\"#\">  EZ-Tracer</a></li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- widgets column left end -->\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n                    <!-- widgets column left -->\r\n                    <ul class=\"list-unstyled clear-margins\">\r\n                        <!-- widgets -->\r\n                        <li class=\"widget-container widget_nav_menu\">\r\n                            <!-- widgets list -->\r\n                            <h1 class=\"title-widget\">Traing Video</h1>\r\n                            <ul>\r\n                                <li><a href=\"#\"> Module1 - Introduction</a></li>\r\n                                <li><a href=\"#\"> Module2 - Tray Selection</a></li>\r\n                                <li><a href=\"#\"> Module3 - Impression Making</a></li>\r\n                                <li><a href=\"#\"> Module4 - Bite Registration</a></li>\r\n                                <li><a href=\"#\"> Module5 - Tray in Session</a></li>\r\n                                <li><a href=\"#\"> Module6 - Final Delivery</a></li>\r\n                                <li><a href=\"#\"> Module7 - Single Arch Denture</a></li>\r\n                                <li><a href=\"#\"> Module8 - Implant Overdentures</a></li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- widgets column left end -->\r\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\"  style=\"margin-top: 20px\">\r\n                    <!-- widgets column left -->\r\n                    <ul class=\"list-unstyled clear-margins\">\r\n                        <!-- widgets -->\r\n                        <li class=\"widget-container widget_nav_menu\">\r\n                            <!-- widgets list -->\r\n                            <a class=\"title-widget\" style=\"cursor: pointer\">Contact Us</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\"  style=\"margin-top: 20px\">\r\n                    <!-- widgets column left -->\r\n                    <ul class=\"list-unstyled clear-margins\">\r\n                        <!-- widgets -->\r\n                        <li class=\"widget-container widget_nav_menu\">\r\n                            <!-- widgets list -->\r\n                            <a class=\"title-widget\" style=\"cursor: pointer\">Cart</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" style=\"text-align: right;\">\r\n                <div class=\"social-icons\">\r\n                    <ul class=\"nomargin\">\r\n                        <a href=\"https://www.facebook.com/bootsnipp\"><i class=\"fa fa-facebook fa-3x social-fb\" id=\"social\"></i></a>\r\n                        <a href=\"https://twitter.com/bootsnipp\"><i class=\"fa fa-twitter fa-3x social-tw\" id=\"social\"></i></a>\r\n                        <a href=\"https://plus.google.com/+Bootsnipp-page\"><i class=\"fa fa-google-plus fa-3x social-gp\" id=\"social\"></i></a>\r\n                        <a href=\"mailto:bootsnipp@gmail.com\"><i class=\"fa fa-envelope fa-3x social-em\" id=\"social\"></i></a>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"copyright\">\r\n                    Copyright © 2016 <b>DENTCA</b>, Inc. All Rights Reserved\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  margin-top: 50px;\n  padding-top: 50px;\n  border-top: 1px solid #f5f5f6;\n  background-color: #f5f5f6; }\n\n.title-widget {\n  font-size: 15px;\n  font-family: Whitney-semi-bold !important; }\n\nul li {\n  list-style-type: none;\n  padding-top: 7px; }\n\nul {\n  padding-left: 0px; }\n\n.nomargin {\n  font-size: 10px;\n  color: #6FB524; }\n\n.nomargin a {\n  padding-left: 10px;\n  color: #6FB524; }\n\n.nomargin a:hover {\n  color: #3d8300; }\n\nul li a {\n  color: #555555;\n  text-align: right; }\n\nul li a:hover {\n  color: #3d8300; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/layout/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n        <div class=\"container\">\r\n\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n                  <span class=\"sr-only\">Toggle navigation</span>\r\n                  <span class=\"icon-bar\"></span>\r\n                  <span class=\"icon-bar\"></span>\r\n                  <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <a class=\"navbar-brand\" [routerLink]=\"['/blog', 'page', 'welcome']\"><img src=\"assets/logo.png\" alt=\"Angular Spree\"></a>\r\n            </div>\r\n\r\n            <!-- Collect the nav links, forms, and other content for toggling -->\r\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <ng-template ngFor let-dropDown [ngForOf]=\"(dropDowns$ | async)\" let-i=\"index\">\r\n                        <li class=\"\" *ngIf=\"!dropDown.has_item; else DropDown\">\r\n                            <a [routerLink]=\"[dropDown.slug]\" *ngIf=\"dropDown.slug\">\r\n                                {{dropDown.presentation}}\r\n                            </a>\r\n                            <a [routerLink]=\"['404']\" *ngIf=\"!dropDown.slug\">\r\n                                {{dropDown.presentation}}\r\n                            </a>\r\n                        </li>\r\n                        <ng-template #DropDown>\r\n                            <li class=\"dropdown\" dropdown>\r\n                                <a class=\"dropdown-toggle\" dropdownToggle>\r\n                                    <i class=\"\" style=\"font-style:normal !important\">{{dropDown.presentation}}</i>\r\n                                    <span class=\"caret\"></span>\r\n                                </a>\r\n                                <ul class=\"dropdown-menu\" *dropdownMenu>\r\n                                    <li *ngFor=\"let item of dropDown.drop_down_items\">\r\n                                        <a [routerLink]=\"[item.slug]\" *ngIf=\"item.slug\">\r\n                                            {{item.presentation}}\r\n                                        </a>\r\n                                        <a [routerLink]=\"['404']\" *ngIf=\"!item.slug\">\r\n                                            {{item.presentation}}\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </li>\r\n                        </ng-template>\r\n                    </ng-template>\r\n\r\n                    <li class=\"dropdown\" *ngIf=\"(isAuthenticated$ | async)\" dropdown>\r\n                        <a class=\"dropdown-toggle\" dropdownToggle>\r\n                            <i class=\"\" style=\"font-style:normal !important\">Order</i>\r\n                            <span class=\"caret\"></span>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu\" *dropdownMenu>\r\n                            <ul class=\"taxonomy\" *ngFor=\"let taxonomy of taxonomies\">\r\n                                <li *ngFor=\"let taxon of taxonomy.root.taxons\">\r\n                                    <a [routerLink]=\"['/home/', {id: taxon.id.toString()}]\">{{taxon.name}}</a>\r\n                                </li>\r\n                            </ul>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n\r\n                <app-profile-dropdown [totalCartItems]=\"totalCartItems$ | async\" [isAuthenticated]=\"isAuthenticated$ | async\" [isCorpAdmin]=\"(user$ | async)?.get('corp_admin')\"></app-profile-dropdown>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div>"

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  height: 78px;\n  border-bottom: 1px solid #f5f5f6; }\n\n.navbar-brand {\n  margin-top: -8%; }\n  .navbar-brand img {\n    height: 46px; }\n\n#navbar-search-input {\n  display: inline-block;\n  font-size: 16px;\n  height: 20px;\n  line-height: 24px;\n  width: 235px;\n  color: #696e79;\n  box-sizing: content-box;\n  padding: 8px 10px 10px;\n  margin: 0;\n  outline: 0;\n  border: 1px solid #d5d6d9;\n  border-radius: 4px 0 0 4px;\n  border-right: 0;\n  background: #f5f5f6; }\n  #navbar-search-input:focus {\n    background-color: #fff;\n    border-color: #14cda8;\n    box-shadow: none; }\n\n.input-group-addon {\n  background: #f5f5f6; }\n\na {\n  cursor: pointer !important; }\n\n.dropdown-menu .taxonomy {\n  padding: 0px; }\n  .dropdown-menu .taxonomy li {\n    list-style: none; }\n    .dropdown-menu .taxonomy li a {\n      display: block;\n      padding: 3px 20px;\n      clear: both;\n      font-weight: normal;\n      line-height: 1.42857143;\n      color: #333333;\n      text-decoration: none; }\n    .dropdown-menu .taxonomy li a:hover {\n      background: #f5f5f5; }\n\n.desktop-query {\n  width: 300px;\n  float: right;\n  line-height: 0;\n  margin: 4px 10px 20px 0; }\n  .desktop-query input.desktop-searchBar {\n    font-family: Whitney;\n    display: inline-block;\n    float: left;\n    font-size: 16px;\n    height: 20px;\n    line-height: 24px;\n    width: 235px;\n    color: #696e79;\n    box-sizing: content-box;\n    padding: 8px 10px 10px;\n    margin: 0;\n    outline: 0;\n    border: 1px solid #d5d6d9;\n    border-radius: 4px 0 0 4px;\n    border-right: 0;\n    background: #f5f5f6; }\n    .desktop-query input.desktop-searchBar:focus, .desktop-query input.desktop-searchBar:focus + a.desktop-submit {\n      background-color: #fff;\n      border-color: #14cda8; }\n  .desktop-query a.desktop-submit {\n    box-sizing: content-box;\n    display: inline-block;\n    height: 28px;\n    width: 40px;\n    text-align: center;\n    padding: 8px 0 2px;\n    background: #f5f5f6;\n    border: 1px solid #d4d5d9;\n    border-left: none;\n    border-radius: 0 4px 4px 0; }\n    .desktop-query a.desktop-submit .desktop-iconSearch {\n      display: inline-block; }\n    .desktop-query a.desktop-submit .sprites-search {\n      width: 21px;\n      height: 21px; }\n    .desktop-query a.desktop-submit .web-sprite {\n      background: url(" + __webpack_require__("../../../../../src/assets/search-sprite.d5ab50f1b815dfaf3976c6ce2e19d24670e5ba0b.png") + ");\n      background-position: -209px -148px;\n      display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_reducers_search_actions__ = __webpack_require__("../../../../../src/app/home/reducers/search.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_reducers_selectors__ = __webpack_require__("../../../../../src/app/auth/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_selectors__ = __webpack_require__("../../../../../src/app/layout/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_reducers_selectors__ = __webpack_require__("../../../../../src/app/checkout/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_reducers_selector__ = __webpack_require__("../../../../../src/app/user/reducers/selector.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Core

//Store






var HeaderComponent = (function () {
    function HeaderComponent(store, searchActions) {
        this.store = store;
        this.searchActions = searchActions;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isAuthenticated$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__auth_reducers_selectors__["a" /* getAuthStatus */]);
        this.totalCartItems$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__checkout_reducers_selectors__["k" /* getTotalCartItems */]);
        this.dropDowns$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__reducers_selectors__["a" /* getAllDropDowns */]);
        this.user$ = this.store.select(__WEBPACK_IMPORTED_MODULE_6__user_reducers_selector__["b" /* getUser */]);
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "taxonomies", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/layout/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/header/header.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__home_reducers_search_actions__["a" /* SearchActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__home_reducers_search_actions__["a" /* SearchActions */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/profile-dropdown/profile-dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav navbar-right\">\r\n  <li class=\"dropdown\" dropdown *ngIf=\"!isAuthenticated\">\r\n    <a class=\"dropdown-toggle\" dropdownToggle>\r\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n      <span class=\"caret\"></span>\r\n    </a>\r\n\r\n    <ul class=\"dropdown-menu\" *dropdownMenu>\r\n      <li><a [routerLink]=\"['/auth']\">Sign Up</a></li>\r\n      <li role=\"separator\" class=\"divider\"></li>\r\n      <li><a [routerLink]=\"['/auth', 'login']\">Login</a></li>\r\n    </ul>\r\n  </li>\r\n\r\n  <li class=\"dropdown\" dropdown *ngIf=\"isAuthenticated\">\r\n    <a class=\"dropdown-toggle\" dropdownToggle>\r\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n      <span class=\"caret\"></span>\r\n    </a>\r\n    <ul class=\"dropdown-menu\" *dropdownMenu>\r\n      <li><a routerLink=\"/user\">My Profile</a></li>\r\n      <li><a routerLink=\"/user/orders\">My Orders</a></li>\r\n      <li role=\"separator\" class=\"divider\"></li>\r\n      <li><a routerLink=\"/user/addresses\">Saved Addresses</a></li>\r\n      <li role=\"separator\" class=\"divider\"></li>\r\n      <ng-template [ngIf]=\"isCorpAdmin\">\r\n        <li><a routerLink=\"/user/corpusers\">Company Users</a></li>\r\n        <li><a routerLink=\"/user/corporders\">Company Orders</a></li>\r\n        <li role=\"separator\" class=\"divider\"></li>\r\n      </ng-template>\r\n      <li><a (click)=\"logout()\">Logout</a></li>\r\n\r\n    </ul>\r\n  </li>\r\n\r\n  <li class=\"cart\" [routerLink]=\"['checkout','cart']\">\r\n    <a>\r\n      <i class=\"fa fa-shopping-bag\" aria-hidden=\"true\"></i> cart\r\n      <span class=\"badge badge-danger\">{{totalCartItems}}</span></a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/layout/header/profile-dropdown/profile-dropdown.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa {\n  font-size: 2rem; }\n\n.nav .open > a, .nav .open > a:focus, .nav .open > a:hover {\n  background-color: transparent; }\n\n.cart {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/profile-dropdown/profile-dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileDropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileDropdownComponent = (function () {
    function ProfileDropdownComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileDropdownComponent.prototype.ngOnInit = function () {
        console.log("-----------", this.isCorpAdmin);
    };
    ProfileDropdownComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (res) {
            _this.router.navigate(['/']);
        });
    };
    return ProfileDropdownComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ProfileDropdownComponent.prototype, "isAuthenticated", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ProfileDropdownComponent.prototype, "totalCartItems", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ProfileDropdownComponent.prototype, "isCorpAdmin", void 0);
ProfileDropdownComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile-dropdown',
        template: __webpack_require__("../../../../../src/app/layout/header/profile-dropdown/profile-dropdown.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/header/profile-dropdown/profile-dropdown.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], ProfileDropdownComponent);

var _a, _b;
//# sourceMappingURL=profile-dropdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_component__ = __webpack_require__("../../../../../src/app/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__ = __webpack_require__("../../../../../src/app/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_profile_dropdown_profile_dropdown_component__ = __webpack_require__("../../../../../src/app/layout/header/profile-dropdown/profile-dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Components



// Modules


var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            // components
            __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */],
            // sub components
            __WEBPACK_IMPORTED_MODULE_3__header_profile_dropdown_profile_dropdown_component__["a" /* ProfileDropdownComponent */]
            // pipes
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */]
        ]
    })
], LayoutModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reducers/menu.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menuReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_state__ = __webpack_require__("../../../../../src/app/layout/reducers/menu.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_menu_actions__ = __webpack_require__("../../../../../src/app/layout/actions/menu.actions.ts");


var initialState = new __WEBPACK_IMPORTED_MODULE_0__menu_state__["a" /* MenuStateRecord */]();
var menuReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_menu_actions__["a" /* MenuActions */].GET_ALL_DROP_DOWNS_SUCCESS:
            return state.merge({
                drop_downs: payload
            });
        case __WEBPACK_IMPORTED_MODULE_1__actions_menu_actions__["a" /* MenuActions */].GET_ALL_LINK_PAGES_SUCCESS:
            return state.merge({
                link_pages: payload
            });
        // case MenuActions.GET_SELECTED_DROP_DOWN_SUCCESS:
        //     return state.merge({
        //         selected_page_id: payload
        //     }) as MenuState;
        default:
            return state;
    }
};
//# sourceMappingURL=menu.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reducers/menu.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuStateRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);

var MenuStateRecord = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    drop_downs: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
    link_pages: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([])
    // selected_page_id: null
});
//# sourceMappingURL=menu.state.js.map

/***/ }),

/***/ "../../../../../src/app/layout/reducers/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getMenuState */
/* unused harmony export fetchDropDowns */
/* unused harmony export fetchLinkPages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllDropDowns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllLinkPages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);

function getMenuState(state) {
    return state.menu;
}
function fetchDropDowns(state) {
    return state.drop_downs.toJS();
}
function fetchLinkPages(state) {
    return state.link_pages.toJS();
}
var getAllDropDowns = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getMenuState, fetchDropDowns);
var getAllLinkPages = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getMenuState, fetchLinkPages);
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ "../../../../../src/app/product/actions/product-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductActions; });
var ProductActions = (function () {
    function ProductActions() {
    }
    ProductActions.prototype.getAllProducts = function () {
        return { type: ProductActions.GET_ALL_PRODUCTS };
    };
    ProductActions.prototype.getProductDetail = function (id) {
        return {
            type: ProductActions.GET_PRODUCT_DETAIL,
            payload: id
        };
    };
    // change products type to Product[]
    ProductActions.prototype.getAllProductsSuccess = function (products) {
        return {
            type: ProductActions.GET_ALL_PRODUCTS_SUCCESS,
            payload: products
        };
    };
    ProductActions.prototype.getProductDetailSuccess = function (product) {
        return {
            type: ProductActions.GET_PRODUCT_DETAIL_SUCCESS,
            payload: product
        };
    };
    ProductActions.prototype.clearSelectedProduct = function () {
        return { type: ProductActions.CLEAR_SELECTED_PRODUCT };
    };
    ProductActions.prototype.getAllTaxonomies = function () {
        return { type: ProductActions.GET_ALL_TAXONOMIES };
    };
    ProductActions.prototype.getAllTaxonomiesSuccess = function (taxonomies) {
        return {
            type: ProductActions.GET_ALL_TAXONOMIES_SUCCESS,
            payload: taxonomies
        };
    };
    return ProductActions;
}());

ProductActions.GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
ProductActions.GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
ProductActions.GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
ProductActions.GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS';
ProductActions.CLEAR_SELECTED_PRODUCT = 'CLEAR_SELECTED_PRODUCT';
ProductActions.GET_ALL_TAXONOMIES = 'GET_ALL_TAXONOMIES';
ProductActions.GET_ALL_TAXONOMIES_SUCCESS = 'GET_ALL_TAXONOMIES_SUCCESS';
//# sourceMappingURL=product-actions.js.map

/***/ }),

/***/ "../../../../../src/app/product/effects/product.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__ = __webpack_require__("../../../../../src/app/product/actions/product-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_product_service__ = __webpack_require__("../../../../../src/app/core/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductEffects = (function () {
    function ProductEffects(actions$, productService, productActions) {
        var _this = this;
        this.actions$ = actions$;
        this.productService = productService;
        this.productActions = productActions;
        // tslint:disable-next-line:member-ordering
        this.GetAllProducts$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */].GET_ALL_PRODUCTS)
            .switchMap(function (action) { return _this.productService.getProducts(); })
            .map(function (data) { return _this.productActions.getAllProductsSuccess({ products: data }); });
        // tslint:disable-next-line:member-ordering
        this.GetAllTaxonomies$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */].GET_ALL_TAXONOMIES)
            .switchMap(function (action) { return _this.productService.getTaxonomies(); })
            .map(function (data) { return _this.productActions.getAllTaxonomiesSuccess({ taxonomies: data }); });
        // tslint:disable-next-line:member-ordering
        this.GetProductDetail$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */].GET_PRODUCT_DETAIL)
            .switchMap(function (action) { return _this.productService.getProduct(action.payload); })
            .map(function (data) { return _this.productActions.getProductDetailSuccess(data); });
    }
    return ProductEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]) === "function" && _a || Object)
], ProductEffects.prototype, "GetAllProducts$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]) === "function" && _b || Object)
], ProductEffects.prototype, "GetAllTaxonomies$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]) === "function" && _c || Object)
], ProductEffects.prototype, "GetProductDetail$", void 0);
ProductEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__core_services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_services_product_service__["a" /* ProductService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */]) === "function" && _f || Object])
], ProductEffects);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=product.effects.js.map

/***/ }),

/***/ "../../../../../src/app/product/reducers/product-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__ = __webpack_require__("../../../../../src/app/product/actions/product-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_state__ = __webpack_require__("../../../../../src/app/product/reducers/product-state.ts");


var initialState = new __WEBPACK_IMPORTED_MODULE_1__product_state__["a" /* ProductStateRecord */]();
var productReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */].GET_PRODUCT_DETAIL_SUCCESS:
            return state.merge({
                selectedProduct: payload
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */].GET_ALL_PRODUCTS_SUCCESS:
            var _products = payload.products;
            var productIds = _products.map(function (product) { return product.id; });
            var productEntities = _products.reduce(function (products, product) {
                return Object.assign(products, (_a = {},
                    _a[product.id] = product,
                    _a));
                var _a;
            }, {});
            return state.merge({
                productIds: productIds,
                productEntities: productEntities
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */].GET_ALL_TAXONOMIES_SUCCESS:
            var _taxonomies = payload.taxonomies.taxonomies;
            return state.merge({
                taxonomies: _taxonomies
            });
        default:
            return state;
    }
};
//# sourceMappingURL=product-reducer.js.map

/***/ }),

/***/ "../../../../../src/app/product/reducers/product-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductStateRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);

var ProductStateRecord = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    productIds: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
    productEntities: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}),
    selectedProductId: null,
    selectedProduct: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}),
    taxonomies: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([])
});
//# sourceMappingURL=product-state.js.map

/***/ }),

/***/ "../../../../../src/app/product/reducers/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getProductState */
/* unused harmony export fetchProducts */
/* unused harmony export fetchAllTaxonomies */
/* unused harmony export getSelectedProduct */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTaxonomies; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);

// Base product state selector function
function getProductState(state) {
    return state.products;
}
// ******************** Individual selectors ***************************
function fetchProducts(state) {
    var ids = state.productIds.toJS();
    var productEntities = state.productEntities.toJS();
    return ids.map(function (id) { return productEntities[id]; });
}
function fetchAllTaxonomies(state) {
    return state.taxonomies.toJS();
}
var fetchSelectedProduct = function (state) {
    return state.selectedProduct;
};
// *************************** PUBLIC API's ****************************
var getSelectedProduct = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getProductState, fetchSelectedProduct);
var getProducts = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getProductState, fetchProducts);
var getTaxonomies = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getProductState, fetchAllTaxonomies);
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/loading-indicator/loading-indicator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" [hidden]=\"!(loading$ | async)?.loading\"> \r\n  <!--<div class=\"spinner\"></div>-->\r\n  <div class='spinner triangles'>\r\n    <div class='tri invert'></div>\r\n    <div class='tri invert'></div>\r\n    <div class='tri'></div>\r\n    <div class='tri invert'></div>\r\n    <div class='tri invert'></div>\r\n    <div class='tri'></div>\r\n    <div class='tri invert'></div>\r\n    <div class='tri'></div>\r\n    <div class='tri invert'></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/loading-indicator/loading-indicator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".default .navbar-fixed-top {\n  min-height: 70px;\n  padding: 15px;\n  background-color: rgba(255, 255, 255, 0.98);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .default .navbar-fixed-top .navbar-nav > li .active > a {\n    border-bottom: 3px solid #a1e756; }\n  .default .navbar-fixed-top .navbar-nav > li > a {\n    font-weight: 500;\n    min-height: 50px;\n    font-family: Whitney-semi-bold !important;\n    font-size: 15px; }\n    .default .navbar-fixed-top .navbar-nav > li > a:hover {\n      border-bottom: 3px solid #6FB524; }\n\n.default .badge-danger {\n  background-color: #6FB524; }\n\n.default .badge-warning {\n  background-color: #d58512; }\n\n.default .badge-success {\n  background-color: #398439; }\n\n.default .badge-info {\n  background-color: #269abc; }\n\n.default .badge-inverse {\n  background-color: #333333; }\n\n@-webkit-keyframes notify-bounce-in-down {\n  0% {\n    top: -1000px; }\n  10% {\n    top: 100px; }\n  15% {\n    opacity: 1;\n    top: 80px; }\n  60% {\n    opacity: 1;\n    top: 80px; }\n  65% {\n    opacity: 1;\n    top: 100px; }\n  100% {\n    opacity: 0;\n    top: -1000px; } }\n\n@keyframes notify-bounce-in-down {\n  0% {\n    top: -1000px; }\n  10% {\n    top: 100px; }\n  15% {\n    opacity: 1;\n    top: 80px; }\n  60% {\n    opacity: 1;\n    top: 80px; }\n  65% {\n    opacity: 1;\n    top: 100px; }\n  100% {\n    opacity: 0;\n    top: -1000px; } }\n\n.default .notify-container {\n  position: fixed;\n  top: 122px;\n  color: #fff;\n  width: 100%;\n  max-width: 980px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  min-height: 50px;\n  z-index: 8;\n  text-align: center;\n  opacity: 0; }\n  .default .notify-container.in {\n    -webkit-animation-duration: 5s;\n    animation-duration: 5s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation-name: notify-bounce-in-down;\n    animation-name: notify-bounce-in-down; }\n\n.default .notify-error {\n  background-color: #ff5722; }\n\n.default .notify-content {\n  max-width: 380px;\n  width: 80%;\n  padding: 10px 20px;\n  border-radius: 3px;\n  box-shadow: 0 2px 10px rgba(40, 44, 64, 0.2);\n  margin: 0 auto; }\n\n.default .notify-error-message {\n  font-size: 16px;\n  font-weight: 500;\n  position: relative; }\n\n.default .notify-icon {\n  border: 2px solid #fff;\n  padding: 0 7px;\n  border-radius: 20px;\n  position: absolute;\n  top: 12px;\n  left: 0;\n  margin-top: -10px;\n  width: 27px; }\n\n.default .notify-icon-text {\n  margin-left: 40px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-align: left; }\n\n.default input:focus, .default button:focus {\n  outline: none; }\n\n.default .panel {\n  box-shadow: 0 0 4px rgba(40, 44, 63, 0.08); }\n\n.default .strong {\n  font-family: Whitney-semi-bold;\n  font-weight: 800; }\n\n.loading {\n  height: 100vh;\n  width: 100vw;\n  background: rgba(255, 255, 255, 0.78);\n  position: fixed;\n  left: 0px;\n  top: 85px;\n  z-index: 999; }\n  .loading .spinner {\n    height: 11px;\n    width: 43px;\n    margin: auto;\n    display: block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 999; }\n\n@-webkit-keyframes pulse {\n  0% {\n    opacity: 1; }\n  16.666% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes pulse {\n  0% {\n    opacity: 1; }\n  16.666% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\nbody {\n  background: #e4e4e5; }\n\n.triangles {\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  height: 81px;\n  width: 90px;\n  position: absolute;\n  left: 50%;\n  top: 50%; }\n\n.tri {\n  position: absolute;\n  -webkit-animation: pulse 750ms ease-in infinite;\n  animation: pulse 750ms ease-in infinite;\n  border-top: 27px solid #6FB524;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 0px; }\n\n.tri.invert {\n  border-top: 0px;\n  border-bottom: 27px solid #6FB524;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent; }\n\n.tri:nth-child(1) {\n  left: 30px; }\n\n.tri:nth-child(2) {\n  left: 15px;\n  top: 27px;\n  -webkit-animation-delay: -125ms;\n  animation-delay: -125ms; }\n\n.tri:nth-child(3) {\n  left: 30px;\n  top: 27px; }\n\n.tri:nth-child(4) {\n  left: 45px;\n  top: 27px;\n  -webkit-animation-delay: -625ms;\n  animation-delay: -625ms; }\n\n.tri:nth-child(5) {\n  top: 54px;\n  -webkit-animation-delay: -250ms;\n  animation-delay: -250ms; }\n\n.tri:nth-child(6) {\n  top: 54px;\n  left: 15px;\n  -webkit-animation-delay: -250ms;\n  animation-delay: -250ms; }\n\n.tri:nth-child(7) {\n  top: 54px;\n  left: 30px;\n  -webkit-animation-delay: -375ms;\n  animation-delay: -375ms; }\n\n.tri:nth-child(8) {\n  top: 54px;\n  left: 45px;\n  -webkit-animation-delay: -500ms;\n  animation-delay: -500ms; }\n\n.tri:nth-child(9) {\n  top: 54px;\n  left: 60px;\n  -webkit-animation-delay: -500ms;\n  animation-delay: -500ms; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/loading-indicator/loading-indicator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIndicatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingIndicatorComponent = (function () {
    function LoadingIndicatorComponent(httpInterceptor) {
        this.httpInterceptor = httpInterceptor;
        this.loading$ = this.httpInterceptor.loading;
    }
    LoadingIndicatorComponent.prototype.ngOnInit = function () {
    };
    return LoadingIndicatorComponent;
}());
LoadingIndicatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loading-indicator',
        template: __webpack_require__("../../../../../src/app/shared/components/loading-indicator/loading-indicator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/loading-indicator/loading-indicator.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */]) === "function" && _a || Object])
], LoadingIndicatorComponent);

var _a;
//# sourceMappingURL=loading-indicator.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n    404 Not found\n</h1>"

/***/ }),

/***/ "../../../../../src/app/shared/components/not-found/not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/shared/components/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/not-found/not-found.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notify-container in\" *ngIf=\"loading\">\r\n  <div class=\"notify-error notify-content\" *ngIf=\"loading.hasError\">\r\n    <div class=\"notify-error-message\">\r\n      <span class=\"notify-icon\">!</span>\r\n      <p class=\"notify-icon-text\">\r\n        {{loading.hasMsg}}\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/notification/notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = (function () {
    function NotificationComponent(httpInterceptor) {
        var _this = this;
        this.httpInterceptor = httpInterceptor;
        this.notiSubs = this.httpInterceptor.loading.subscribe(function (data) { return _this.loading = data; });
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent.prototype.ngOnDestroy = function () {
        // this.notiSubs.unsubscribe();
    };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__("../../../../../src/app/shared/components/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/notification/notification.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */]) === "function" && _a || Object])
], NotificationComponent);

var _a;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_keys_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_pipes_humanize_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/humanize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_to_html_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/to-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loading_indicator_loading_indicator_component__ = __webpack_require__("../../../../../src/app/shared/components/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_notification_notification_component__ = __webpack_require__("../../../../../src/app/shared/components/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/shared/components/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Pipes



// components

// imports




var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            // components
            __WEBPACK_IMPORTED_MODULE_5__components_loading_indicator_loading_indicator_component__["a" /* LoadingIndicatorComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_not_found_not_found_component__["a" /* NotFoundComponent */],
            // pipes
            __WEBPACK_IMPORTED_MODULE_2__pipes_keys_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_3__core_pipes_humanize_pipe__["a" /* HumanizePipe */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_to_html_pipe__["a" /* ToHtmlPipe */]
        ],
        exports: [
            // components
            __WEBPACK_IMPORTED_MODULE_5__components_loading_indicator_loading_indicator_component__["a" /* LoadingIndicatorComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_notification_notification_component__["a" /* NotificationComponent */],
            // modules
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
            // pipes
            __WEBPACK_IMPORTED_MODULE_2__pipes_keys_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_3__core_pipes_humanize_pipe__["a" /* HumanizePipe */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_to_html_pipe__["a" /* ToHtmlPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot()
        ]
    })
], SharedModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                // keys.push(key);
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'keys'
    })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/to-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ToHtmlPipe = (function () {
    function ToHtmlPipe() {
    }
    ToHtmlPipe.prototype.transform = function (content) {
        var complied_content = content;
        complied_content = content.replace(/\/ckeditor_assets/g, __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_ENDPOINT + '/ckeditor_assets');
        var array_str = complied_content.split("href=\"http://");
        var i = 1;
        complied_content = array_str[0];
        while (array_str[i]) {
            complied_content += "(click)=\"onNavigate\(\'" + array_str[i].replace("\"", "\'\)\"");
            i++;
        }
        return complied_content;
    };
    return ToHtmlPipe;
}());
ToHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'toHtml'
    })
], ToHtmlPipe);

//# sourceMappingURL=to-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/user/actions/user.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActions; });
var UserActions = (function () {
    function UserActions() {
    }
    UserActions.prototype.getUserOrders = function () {
        return { type: UserActions.GET_USER_ORDERS };
    };
    UserActions.prototype.getUserOrdersSuccess = function (orders) {
        return { type: UserActions.GET_USER_ORDERS_SUCCESS, payload: orders };
    };
    UserActions.prototype.getUser = function () {
        return { type: UserActions.GET_CURRENT_USER };
    };
    UserActions.prototype.getUserSuccess = function (user) {
        return { type: UserActions.GET_CURRENT_USER_SUCCESS, payload: user };
    };
    UserActions.prototype.updateOrders = function (orderNumber) {
        return { type: UserActions.UPDATE_USER_ORDERS, payload: orderNumber };
    };
    UserActions.prototype.updateOrdersSuccess = function (order) {
        return { type: UserActions.UPDATE_USER_ORDERS_SUCCESS, payload: order };
    };
    UserActions.prototype.getCountries = function () {
        return { type: UserActions.GET_COUNTRIES };
    };
    UserActions.prototype.getCountriesSuccess = function (countries) {
        return { type: UserActions.GET_COUNTRIES_SUCCESS, payload: countries };
    };
    return UserActions;
}());

UserActions.GET_USER_ORDERS = 'GET_USER_ORDERS';
UserActions.GET_USER_ORDERS_SUCCESS = 'GET_USER_ORDERS_SUCCESS';
UserActions.GET_CURRENT_USER = 'GET_CURRENT_USER';
UserActions.GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
UserActions.UPDATE_USER_ORDERS = 'UPDATE_USER_ORDERS';
UserActions.UPDATE_USER_ORDERS_SUCCESS = 'UPDATE_USER_ORDERS_SUCCESS';
UserActions.GET_COUNTRIES = 'GET_COUNTRIES';
UserActions.GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
//# sourceMappingURL=user.actions.js.map

/***/ }),

/***/ "../../../../../src/app/user/effects/user.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_address_service__ = __webpack_require__("../../../../../src/app/core/services/address.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserEffects = (function () {
    function UserEffects(actions$, userService, userActions, addrService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.userActions = userActions;
        this.addrService = addrService;
        // tslint:disable-next-line:member-ordering
        this.GetUserOrders$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_user_actions__["a" /* UserActions */].GET_USER_ORDERS)
            .switchMap(function () { return _this.userService.getOrders(); })
            .filter(function (orders) { return orders.length > 0; })
            .map(function (orders) { return _this.userActions.getUserOrdersSuccess(orders); });
        this.GetUser$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_user_actions__["a" /* UserActions */].GET_CURRENT_USER)
            .switchMap(function () { return _this.userService.getUser(); })
            .filter(function (user) { return user != undefined; })
            .map(function (user) { return _this.userActions.getUserSuccess(user); });
        this.UpdateOrders$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_user_actions__["a" /* UserActions */].UPDATE_USER_ORDERS)
            .switchMap(function (action) { return _this.userService.getOrderDetail(action.payload); })
            .filter(function (order) { return order != undefined; })
            .map(function (order) { return _this.userActions.updateOrdersSuccess(order); });
        this.GetCountries$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_user_actions__["a" /* UserActions */].GET_COUNTRIES)
            .switchMap(function (action) { return _this.addrService.getCountries(); })
            .map(function (countries) { return _this.userActions.getCountriesSuccess(countries); });
    }
    return UserEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */]) === "function" && _a || Object)
], UserEffects.prototype, "GetUserOrders$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */]) === "function" && _b || Object)
], UserEffects.prototype, "GetUser$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */]) === "function" && _c || Object)
], UserEffects.prototype, "UpdateOrders$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */]) === "function" && _d || Object)
], UserEffects.prototype, "GetCountries$", void 0);
UserEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__actions_user_actions__["a" /* UserActions */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__core_services_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_services_address_service__["a" /* AddressService */]) === "function" && _h || Object])
], UserEffects);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=user.effects.js.map

/***/ }),

/***/ "../../../../../src/app/user/reducers/selector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCountries; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);

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
 * @returns {LightOrder[]}
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
/**
 *
 *
 * @param {UserState} state
 * @returns {Country[]}
 */
var fetchCountries = function (state) {
    return state.countries.toJS();
};
// *************************** PUBLIC API's ****************************
var getUserOrders = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, fetchUserOrders);
var getUser = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, fetchCurrentUser);
var getCountries = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getUserState, fetchCountries);
//# sourceMappingURL=selector.js.map

/***/ }),

/***/ "../../../../../src/app/user/reducers/user.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_state__ = __webpack_require__("../../../../../src/app/user/reducers/user.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");


var initialState = new __WEBPACK_IMPORTED_MODULE_0__user_state__["a" /* UserStateRecord */]();
var userReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_user_actions__["a" /* UserActions */].GET_USER_ORDERS_SUCCESS:
            return state.merge({ orders: payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions_user_actions__["a" /* UserActions */].GET_CURRENT_USER_SUCCESS:
            return state.merge({ user: payload });
        case __WEBPACK_IMPORTED_MODULE_1__actions_user_actions__["a" /* UserActions */].UPDATE_USER_ORDERS_SUCCESS:
            var _orders = state.orders.insert(0, payload);
            return state.merge({ orders: _orders });
        case __WEBPACK_IMPORTED_MODULE_1__actions_user_actions__["a" /* UserActions */].GET_COUNTRIES_SUCCESS:
            return state.merge({ countries: payload });
        default:
            return state;
    }
};
//# sourceMappingURL=user.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/user/reducers/user.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStateRecord; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);

var UserStateRecord = Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    user: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}),
    orders: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
    countries: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([])
});
//# sourceMappingURL=user.state.js.map

/***/ }),

/***/ "../../../../../src/app/user/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, actions, store) {
        this.http = http;
        this.actions = actions;
        this.store = store;
    }
    /**
     *
     *
     * @returns {Observable<LightOrder[]>}
     *
     * @memberof UserService
     */
    UserService.prototype.getOrders = function () {
        return this.http.get('api/orders')
            .map(function (res) { console.log(res.json()); return res.json(); });
    };
    /**
     *
     *
     * @param {any} orderNumber
     * @returns {Observable<LightOrder>}
     *
     * @memberof UserService
     */
    UserService.prototype.getOrderDetail = function (orderNumber) {
        console.log("api/orders/" + orderNumber);
        return this.http.get("api/orders/" + orderNumber)
            .map(function (res) { return res.json(); });
    };
    /**
     *
     *
     * @returns {Observable<User>}
     *
     * @memberof UserService
     */
    UserService.prototype.getUser = function () {
        var user_id = JSON.parse(localStorage.getItem('user')).id;
        return this.http.get("spree/api/v1/users/" + user_id)
            .map(function (res) { return res.json(); });
    };
    ////////////
    UserService.prototype.getCorpUser = function (id) {
        return this.http.get("api/corporate_account/corporate_users/" + id)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getCorpUsers = function () {
        return this.http.get("api/corporate_account/corporate_users")
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getCorpOrders = function () {
        return this.http.get("api/corporate_account/orders")
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.createCorpUser = function (param) {
        return this.http.post("api/corporate_account/corporate_users", param)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.updateCorpUser = function (id, param) {
        return this.http.put("api/corporate_account/corporate_users/" + id, param)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteCorpUser = function (id) {
        return this.http.delete("api/corporate_account/corporate_users/" + id)
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__actions_user_actions__["a" /* UserActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["f" /* Store */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/assets/search-sprite.d5ab50f1b815dfaf3976c6ce2e19d24670e5ba0b.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "search-sprite.d5ab50f1b815dfaf3976c6ce2e19d24670e5ba0b.306b025b18bf226581d1.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    API_ENDPOINT: 'http://34.211.157.52:3000/',
    // API_ENDPOINT: 'http://localhost:3000/',
    AppName: 'Dentca'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map