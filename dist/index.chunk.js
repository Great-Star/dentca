webpackJsonp(["index"],{

/***/ "../../../../../src/app/core/models/image.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
var Image = (function () {
    function Image() {
    }
    return Image;
}());

//# sourceMappingURL=image.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-checkbox/product-checkbox.component.html":
/***/ (function(module, exports) {

module.exports = "<label style=\"font-size: 18px;\">\n    <input type=\"checkbox\" [checked]=\"isChecked\" (change)=\"isChecked = !isChecked\" class= \"check-option\"/>\n    {{type.presentation}}<span *ngIf=\"type.mandatory\" style=\"color:red;\">*</span>\n</label>\n<div [innerHTML]=\"type.description\"></div> "

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-checkbox/product-checkbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-checkbox/product-checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCheckboxComponent; });
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

var ProductCheckboxComponent = (function () {
    function ProductCheckboxComponent() {
    }
    ProductCheckboxComponent.prototype.ngOnInit = function () {
    };
    return ProductCheckboxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductCheckboxComponent.prototype, "type", void 0);
ProductCheckboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-checkbox',
        template: __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-checkbox/product-checkbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/product-detail-page/product-checkbox/product-checkbox.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductCheckboxComponent);

//# sourceMappingURL=product-checkbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-description/product-description.component.html":
/***/ (function(module, exports) {

module.exports = "<div [innerHtml]=\"description | toHtml\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-description/product-description.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-description/product-description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDescriptionComponent; });
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

var ProductDescriptionComponent = (function () {
    function ProductDescriptionComponent() {
    }
    ProductDescriptionComponent.prototype.ngOnInit = function () {
    };
    return ProductDescriptionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductDescriptionComponent.prototype, "description", void 0);
ProductDescriptionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-description',
        template: __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-description/product-description.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/product-detail-page/product-description/product-description.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductDescriptionComponent);

//# sourceMappingURL=product-description.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-detail-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-detail-page.component.html":
/***/ (function(module, exports) {

module.exports = " <div *ngIf=\"product$ != null && currentUser$ != null\">\r\n  <app-product-details [product]=\"product$\" [user]=\"currentUser$\"></app-product-details>\r\n</div> "

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-detail-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_product_service__ = __webpack_require__("../../../../../src/app/core/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailPageComponent = (function () {
    function ProductDetailPageComponent(productService, route, userService) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.userService = userService;
        this.product$ = null;
        /**On Init
         * 1. Parse route params
         * 2. Retrive product id
         * 3. Ask for the product detail based on product id
         * */
        this.actionsSubscription = this.route.params.subscribe(function (params) {
            _this.productId = params['id'];
            _this.productSubs = _this.productService
                .getProduct(_this.productId)
                .subscribe(function (response) { return _this.product$ = response; });
        });
        if (localStorage.getItem('user')) {
            this.userService.getUser().subscribe(function (response) {
                _this.currentUser$ = response;
            });
        }
        else {
            this.currentUser$ = false;
        }
    }
    ;
    ProductDetailPageComponent.prototype.ngOnInit = function () {
    };
    ProductDetailPageComponent.prototype.ngOnDestroy = function () {
        if (this.actionsSubscription)
            this.actionsSubscription.unsubscribe();
        if (this.productSubs)
            this.productSubs.unsubscribe();
    };
    return ProductDetailPageComponent;
}());
ProductDetailPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-detail-page',
        template: __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-detail-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/product-detail-page/product-detail-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], ProductDetailPageComponent);

var _a, _b, _c;
//# sourceMappingURL=product-detail-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-details/product-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product != null\" class=\"row padding-top\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"row\">\r\n      <app-image-container [images]=\"images\" [selectedImage]=\"images[0]\" class=\"col-md-12\">\r\n      </app-image-container>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n    <app-product-price-info [product]=\"product\" [price]=\"productPrice\" class=\"row\">\r\n    </app-product-price-info>\r\n    <app-product-description [description]=\"product.description\" class=\"row\">\r\n    </app-product-description>\r\n  </div>\r\n  <div class=\"row\">\r\n     <app-product-option \r\n      [variantOptionHash]=\"variantOptionHash\"\r\n      [currentSelectedOptions]=\"currentSelectedOptions\" \r\n      [optionTypes]=\"product.option_types\" \r\n      (onOptionClickEvent)=\"onOptionClick($event)\"\r\n      class=\"col-md-12\">\r\n    </app-product-option> \r\n    <div style=\"padding-right: 20%; padding-left: 20%;\">\r\n      <button (click)=\"addToCart()\" class=\"pdp-add-to-bag pdp-button\" style=\"margin-top:40px;\">ADD TO BAG</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-details/product-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".padding-top {\n  padding-top: 50px; }\n\n.pdp-add-to-bag {\n  width: 60%;\n  text-align: center;\n  padding: 10px 0;\n  background-color: #20bd99;\n  border: 1px solid #20bd99;\n  color: #fff; }\n\n.pdp-button {\n  border-radius: 3px;\n  outline: 0;\n  margin-top: 10px;\n  padding: 10px 30px;\n  font-size: 15px;\n  min-height: 22px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-details/product-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_reducers_selectors__ = __webpack_require__("../../../../../src/app/checkout/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_variant_retriver_service__ = __webpack_require__("../../../../../src/app/core/services/variant-retriver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_models_product__ = __webpack_require__("../../../../../src/app/core/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_variant_parser_service__ = __webpack_require__("../../../../../src/app/core/services/variant-parser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_services_checkout_service__ = __webpack_require__("../../../../../src/app/core/services/checkout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(variantParser, variantRetriver, checkoutActions, checkoutService, store, router) {
        this.variantParser = variantParser;
        this.variantRetriver = variantRetriver;
        this.checkoutActions = checkoutActions;
        this.checkoutService = checkoutService;
        this.store = store;
        this.router = router;
        this.currentSelectedOptions = {};
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.description = this.product.description;
        this.images = this.product.master.images;
        this.getOrderedPrice(this.getProductPrice());
        this.variantOptionHash = this.variantParser
            .getVariantOptionHash(this.product.option_types, this.product.product_variant_types);
        console.log(this.variantOptionHash);
        this.store.select(__WEBPACK_IMPORTED_MODULE_2__checkout_reducers_selectors__["a" /* getAdjustmentOrder */]).subscribe(function (res) {
            _this.original_line_item = res;
        });
    };
    /**
     *
     *
     *
     */
    ProductDetailsComponent.prototype.onOptionClick = function (option) {
        var selectedOptions = new __WEBPACK_IMPORTED_MODULE_3__core_services_variant_retriver_service__["a" /* VariantRetriverService */]()
            .getCurrentSelectedOptions(option, this.currentSelectedOptions);
        console.log("currentSelectedOptions", this.currentSelectedOptions);
        this.getOrderedPrice(this.getProductPrice());
    };
    ProductDetailsComponent.prototype.addToCart = function (product) {
        var _this = this;
        console.log("send cart");
        var line_item = {
            variant_id: this.product.master.id,
            price: this.productPrice,
            origin: this.original_line_item
        };
        this.checkoutService.createNewLineItem(line_item)
            .subscribe(function (line_item) {
            return _this.store.dispatch(_this.checkoutActions.addToCartSuccess(line_item));
        })
            .add(function () {
            _this.router.navigate(['/checkout', 'cart']);
        });
    };
    ProductDetailsComponent.prototype.getProductPrice = function () {
        for (var i = 0; i < this.product.product_prices.length; i++) {
            if (this.product.product_prices[i].product_price_set_id == this.user.product_price_set_id) {
                return this.product.product_prices[i].price;
            }
        }
        return parseFloat(this.product.price);
    };
    ProductDetailsComponent.prototype.getOrderedPrice = function (price) {
        for (var key in this.currentSelectedOptions) {
            var value = this.variantOptionHash[key][this.currentSelectedOptions[key].name];
            if (value)
                price += value.price;
        }
        this.productPrice = price;
    };
    return ProductDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__core_models_product__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_models_product__["a" /* Product */]) === "function" && _a || Object)
], ProductDetailsComponent.prototype, "product", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductDetailsComponent.prototype, "user", void 0);
ProductDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-product-details',
        template: __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-details/product-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/product-detail-page/product-details/product-details.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__core_services_variant_parser_service__["a" /* VariantParserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__core_services_variant_parser_service__["a" /* VariantParserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_services_variant_retriver_service__["a" /* VariantRetriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_services_variant_retriver_service__["a" /* VariantRetriverService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__["a" /* CheckoutActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__["a" /* CheckoutActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__core_services_checkout_service__["a" /* CheckoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__core_services_checkout_service__["a" /* CheckoutService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* Store */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */]) === "function" && _g || Object])
], ProductDetailsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=product-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-file-upload/product-file-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>{{type.presentation}}<span *ngIf=\"type.mandatory\" style=\"color:red;\">*</span></legend>\n  <div class=\"row\">\n    <div class=\"col-md-3 col-xs-12\">\n      <div ng2FileDrop\n            [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n            (fileOver)=\"fileOverBase($event)\"\n            [uploader]=\"uploader\"\n            class=\"well my-drop-zone\">\n          Base drop zone\n      </div>\n        \n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n    </div>\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n\n      <h3>Upload files</h3>\n        <p>number of files: {{ uploader?.queue?.length }}</p>\n\n        <table class=\"table\">\n            <thead>\n            <tr>\n                <th width=\"50%\">Name</th>\n                <th>Size</th>\n                <th>Progress</th>\n                <th>Status</th>\n                <th>Actions</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of uploader.queue\">\n                <td><strong>{{ item?.file?.name }}</strong></td>\n                <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                <td *ngIf=\"uploader.isHTML5\">\n                    <div class=\"progress\" style=\"margin-bottom: 0;\">\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                    </div>\n                </td>\n                <td class=\"text-center\">\n                    <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                    <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                    <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                </td>\n                <td nowrap>\n                    <button type=\"button\" class=\"btn btn-success btn-xs\"\n                            (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                        <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                    </button>\n                    <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                            (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                    </button>\n                    <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                            (click)=\"item.remove()\">\n                        <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                    </button>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n\n        <div>\n            <div>\n                upload progress:\n                <div class=\"progress\" style=\"\">\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-success btn-s\"\n                    (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-s\"\n                    (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-s\"\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n            </button>\n        </div>\n    </div>\n  </div>\n   <div [innerHTML]=\"type.description\"></div> \n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-file-upload/product-file-upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset {\n  padding: 10px; }\n\n.well.my-drop-zone {\n  height: 195px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-file-upload/product-file-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var URL = "";
var ProductFileUploadComponent = (function () {
    function ProductFileUploadComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    ProductFileUploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    ProductFileUploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    ProductFileUploadComponent.prototype.ngOnInit = function () {
    };
    return ProductFileUploadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductFileUploadComponent.prototype, "type", void 0);
ProductFileUploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-file-upload',
        template: __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-file-upload/product-file-upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/product-detail-page/product-file-upload/product-file-upload.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductFileUploadComponent);

//# sourceMappingURL=product-file-upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-group/product-group.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>{{gType.presentation}}</legend>\n    <div class=\"content\"> \n      <div *ngFor=\"let type of gType.children\">\n          <div *ngIf=\"type.option_case.name == 'Text'\">\n            <app-product-text [type]=\"type\"></app-product-text>\n          </div>\n\n          <div *ngIf=\"type.option_case.name == 'FileUpLoad'\">\n            <app-product-file-upload [type]=\"type\"></app-product-file-upload>\n          </div>\n\n          <div *ngIf=\"type.option_case.name == 'Checkbox'\">\n            <app-product-checkbox [type]=\"type\"></app-product-checkbox>\n          </div>\n\n          <div *ngIf=\"type.option_case.name == 'TextArea'\">\n            <app-product-text [type]=\"type\"></app-product-text>\n          </div> \n\n          <div *ngIf=\"type.option_case.name == 'Description'\">\n            <app-product-type-description [type]=\"type\"></app-product-type-description>\n          </div> \n\n          <div *ngIf=\"type.option_case.name == 'Image'\" class =\"image-wrap\" style=\"text-align: center;\">\n            <img \n                  [ngClass]=\"{'disabled': !getProductImageUrl(type.image)}\"\n                  style=\"width: 100%;\" \n                  [src]=\"getProductImageUrl(type.image)\" />\n            <div [innerHTML]=\"type.description\"></div> \n          </div> \n      </div>\n    <div [innerHTML]=\"gType.description\"></div> \n  </div>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-group/product-group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "fieldset {\n  /* padding-left: 10px; */\n  /* padding-right: 499px; */\n  padding: 15px; }\n\n.size-buttons-size-header {\n  overflow: auto; }\n\n.content {\n  padding-top: 10px;\n  padding-right: 5%;\n  padding-left: 5%; }\n\n.option-buttons {\n  /*Font Weight ?*/\n  /*font-weight: 500;*/\n  background-color: #fff;\n  border: 1px solid #282c3f;\n  border-radius: 50px;\n  padding: 0;\n  min-width: 50px;\n  height: 50px;\n  text-align: center;\n  margin-top: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n  color: #282c3f; }\n  .option-buttons.disabled {\n    position: relative;\n    color: #282c3f;\n    border: 1px solid #d5d6d9;\n    cursor: red;\n    pointer-events: none; }\n    .option-buttons.disabled .strike {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      width: 100%;\n      height: 1px;\n      background-color: #d5d6d9; }\n  .option-buttons p {\n    margin: 0; }\n  .option-buttons:hover {\n    color: #fff;\n    font-weight: 500;\n    background-color: #282c3f; }\n\n.selected {\n  color: #fff;\n  font-weight: 500;\n  background-color: #282c3f; }\n\ninput {\n  display: block;\n  color: #282c3f;\n  font-size: 15px;\n  padding-right: 40px;\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  border-radius: 5px; }\n\ntextarea {\n  display: block;\n  color: #282c3f;\n  font-size: 15px;\n  padding-right: 40px;\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  border-radius: 5px; }\n\nimg.image {\n  width: 100px !important;\n  height: 100px !important; }\n\nimg.disabled {\n  display: none; }\n\nspan {\n  font-size: 17px; }\n\n.check-option {\n  width: auto;\n  float: left;\n  margin-right: 10px; }\n\n.image-wrap {\n  text-align: center;\n  padding: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-group/product-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGroupComponent; });
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

var ProductGroupComponent = (function () {
    function ProductGroupComponent() {
    }
    ProductGroupComponent.prototype.ngOnInit = function () {
    };
    return ProductGroupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductGroupComponent.prototype, "gType", void 0);
ProductGroupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-group',
        template: __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-group/product-group.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/product-detail-page/product-group/product-group.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductGroupComponent);

//# sourceMappingURL=product-group.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-images/product-images.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"image-container\" *ngIf=\"images\">\r\n  <div class=\"thumbnails-vertical-container\">\r\n    <button class=\"thumbnails-thumbnail-button\" *ngFor=\"let image of images\">\r\n      <img class=\"thumbnails-thumbnail\" \r\n           [src]=\"getProductImageUrl(image.small_url)\"\r\n           [alt]=\"image.alt\"\r\n           (mouseover)=\"onMouseOver(image)\"/>\r\n    </button>\r\n  </div>\r\n  <img [src]=\"getProductImageUrl(selectedImage.large_url)\"\r\n       [alt]=\"selectedImage.alt\"\r\n       class=\"thumbnails-selected-image\" \r\n       *ngIf=\"images[0]\"/>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-images/product-images.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-container {\n  display: inline-block;\n  height: 500px;\n  width: 480px; }\n  .image-container .thumbnails-selected-image {\n    height: 500px;\n    min-height: 300px;\n    width: 420px;\n    background: #f5f5f6 none repeat scroll 0% 0%/auto padding-box border-box; }\n  .image-container .thumbnails-vertical-container {\n    width: 60px;\n    float: left;\n    margin-bottom: 10px; }\n    .image-container .thumbnails-vertical-container .thumbnails-thumbnail-button {\n      outline: 0;\n      margin-right: 15px;\n      background-color: #fff;\n      border: 0;\n      padding: 0;\n      position: relative;\n      cursor: pointer;\n      margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-images/product-images.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductImagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_models_image__ = __webpack_require__("../../../../../src/app/core/models/image.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductImagesComponent = (function () {
    function ProductImagesComponent() {
        this.images = null;
        this.selectedImage = null;
    }
    ProductImagesComponent.prototype.ngOnInit = function () {
        console.log("selected Image", this.selectedImage);
    };
    ProductImagesComponent.prototype.getProductImageUrl = function (url) {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_ENDPOINT + url;
    };
    ProductImagesComponent.prototype.onMouseOver = function (image) {
        this.selectedImage = image;
    };
    return ProductImagesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ProductImagesComponent.prototype, "images", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__core_models_image__["a" /* Image */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__core_models_image__["a" /* Image */]) === "function" && _a || Object)
], ProductImagesComponent.prototype, "selectedImage", void 0);
ProductImagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-image-container',
        template: __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-images/product-images.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/product-detail-page/product-images/product-images.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductImagesComponent);

var _a;
//# sourceMappingURL=product-images.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-option-select/product-option-select.component.html":
/***/ (function(module, exports) {

module.exports = "  <div [ngClass]=\"{'disabled': isDisabled()}\">\n    <div *ngIf=\"focus_type.option_case.name == 'Text'\">\n      <app-product-text [type]=\"focus_type\"></app-product-text>\n    </div>\n\n    <div *ngIf=\"focus_type.option_case.name == 'FileUpLoad'\">\n      <app-product-file-upload [type]=\"focus_type\"></app-product-file-upload>\n    </div>\n\n     <div *ngIf=\"focus_type.option_case.name == 'Checkbox'\">\n      <app-product-checkbox [type]=\"focus_type\"></app-product-checkbox>\n    </div> \n\n    <div *ngIf=\"focus_type.option_case.name == 'TextArea'\">\n      <app-product-text [type]=\"focus_type\"></app-product-text>\n    </div> \n\n    <div *ngIf=\"focus_type.option_case.name == 'Description'\">\n      <app-product-type-description [type]=\"focus_type\"></app-product-type-description>\n    </div> \n\n    <div *ngIf=\"focus_type.option_case.name == 'Image'\" class =\"image-wrap\" style=\"text-align: center;\">\n      <img \n            [ngClass]=\"{'disabled': !getProductImageUrl(type.image)}\"\n            style=\"width: 100%;\" \n            [src]=\"getProductImageUrl(type.image)\" />\n      <div [innerHTML]=\"type.description\"></div> \n    </div> \n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-option-select/product-option-select.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.size-buttons-size-header {\n  overflow: auto; }\n\n.option-buttons {\n  /*Font Weight ?*/\n  /*font-weight: 500;*/\n  background-color: #fff;\n  border: 1px solid #282c3f;\n  border-radius: 50px;\n  padding: 0;\n  min-width: 50px;\n  height: 50px;\n  text-align: center;\n  margin-top: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n  color: #282c3f; }\n  .option-buttons.disabled {\n    position: relative;\n    color: #282c3f;\n    border: 1px solid #d5d6d9;\n    cursor: red;\n    pointer-events: none; }\n    .option-buttons.disabled .strike {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      width: 100%;\n      height: 1px;\n      background-color: #d5d6d9; }\n  .option-buttons p {\n    margin: 0; }\n  .option-buttons:hover {\n    color: #fff;\n    font-weight: 500;\n    background-color: #282c3f; }\n\n.selected {\n  color: #fff;\n  font-weight: 500;\n  background-color: #282c3f; }\n\ninput {\n  display: block;\n  color: #282c3f;\n  font-size: 15px;\n  padding-right: 40px;\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  border-radius: 5px; }\n\ntextarea {\n  display: block;\n  color: #282c3f;\n  font-size: 15px;\n  padding-right: 40px;\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  border-radius: 5px; }\n\nimg.image {\n  width: 100px !important;\n  height: 100px !important; }\n\nimg.disabled {\n  display: none; }\n\ndiv.disabled {\n  display: none; }\n\nspan {\n  font-size: 17px; }\n\n.check-option {\n  width: auto;\n  float: left;\n  margin-right: 10px; }\n\n.image-wrap {\n  text-align: center;\n  padding: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-option-select/product-option-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductOptionSelectComponent; });
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

var ProductOptionSelectComponent = (function () {
    function ProductOptionSelectComponent() {
    }
    ProductOptionSelectComponent.prototype.ngOnInit = function () {
        if (this.type.children.length != 0)
            this.focus_type = this.type.children[0];
    };
    ProductOptionSelectComponent.prototype.isDisabled = function () {
        for (var key in this.currentSelectedOptions) {
            if (this.type.show_option_value == this.currentSelectedOptions[key].id)
                return false;
            else if (this.type.hide_option_value == this.currentSelectedOptions[key].id)
                return true;
        }
        if (this.type.show_option_value)
            return true;
        else if (this.type.hide_option_value)
            return false;
    };
    return ProductOptionSelectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductOptionSelectComponent.prototype, "currentSelectedOptions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductOptionSelectComponent.prototype, "type", void 0);
ProductOptionSelectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-option-select',
        template: __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-option-select/product-option-select.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/product-detail-page/product-option-select/product-option-select.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductOptionSelectComponent);

//# sourceMappingURL=product-option-select.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-option/product-option.component.html":
/***/ (function(module, exports) {

module.exports = "   <div *ngFor=\"let type of optionTypes\">\n        <app-product-variants *ngIf=\"type.option_case.name == 'Selection'\"\n          [currentSelectedOptions]=\"currentSelectedOptions\"\n          (onOptionClickEvent)=\"onOptionClick($event)\" \n          [type]=\"type\">\n        </app-product-variants>\n\n        <div *ngIf=\"type.option_case.name == 'Text'\">\n          <app-product-text [type]=\"type\"></app-product-text>\n        </div>\n\n        <div *ngIf=\"type.option_case.name == 'FileUpLoad'\">\n          <app-product-file-upload [type]=\"type\"></app-product-file-upload>\n        </div>\n\n        <div *ngIf=\"type.option_case.name == 'Checkbox'\">\n          <app-product-checkbox [type]=\"type\"></app-product-checkbox>\n        </div>\n\n        <div *ngIf=\"type.option_case.name == 'TextArea'\">\n          <app-product-text [type]=\"type\"></app-product-text>\n        </div> \n\n        <div *ngIf=\"type.option_case.name == 'Description'\">\n          <app-product-type-description [type]=\"type\"></app-product-type-description>\n        </div> \n\n        <div *ngIf=\"type.option_case.name == 'Image'\" class =\"image-wrap\" style=\"text-align: center;\">\n          <img \n                [ngClass]=\"{'disabled': !getProductImageUrl(type.image)}\"\n                style=\"width: 100%;\" \n                [src]=\"getProductImageUrl(type.image)\" />\n          <div [innerHTML]=\"type.description\"></div> \n        </div> \n   \n        <div *ngIf=\"type.option_case.name == 'Option Select'\">\n          <app-product-option-select \n            [currentSelectedOptions]=\"currentSelectedOptions\"\n            [type]=\"type\"></app-product-option-select>\n        </div>    \n\n          <div *ngIf=\"type.option_case.name == 'Option Group'\">\n          <app-product-group [gType]=\"type\"></app-product-group>\n        </div>   \n   </div>\n"

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-option/product-option.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".size-buttons-size-header {\n  overflow: auto; }\n\n.content {\n  padding-top: 20px;\n  padding-right: 10%;\n  padding-left: 10%; }\n\n.option-buttons {\n  /*Font Weight ?*/\n  /*font-weight: 500;*/\n  background-color: #fff;\n  border: 1px solid #282c3f;\n  border-radius: 50px;\n  padding: 0;\n  min-width: 50px;\n  height: 50px;\n  text-align: center;\n  margin-top: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n  color: #282c3f; }\n  .option-buttons.disabled {\n    position: relative;\n    color: #282c3f;\n    border: 1px solid #d5d6d9;\n    cursor: red;\n    pointer-events: none; }\n    .option-buttons.disabled .strike {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      width: 100%;\n      height: 1px;\n      background-color: #d5d6d9; }\n  .option-buttons p {\n    margin: 0; }\n  .option-buttons:hover {\n    color: #fff;\n    font-weight: 500;\n    background-color: #282c3f; }\n\n.selected {\n  color: #fff;\n  font-weight: 500;\n  background-color: #282c3f; }\n\ninput {\n  display: block;\n  color: #282c3f;\n  font-size: 15px;\n  padding-right: 40px;\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  border-radius: 5px; }\n\ntextarea {\n  display: block;\n  color: #282c3f;\n  font-size: 15px;\n  padding-right: 40px;\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  border-radius: 5px; }\n\nimg.image {\n  width: 100px !important;\n  height: 100px !important; }\n\nimg.disabled {\n  display: none; }\n\nspan {\n  font-size: 17px; }\n\n.check-option {\n  width: auto;\n  float: left;\n  margin-right: 10px; }\n\n.image-wrap {\n  text-align: center;\n  padding: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-option/product-option.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductOptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_variant_parser_service__ = __webpack_require__("../../../../../src/app/core/services/variant-parser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductOptionComponent = (function () {
    function ProductOptionComponent(variantParserService) {
        this.variantParserService = variantParserService;
        this.currentSelectedOptions = {};
        this.onOptionClickEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProductOptionComponent.prototype.ngOnInit = function () {
    };
    ProductOptionComponent.prototype.onOptionClick = function (event) {
        this.onOptionClickEvent.emit(event);
    };
    ProductOptionComponent.prototype.getProductImageUrl = function (url) {
        var temp = url + "";
        if (temp.charAt(temp.length - 1) == '/')
            return false; //insert empty image
        else
            return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + url;
    };
    return ProductOptionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductOptionComponent.prototype, "variantOptionHash", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductOptionComponent.prototype, "currentSelectedOptions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ProductOptionComponent.prototype, "onOptionClickEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductOptionComponent.prototype, "optionTypes", void 0);
ProductOptionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-option',
        template: __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-option/product-option.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/product-detail-page/product-option/product-option.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_variant_parser_service__["a" /* VariantParserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_variant_parser_service__["a" /* VariantParserService */]) === "function" && _a || Object])
], ProductOptionComponent);

var _a;
//# sourceMappingURL=product-option.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-price-info/product-price-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1 class=\"title\">{{product.name}}</h1>\r\n  <p class=\"selling-price\">\r\n    <strong>${{price | number:'1.2-2'}}</strong>\r\n  </p>\r\n  <p class=\"vatInfo\">Additional VAT may apply; charged at checkout</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-price-info/product-price-info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  color: #696e79;\n  margin-top: 0;\n  margin-bottom: 5px;\n  padding-top: 5px;\n  font-size: 16px; }\n\n.selling-price {\n  font-size: 16px;\n  margin: 10px 0; }\n\n.vatInfo {\n  color: #7e818c;\n  font-size: 13px; }\n\nstrong {\n  font-family: Whitney-SemiBold,Whitney;\n  color: #282c3f; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-price-info/product-price-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPriceInfoComponent; });
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

var ProductPriceInfoComponent = (function () {
    function ProductPriceInfoComponent() {
    }
    ProductPriceInfoComponent.prototype.ngOnInit = function () {
    };
    return ProductPriceInfoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductPriceInfoComponent.prototype, "product", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductPriceInfoComponent.prototype, "price", void 0);
ProductPriceInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-price-info',
        template: __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-price-info/product-price-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/product-detail-page/product-price-info/product-price-info.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductPriceInfoComponent);

//# sourceMappingURL=product-price-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-text/product-text.component.html":
/***/ (function(module, exports) {

module.exports = "<p style=\"font-size: 20px\">{{type.presentation}} <span *ngIf=\"type.mandatory\" style=\"color:red;\">*</span> </p> \n<input type=\"text\" class={{type.name}} placeholder={{type.presentation}} autocomplete=\"off\" *ngIf=\"type.option_case.name == 'Text'\"/>\n<textarea class={{type.name}} *ngIf=\"type.option_case.name == 'TextArea'\"></textarea>\n<div [innerHTML]=\"type.description\"></div> "

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-text/product-text.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n  display: block;\n  color: #282c3f;\n  font-size: 15px;\n  padding-right: 40px;\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  border-radius: 5px; }\n\ninput {\n  display: block;\n  color: #282c3f;\n  font-size: 15px;\n  padding-right: 40px;\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  border-radius: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-text/product-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTextComponent; });
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

var ProductTextComponent = (function () {
    function ProductTextComponent() {
    }
    ProductTextComponent.prototype.ngOnInit = function () {
    };
    return ProductTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductTextComponent.prototype, "type", void 0);
ProductTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-text',
        template: __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-text/product-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/product-detail-page/product-text/product-text.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductTextComponent);

//# sourceMappingURL=product-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-type-description/product-type-description.component.html":
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"type.description\"></div> \n"

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-type-description/product-type-description.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-type-description/product-type-description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTypeDescriptionComponent; });
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

var ProductTypeDescriptionComponent = (function () {
    function ProductTypeDescriptionComponent() {
    }
    ProductTypeDescriptionComponent.prototype.ngOnInit = function () {
    };
    return ProductTypeDescriptionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductTypeDescriptionComponent.prototype, "type", void 0);
ProductTypeDescriptionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-type-description',
        template: __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-type-description/product-type-description.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/product-detail-page/product-type-description/product-type-description.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductTypeDescriptionComponent);

//# sourceMappingURL=product-type-description.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-variants/product-variants.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- <p style=\"font-size: 20px\">{{type.presentation}} <span *ngIf=\"type.mandatory\" style=\"color:red;\">*</span> </p> \r\n<div *ngFor=\"let variant of (customOptionTypesHash | keys)\">\r\n\r\n  <div *ngIf=\"variant.key == type.name\">\r\n\r\n    <button class=\"option-buttons\" *ngFor=\"let options of (variant.value | keys)\" (click)=\"onOptionClick(options)\" [class.selected]=\"options.key === currentSelectedOptions[variant.key]\"\r\n      [ngClass]=\"{'disabled': isDisabled(correspondingOptions[variant.key], options.value['optionValue'].name)}\">\r\n      <p>\r\n        {{ options.value[\"optionValue\"].presentation }}\r\n        <span class=\"strike\"></span>\r\n      </p>\r\n    </button>\r\n    <div *ngFor=\"let options of (variant.value | keys)\">\r\n      <img \r\n        [ngClass]=\"{'disabled': (options.key != currentSelectedOptions[variant.key]) || !getProductImageUrl(options.value['optionValue'].image)}\"\r\n        style=\"width: 300px; height: 200px; margin-top: 10px; margin-bottom: 10px\" \r\n        [src]=\"getProductImageUrl(options.value['optionValue'].image)\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n<div [innerHTML]=\"type.description\"></div>   -->\r\n\r\n<p style=\"font-size: 20px\">{{type.presentation}} <span *ngIf=\"type.mandatory\" style=\"color:red;\">*</span> </p> \r\n    <button class=\"option-buttons\" *ngFor=\"let value of type.option_values\" (click)=\"onOptionClick(value)\" [class.selected]=\"value.name === currentSelectedOptions[type.name]?.name\" >\r\n      <p>\r\n        {{ value.presentation }}\r\n        <span class=\"strike\"></span>\r\n      </p>\r\n    </button>\r\n     <!-- <div *ngFor=\"let options of (variant.value | keys)\">\r\n      <img \r\n        [ngClass]=\"{'disabled': (options.key != currentSelectedOptions[variant.key]) || !getProductImageUrl(options.value['optionValue'].image)}\"\r\n        style=\"width: 300px; height: 200px; margin-top: 10px; margin-bottom: 10px\" \r\n        [src]=\"getProductImageUrl(options.value['optionValue'].image)\" />\r\n    </div>  -->\r\n<div [innerHTML]=\"type.description\"></div> "

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-variants/product-variants.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".size-buttons-size-header {\n  overflow: auto; }\n\n.content {\n  padding-top: 20px;\n  padding-right: 10%;\n  padding-left: 10%; }\n\n.option-buttons {\n  /*Font Weight ?*/\n  /*font-weight: 500;*/\n  background-color: #fff;\n  border: 1px solid #282c3f;\n  border-radius: 50px;\n  padding: 0;\n  min-width: 50px;\n  height: 50px;\n  text-align: center;\n  margin-top: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n  color: #282c3f; }\n  .option-buttons.disabled {\n    position: relative;\n    color: #282c3f;\n    border: 1px solid #d5d6d9;\n    cursor: red;\n    pointer-events: none; }\n    .option-buttons.disabled .strike {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      width: 100%;\n      height: 1px;\n      background-color: #d5d6d9; }\n  .option-buttons p {\n    margin: 0; }\n  .option-buttons:hover {\n    color: #fff;\n    font-weight: 500;\n    background-color: #282c3f; }\n\n.selected {\n  color: #fff;\n  font-weight: 500;\n  background-color: #282c3f; }\n\ninput {\n  display: block;\n  color: #282c3f;\n  font-size: 15px;\n  padding-right: 40px;\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  border-radius: 5px; }\n\ntextarea {\n  display: block;\n  color: #282c3f;\n  font-size: 15px;\n  padding-right: 40px;\n  width: 100%;\n  padding: 15px;\n  margin-top: 5px;\n  border-radius: 5px; }\n\nimg.image {\n  width: 100px !important;\n  height: 100px !important; }\n\nimg.disabled {\n  display: none; }\n\nspan {\n  font-size: 17px; }\n\n.check-option {\n  width: auto;\n  float: left;\n  margin-right: 10px; }\n\n.image-wrap {\n  text-align: center;\n  padding: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/product-detail-page/product-variants/product-variants.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductVariantsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;
var ProductVariantsComponent = (function () {
    function ProductVariantsComponent() {
        this.currentSelectedOptions = {};
        this.onOptionClickEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProductVariantsComponent.prototype.ngOnInit = function () {
    };
    ProductVariantsComponent.prototype.onOptionClick = function (option) {
        this.onOptionClickEvent.emit(option);
    };
    ProductVariantsComponent.prototype.getProductImageUrl = function (url) {
        var temp = url + "";
        if (temp.charAt(temp.length - 1) == '/')
            return false; //insert empty image
        else
            return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_ENDPOINT + url;
    };
    return ProductVariantsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductVariantsComponent.prototype, "currentSelectedOptions", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ProductVariantsComponent.prototype, "onOptionClickEvent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductVariantsComponent.prototype, "type", void 0);
ProductVariantsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-variants',
        template: __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-variants/product-variants.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/product-detail-page/product-variants/product-variants.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductVariantsComponent);

//# sourceMappingURL=product-variants.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_product_detail_page_product_detail_page_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-detail-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_product_detail_page_product_details_product_details_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-details/product-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_product_detail_page_product_description_product_description_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-description/product-description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_product_detail_page_product_images_product_images_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-images/product-images.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_product_detail_page_product_price_info_product_price_info_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-price-info/product-price-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_product_detail_page_product_variants_product_variants_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-variants/product-variants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_file_drop_lib_ngx_drop__ = __webpack_require__("../../../../ngx-file-drop/lib/ngx-drop/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_product_detail_page_product_file_upload_product_file_upload_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-file-upload/product-file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_product_detail_page_product_option_select_product_option_select_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-option-select/product-option-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_product_detail_page_product_option_product_option_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-option/product-option.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_product_detail_page_product_group_product_group_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-group/product-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_product_detail_page_product_text_product_text_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-text/product-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_product_detail_page_product_type_description_product_type_description_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-type-description/product-type-description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_product_detail_page_product_checkbox_product_checkbox_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-checkbox/product-checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__product_routes__ = __webpack_require__("../../../../../src/app/product/product.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Components
















// import { ToHtmlPipe } from './../shared/pipes/to-html.pipe';
// Routes

var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            // components
            __WEBPACK_IMPORTED_MODULE_3__components_product_detail_page_product_detail_page_component__["a" /* ProductDetailPageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_product_detail_page_product_details_product_details_component__["a" /* ProductDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_product_detail_page_product_images_product_images_component__["a" /* ProductImagesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_product_detail_page_product_price_info_product_price_info_component__["a" /* ProductPriceInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_product_detail_page_product_description_product_description_component__["a" /* ProductDescriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_product_detail_page_product_variants_product_variants_component__["a" /* ProductVariantsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_product_detail_page_product_file_upload_product_file_upload_component__["a" /* ProductFileUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_product_detail_page_product_option_select_product_option_select_component__["a" /* ProductOptionSelectComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_product_detail_page_product_option_product_option_component__["a" /* ProductOptionComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_product_detail_page_product_group_product_group_component__["a" /* ProductGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_product_detail_page_product_text_product_text_component__["a" /* ProductTextComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_product_detail_page_product_type_description_product_type_description_component__["a" /* ProductTypeDescriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_product_detail_page_product_checkbox_product_checkbox_component__["a" /* ProductCheckboxComponent */],
        ],
        exports: [
            // components
            __WEBPACK_IMPORTED_MODULE_3__components_product_detail_page_product_detail_page_component__["a" /* ProductDetailPageComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_product_detail_page_product_details_product_details_component__["a" /* ProductDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_product_detail_page_product_images_product_images_component__["a" /* ProductImagesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_product_detail_page_product_price_info_product_price_info_component__["a" /* ProductPriceInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_product_detail_page_product_description_product_description_component__["a" /* ProductDescriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_product_detail_page_product_variants_product_variants_component__["a" /* ProductVariantsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_index__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_19__product_routes__["a" /* ProductRoutes */]),
            __WEBPACK_IMPORTED_MODULE_10_ngx_file_drop_lib_ngx_drop__["a" /* FileDropModule */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__["FileUploadModule"]
        ],
        providers: []
    })
], ProductModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  product works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
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

var ProductComponent = (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductComponent);

//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_product_detail_page_product_detail_page_component__ = __webpack_require__("../../../../../src/app/product/components/product-detail-page/product-detail-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");


var ProductRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__product_component__["a" /* ProductComponent */], pathMatch: 'full' },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_0__components_product_detail_page_product_detail_page_component__["a" /* ProductDetailPageComponent */] }
];
//# sourceMappingURL=product.routes.js.map

/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-drop.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var file_uploader_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-item.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-like-object.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        // this.lastModifiedDate = copy(object.lastModifiedDate);
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-select.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var file_uploader_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js");
// todo: filters
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return void 0;
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        // if(!this.uploader.isHTML5) this.destroy();
        this.uploader.addToQueue(files, options, filters);
        if (this.isEmptyAfterSelection()) {
            // todo
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-type.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-upload.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__("../../../common/@angular/common.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var file_drop_directive_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "../../../../ng2-file-upload/file-upload/file-uploader.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false
        };
        this.setOptions(options);
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = options.authToken;
        this.authTokenHeader = options.authTokenHeader || 'Authorization';
        this.autoUpload = options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
        // this.options.filters.unshift({name: 'folder', fn: this._folderFilter});
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
        /*forEach(this._directives, (key) => {
         forEach(this._directives[key], (object) => {
         object.destroy();
         });
         });*/
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        // todo
        /*item.formData.map(obj => {
         obj.map((value, key) => {
         form.append(key, value);
         });
         });*/
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            sendable.append(item.alias, item._file, item.file.name);
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    sendable.append(key, _this.options.additionalParameter[key]);
                });
            }
        }
        else {
            sendable = item._file;
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.send(sendable);
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
        // todo: ?
    };
    // protected _folderFilter(item:FileItem):boolean {
    //   return !!(item.size || item.type);
    // }
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    /* tslint:disable */
    FileUploader.prototype._transformResponse = function (response, headers) {
        // todo: ?
        /*var headersGetter = this._headersGetter(headers);
         forEach($http.defaults.transformResponse, (transformFn) => {
         response = transformFn(response, headersGetter);
         });*/
        return response;
    };
    /* tslint:enable */
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    /*protected _iframeTransport(item:FileItem) {
     // todo: implement it later
     }*/
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    /* tslint:disable */
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    /* tslint:enable */
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "../../../../ng2-file-upload/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__("../../../../ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__("../../../../ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "../../../../ngx-file-drop/lib/ngx-drop/file-drop.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dropZone\"  [className]=\"customstyle\" [class.over]=\"dragoverflag\" \r\n    (drop)=\"dropFiles($event)\" \r\n    (dragover)=\"onDragOver($event)\" (dragleave)=\"onDragLeave($event)\">\r\n    <div class=\"content\">\r\n        {{headertext}}\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../ngx-file-drop/lib/ngx-drop/file-drop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".drop-zone {\n  margin: auto;\n  height: 100px;\n  border: 2px dotted #0782d0;\n  border-radius: 30px; }\n\n.content {\n  color: #0782d0;\n  height: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.over {\n  background-color: rgba(147, 147, 147, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../ngx-file-drop/lib/ngx-drop/file-drop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_file_model__ = __webpack_require__("../../../../ngx-file-drop/lib/ngx-drop/upload-file.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_event_model__ = __webpack_require__("../../../../ngx-file-drop/lib/ngx-drop/upload-event.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileComponent = (function () {
    function FileComponent(zone) {
        var _this = this;
        this.zone = zone;
        this.headertext = "";
        this.customstyle = null;
        this.onFileDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFileOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFileLeave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.stack = [];
        this.files = [];
        this.dragoverflag = false;
        window['angularComponentRef'] = {
            zone: this.zone,
            traverseFileTree: function (item, path) { return _this.traverseFileTree(item, path); },
            addToQueue: function (item) { return _this.addToQueue(item); },
            pushToStack: function (str) { return _this.pushToStack(str); },
            popToStack: function () { return _this.popToStack(); },
            component: this
        };
        if (!this.customstyle) {
            this.customstyle = "drop-zone";
        }
    }
    FileComponent.prototype.ngOnInit = function () {
    };
    FileComponent.prototype.onDragOver = function (event) {
        if (!this.dragoverflag) {
            this.dragoverflag = true;
            this.onFileOver.emit(event);
        }
        this.preventAndStop(event);
    };
    FileComponent.prototype.onDragLeave = function (event) {
        if (this.dragoverflag) {
            this.dragoverflag = false;
            this.onFileLeave.emit(event);
        }
        this.preventAndStop(event);
    };
    FileComponent.prototype.dropFiles = function (event) {
        var _this = this;
        this.dragoverflag = false;
        event.dataTransfer.dropEffect = "copy";
        var length = event.dataTransfer.items.length;
        for (var i = 0; i < length; i++) {
            var entry = event.dataTransfer.items[i].webkitGetAsEntry();
            entry.getme;
            if (entry.isFile) {
                var toUpload = new __WEBPACK_IMPORTED_MODULE_2__upload_file_model__["a" /* UploadFile */](entry.name, entry);
                this.addToQueue(toUpload);
            }
            else if (entry.isDirectory) {
                this.traverseFileTree(entry, entry.name);
            }
        }
        this.preventAndStop(event);
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(200, 200);
        this.subscription = timer.subscribe(function (t) {
            if (_this.stack.length == 0) {
                _this.onFileDrop.emit(new __WEBPACK_IMPORTED_MODULE_3__upload_event_model__["a" /* UploadEvent */](_this.files));
                _this.files = [];
                _this.subscription.unsubscribe();
            }
        });
    };
    FileComponent.prototype.traverseFileTree = function (item, path) {
        if (item.isFile) {
            var toUpload = new __WEBPACK_IMPORTED_MODULE_2__upload_file_model__["a" /* UploadFile */](path, item);
            this.files.push(toUpload);
            window['angularComponentRef'].zone.run(function () {
                window['angularComponentRef'].popToStack();
            });
        }
        else {
            this.pushToStack(path);
            path = path + "/";
            var dirReader = item.createReader();
            var entries = dirReader.readEntries(function (entries) {
                //add empty folders
                if (entries.length == 0) {
                    var toUpload_1 = new __WEBPACK_IMPORTED_MODULE_2__upload_file_model__["a" /* UploadFile */](path, item);
                    window['angularComponentRef'].zone.run(function () {
                        window['angularComponentRef'].addToQueue(toUpload_1);
                    });
                }
                else {
                    for (var i = 0; i < entries.length; i++) {
                        window['angularComponentRef'].zone.run(function () {
                            window['angularComponentRef'].traverseFileTree(entries[i], path + entries[i].name);
                        });
                    }
                }
                window['angularComponentRef'].zone.run(function () {
                    window['angularComponentRef'].popToStack();
                });
            });
        }
    };
    FileComponent.prototype.addToQueue = function (item) {
        this.files.push(item);
    };
    FileComponent.prototype.pushToStack = function (str) {
        this.stack.push(str);
    };
    FileComponent.prototype.popToStack = function () {
        var value = this.stack.pop();
    };
    FileComponent.prototype.clearQueue = function () {
        this.files = [];
    };
    FileComponent.prototype.preventAndStop = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    FileComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return FileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FileComponent.prototype, "headertext", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FileComponent.prototype, "customstyle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FileComponent.prototype, "onFileDrop", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], FileComponent.prototype, "onFileOver", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], FileComponent.prototype, "onFileLeave", void 0);
FileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'file-drop',
        template: __webpack_require__("../../../../ngx-file-drop/lib/ngx-drop/file-drop.component.html"),
        styles: [__webpack_require__("../../../../ngx-file-drop/lib/ngx-drop/file-drop.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object])
], FileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=file-drop.component.js.map

/***/ }),

/***/ "../../../../ngx-file-drop/lib/ngx-drop/file-drop.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileDropModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_drop_component__ = __webpack_require__("../../../../ngx-file-drop/lib/ngx-drop/file-drop.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FileDropModule = (function () {
    function FileDropModule() {
    }
    return FileDropModule;
}());
FileDropModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__file_drop_component__["a" /* FileComponent */],
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__file_drop_component__["a" /* FileComponent */]],
        imports: [],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1__file_drop_component__["a" /* FileComponent */]],
    })
], FileDropModule);

//# sourceMappingURL=file-drop.module.js.map

/***/ }),

/***/ "../../../../ngx-file-drop/lib/ngx-drop/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_drop_component__ = __webpack_require__("../../../../ngx-file-drop/lib/ngx-drop/file-drop.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_drop_module__ = __webpack_require__("../../../../ngx-file-drop/lib/ngx-drop/file-drop.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__file_drop_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_file_model__ = __webpack_require__("../../../../ngx-file-drop/lib/ngx-drop/upload-file.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upload_event_model__ = __webpack_require__("../../../../ngx-file-drop/lib/ngx-drop/upload-event.model.ts");
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-file-drop/lib/ngx-drop/upload-event.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadEvent; });
var UploadEvent = (function () {
    function UploadEvent(files) {
        this.files = files;
    }
    return UploadEvent;
}());

//# sourceMappingURL=upload-event.model.js.map

/***/ }),

/***/ "../../../../ngx-file-drop/lib/ngx-drop/upload-file.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFile; });
var UploadFile = (function () {
    function UploadFile(relativePath, fileEntry) {
        this.relativePath = relativePath;
        this.fileEntry = fileEntry;
    }
    return UploadFile;
}());

//# sourceMappingURL=upload-file.model.js.map

/***/ })

});
//# sourceMappingURL=index.chunk.js.map