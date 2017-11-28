webpackJsonp(["index.1"],{

/***/ "../../../../../src/app/home/breadcrumb/components/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"bread_crumb\">\r\n  <li *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\">\r\n    <a *ngIf=\"i != breadcrumbs.length - 1; else elseBlock\" href=\"#\" class=\"crumb\">\r\n      <span>{{breadcrumb}}</span>\r\n    </a>\r\n    <ng-template #elseBlock>{{breadcrumb}}</ng-template>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/home/breadcrumb/components/breadcrumb/breadcrumb.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bread_crumb {\n  color: red;\n  position: relative;\n  margin: 25px 0;\n  font-size: 13px;\n  background-color: white !important; }\n  .bread_crumb li {\n    font-size: 13px;\n    display: inline-block;\n    float: left;\n    margin-right: 5px;\n    color: #696b79;\n    text-transform: capitalize; }\n    .bread_crumb li a {\n      color: #696b79; }\n  .bread_crumb li:after {\n    font-size: 10px;\n    content: '/';\n    margin-left: 5px; }\n  .bread_crumb li:last-child {\n    font-weight: 500;\n    margin-right: 0;\n    font-family: Whitney-semi-bold; }\n  .bread_crumb li:last-child:after {\n    content: '';\n    margin-right: 0; }\n\nul.bread_crumb:before, ul.bread_crumb:after {\n  content: \"\";\n  display: table; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/breadcrumb/components/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
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

var BreadcrumbComponent = (function () {
    function BreadcrumbComponent() {
        // breadcrumbs: string[] = ['Home', 'Clothing', 'Shirts', 'Men Casual Shirts']
        this.breadcrumbs = ['Home', 'Categories'];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    return BreadcrumbComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BreadcrumbComponent.prototype, "taxonomies", void 0);
BreadcrumbComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-breadcrumb',
        template: __webpack_require__("../../../../../src/app/home/breadcrumb/components/breadcrumb/breadcrumb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/breadcrumb/components/breadcrumb/breadcrumb.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BreadcrumbComponent);

//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/content-header/content-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div itemprop=\"name\" class=\"queried-for\">\r\n    <h4 title=\"men casual shirts\" class=\"q\">Displaying available products</h4>\r\n    <span>&nbsp;</span>\r\n  </div>\r\n\r\n  <div class=\"options\">\r\n    <ul class=\"img-size\">\r\n      <label>View:</label>\r\n      <li (click)=\"toggleView('COMPACT')\" [ngClass]=\"{'big': true, 'selected': isBigSelected()}\"></li>\r\n      <li (click)=\"toggleView('COZY')\" [ngClass]=\"{'small': true, 'selected': isSmallSelected()}\"></li>\r\n    </ul>\r\n    <ul class=\"sort\">\r\n      <label>Sort:</label>\r\n      <li data-sortkey=\":popularity\">Popular</li>\r\n      <li data-sortkey=\":new\">New</li>\r\n      <li data-sortkey=\":discount\">Discount</li>\r\n      <label>Price: \r\n        <li data-sortkey=\":low\">Low</li>\r\n        <li data-sortkey=\":high\">High</li>\r\n      </label>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/content/content-header/content-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  background-color: #fff;\n  width: 759px;\n  display: inline-block;\n  vertical-align: top; }\n  .content .queried-for {\n    display: inline;\n    overflow: hidden;\n    font-size: 18px;\n    font-weight: 500;\n    text-transform: capitalize;\n    color: #282c3f;\n    width: 50%; }\n    .content .queried-for .q {\n      font-weight: 900;\n      display: inline-block;\n      text-overflow: ellipsis;\n      vertical-align: top;\n      overflow: hidden;\n      white-space: nowrap;\n      max-width: 67%; }\n    .content .queried-for span {\n      line-height: 39px;\n      color: #282c3f;\n      font-weight: 400;\n      font-size: 18px;\n      font-style: normal; }\n  .content .options {\n    position: relative;\n    float: right;\n    text-align: right;\n    margin: 12px 0 0 5px;\n    display: inline-block; }\n    .content .options ul.img-size {\n      display: inline-block;\n      margin-right: 10px; }\n      .content .options ul.img-size label {\n        color: #696b79;\n        font-weight: 400; }\n      .content .options ul.img-size li {\n        list-style: none;\n        display: inline-block;\n        cursor: pointer;\n        margin: 0 4px -2px;\n        width: 19px;\n        height: 13px;\n        background: url(" + __webpack_require__("../../../../../src/assets/search-sprite.d5ab50f1b815dfaf3976c6ce2e19d24670e5ba0b.png") + ") no-repeat transparent; }\n        .content .options ul.img-size li.big {\n          background-position: -284px -160px; }\n          .content .options ul.img-size li.big.selected {\n            cursor: default;\n            background-position: -284px -180px; }\n        .content .options ul.img-size li.small {\n          background-position: -311px -160px; }\n          .content .options ul.img-size li.small.selected {\n            background-position: -311px -180px;\n            cursor: default; }\n    .content .options ul.sort {\n      display: inline-block;\n      position: relative;\n      color: #282c3f; }\n      .content .options ul.sort label {\n        margin-left: 5px;\n        font-weight: 400; }\n      .content .options ul.sort label:first-child {\n        color: #3e4152; }\n      .content .options ul.sort li {\n        display: inline-block;\n        margin-left: 5px;\n        text-decoration: none;\n        cursor: pointer; }\n      .content .options ul.sort li:after {\n        content: ' ';\n        display: inline-block;\n        height: 11px;\n        width: 1px;\n        border-left: 1px solid #3e4152;\n        margin-left: 5px;\n        margin-bottom: -1px; }\n      .content .options ul.sort label {\n        font-weight: 400;\n        margin-left: 5px; }\n        .content .options ul.sort label li:first-child {\n          margin-left: 0; }\n        .content .options ul.sort label li:after {\n          content: none; }\n    .content .options ul.sort:before, .content .options ul.sort:after {\n      content: \"\";\n      display: table; }\n  .content .options:before, .content .options:after {\n    content: \"\";\n    display: table; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/content/content-header/content-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentHeaderComponent; });
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

var ContentHeaderComponent = (function () {
    function ContentHeaderComponent() {
        this.toggleSize = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedSize = 'COZY';
    }
    ContentHeaderComponent.prototype.ngOnInit = function () {
    };
    ContentHeaderComponent.prototype.toggleView = function (view) {
        this.selectedSize = view;
        this.toggleSize.emit({ size: view });
    };
    ContentHeaderComponent.prototype.isSmallSelected = function () {
        return this.selectedSize === 'COZY';
    };
    ContentHeaderComponent.prototype.isBigSelected = function () {
        return this.selectedSize === 'COMPACT';
    };
    return ContentHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ContentHeaderComponent.prototype, "toggleSize", void 0);
ContentHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-content-header',
        template: __webpack_require__("../../../../../src/app/home/content/content-header/content-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/content/content-header/content-header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContentHeaderComponent);

//# sourceMappingURL=content-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
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

var ContentComponent = (function () {
    function ContentComponent() {
        this.toggleLayout = { size: 'COZY' };
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.prototype.toggleSize = function (layoutInfo) {
        this.toggleLayout = layoutInfo;
    };
    return ContentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ContentComponent.prototype, "products", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ContentComponent.prototype, "taxonId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ContentComponent.prototype, "user", void 0);
ContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-content',
        template: "\n\n    <app-product-list [(toggleLayout)]='toggleLayout' [products]='products' [taxonId]=\"taxonId\" [priceSet]=\"user.product_price_set_id\"></app-product-list>\n  ",
    }),
    __metadata("design:paramtypes", [])
], ContentComponent);

//# sourceMappingURL=content.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/customize/customize.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"customize\">\r\n  <!--<ul class=\"properties\">\r\n    <li data-order=\"0\" data-filter=\"size_facet\" style=\"\" class=\"selected\">Sizes</li>\r\n    <li data-order=\"2\" data-filter=\"tag_coupon\" style=\"display: none\">Offers</li>\r\n    <li data-order=\"3\" data-filter=\"age_facet\" style=\"display: none\">Age</li>\r\n    <li data-order=\"4\" data-filter=\"Shirt_Length_article_attr\" style=\"\">Shirt Length</li>\r\n    <li data-order=\"5\" data-filter=\"Sleeve_Length_article_attr\" style=\"\">Sleeve Length</li>\r\n    <li data-order=\"6\" data-filter=\"Hemline_article_attr\" style=\"\">Hemline</li>\r\n    <li data-order=\"7\" data-filter=\"Pattern_article_attr\" style=\"\">Pattern</li>\r\n    <li data-order=\"8\" data-filter=\"Collar_article_attr\" style=\"\">Collar</li>\r\n    <li data-order=\"9\" data-filter=\"Fabric_article_attr\" style=\"\">Fabric</li>\r\n    <li data-order=\"10\" data-filter=\"Pattern_Size_article_attr\" style=\"\">Pattern Size</li>\r\n    <li data-order=\"11\" data-filter=\"Weave_Pattern_article_attr\" style=\"\">Weave Pattern</li>\r\n    <li data-order=\"12\" data-filter=\"Print_or_Pattern_Type_article_attr\" style=\"\">Print or Pattern Type</li>\r\n    <li data-order=\"13\" data-filter=\"Occasion_article_attr\" style=\"\">Occasion</li>\r\n    <li data-order=\"14\" data-filter=\"Fit_article_attr\" style=\"\">Fit</li>\r\n  </ul>-->\r\n  <div class=\"allOptions\">\r\n    <!--<ul data-filter=\"size_facet\" style=\"\" class=\"options\">\r\n      <li data-filter=\"size_facet\" data-option=\"38\" data-num=\"456\" data-colorhex=\"38\" class=\"option\">\r\n        <label title=\"38\" class=\"selected\">\r\n          <input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"38\" class=\"checkbox\">38<span class=\"num\">(456)</span>\r\n          </label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"39\" data-num=\"387\" data-colorhex=\"39\" class=\"option\">\r\n        <label title=\"39\" class=\"selected\">\r\n          <input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"39\" class=\"checkbox\">39<span class=\"num\">(387)</span>\r\n        </label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"40\" data-num=\"1020\" data-colorhex=\"40\" class=\"option\">\r\n        <label title=\"40\">\r\n          <input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"40\" class=\"checkbox\">40<span class=\"num\">(1020)</span>\r\n        </label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"42\" data-num=\"1082\" data-colorhex=\"42\" class=\"option\">\r\n        <label title=\"42\">\r\n          <input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"42\" class=\"checkbox\">42<span class=\"num\">(1082)</span>\r\n        </label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"43\" data-num=\"1\" data-colorhex=\"43\" class=\"option\">\r\n        <label title=\"43\">\r\n          <input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"43\" class=\"checkbox\">43<span class=\"num\">(1)</span>\r\n        </label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"44\" data-num=\"1318\" data-colorhex=\"44\" class=\"option\"><label title=\"44\"><input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"44\" class=\"checkbox\">44<span class=\"num\">(1318)</span></label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"45\" data-num=\"1\" data-colorhex=\"45\" class=\"option\"><label title=\"45\"><input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"45\" class=\"checkbox\">45<span class=\"num\">(1)</span></label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"46\" data-num=\"184\" data-colorhex=\"46\" class=\"option\"><label title=\"46\"><input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"46\" class=\"checkbox\">46<span class=\"num\">(184)</span></label>\r\n      </li>\r\n    </ul>-->\r\n    <!-- Add provision for more filter options later after this -->\r\n    <!--<ul data-filter=\"Shirt_Length_article_attr\" style=\"display:none;\" class=\"options\">\r\n      <li data-filter=\"Shirt_Length_article_attr\" data-option=\"regular\" data-num=\"1662\" data-colorhex=\"regular\" class=\"option\">\r\n        <label title=\"regular\">\r\n          <input type=\"checkbox\" data-filter=\"Shirt_Length_article_attr\" data-option=\"regular\" class=\"checkbox\">regular<span class=\"num\">(1662)</span>\r\n        </label>\r\n      </li>\r\n    </ul>-->\r\n     \r\n  </div>    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/content/customize/customize.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".customize ul.properties {\n  margin-left: -40px;\n  display: block;\n  position: relative; }\n  .customize ul.properties li {\n    position: relative;\n    cursor: pointer;\n    font-size: 14px;\n    float: left;\n    margin-right: 32px;\n    margin-bottom: 5px;\n    border-bottom: 2px solid #fff;\n    display: inline-block;\n    color: #696b79;\n    list-style: none; }\n    .customize ul.properties li.selected:after {\n      height: 2px;\n      width: 100%;\n      position: absolute;\n      background-color: #20bd99;\n      content: ' ';\n      top: 108%;\n      left: 0; }\n  .customize ul.properties li:not(.selected):hover:after {\n    height: 2px;\n    width: 100%;\n    position: absolute;\n    background-color: #696b79;\n    content: ' ';\n    top: 108%;\n    left: 0; }\n\n.customize ul.properties:before, .customize ul.properties:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.customize .allOptions {\n  display: block;\n  margin-top: 12px;\n  position: relative;\n  padding-top: 10px;\n  border-top: 1px dotted #d4d5d9; }\n  .customize .allOptions ul.options {\n    padding-left: 0px;\n    text-align: right;\n    margin: 5px 0 0 5px;\n    text-transform: capitalize;\n    display: block;\n    border-bottom: 1px dotted #d4d5d9;\n    max-height: 76px;\n    position: relative;\n    padding-bottom: 5px;\n    margin-bottom: 15px;\n    overflow: hidden;\n    float: none; }\n    .customize .allOptions ul.options li {\n      margin: 0 2px 2px 0;\n      display: inline-block;\n      width: 120px;\n      font-size: 14px;\n      text-align: left;\n      color: #3e4152;\n      float: left;\n      list-style: none; }\n      .customize .allOptions ul.options li label {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        cursor: pointer;\n        display: block;\n        font-weight: 400;\n        height: 19px;\n        line-height: 19px;\n        vertical-align: top; }\n        .customize .allOptions ul.options li label.selected:before {\n          background-position: -237px -138px; }\n        .customize .allOptions ul.options li label input.checkbox, .customize .allOptions ul.options li label input.radio {\n          display: inline-block !important;\n          visibility: hidden;\n          margin: 0 12px 0 0;\n          width: 8px;\n          height: 8px; }\n        .customize .allOptions ul.options li label .num {\n          display: none; }\n      .customize .allOptions ul.options li label:before {\n        background: url(" + __webpack_require__("../../../../../src/assets/search-sprite.d5ab50f1b815dfaf3976c6ce2e19d24670e5ba0b.png") + ") no-repeat -237px -110px transparent;\n        content: ' ';\n        height: 13px;\n        width: 13px;\n        display: block;\n        visibility: visible;\n        top: 4px;\n        position: absolute; }\n      .customize .allOptions ul.options li label:not(.selected):hover:before {\n        background-position: -237px -124px; }\n  .customize .allOptions ul.options:before, .customize .allOptions ul.options:after {\n    content: \"\";\n    display: table; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/content/customize/customize.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomizeComponent; });
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

var CustomizeComponent = (function () {
    function CustomizeComponent() {
    }
    CustomizeComponent.prototype.ngOnInit = function () {
    };
    return CustomizeComponent;
}());
CustomizeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customize',
        template: __webpack_require__("../../../../../src/app/home/content/customize/customize.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/content/customize/customize.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CustomizeComponent);

//# sourceMappingURL=customize.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/filter-summary/filter-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filter-summary\">\r\n  <div class=\"filter\">\r\n     <!-- <div \r\n      *ngFor=\"let filter of filters$ | async\" \r\n      class=\"option\"\r\n      (click)=\"removeFilter(filter)\">{{ filter.name }}\r\n    </div>  -->\r\n    <div \r\n      *ngFor=\"let filter of filters$ | async\" \r\n      >\r\n      <h1>{{filter.name}}</h1>\r\n      <p>{{filter.description}}</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                   \r\n    </div>\r\n\r\n    <!--<div data-filter=\"brands_filter_facet\" data-option=\"Wills Lifestyle\" data-colorhex=\"\" class=\"option\">Wills Lifestyle</div>-->\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/content/filter-summary/filter-summary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter-summary {\n  margin: 10px 0 5px;\n  width: 100%;\n  height: 100px; }\n  .filter-summary .filter {\n    margin-right: 10px;\n    float: left; }\n    .filter-summary .filter .option {\n      display: block;\n      float: left;\n      position: relative;\n      background-color: #eaeaec;\n      text-transform: capitalize;\n      color: #3e4152;\n      padding: 2px 10px 2px 25px;\n      margin: 0 5px 5px 0;\n      cursor: pointer;\n      transition: all .2s ease-out; }\n    .filter-summary .filter .option:hover {\n      background: #d4d5d9;\n      text-decoration: line-through; }\n    .filter-summary .filter .option:before {\n      content: ' ';\n      background: url(" + __webpack_require__("../../../../../src/assets/search-sprite.d5ab50f1b815dfaf3976c6ce2e19d24670e5ba0b.png") + ") no-repeat -281px -70px;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 10px;\n      height: 10px;\n      top: 7px;\n      left: 8px; }\n  .filter-summary .filter:before, .filter-summary .filter:after {\n    content: \"\";\n    display: table; }\n\n.filter-summary:before, .filter-summary:after {\n  content: \"\";\n  display: table; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/content/filter-summary/filter-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_search_actions__ = __webpack_require__("../../../../../src/app/home/reducers/search.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_selectors__ = __webpack_require__("../../../../../src/app/home/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
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




var FilterSummaryComponent = (function () {
    function FilterSummaryComponent(store, search) {
        this.store = store;
        this.search = search;
        this.filters$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers_selectors__["a" /* getFilters */]);
    }
    FilterSummaryComponent.prototype.ngOnInit = function () {
    };
    FilterSummaryComponent.prototype.presentFilter = function (filter) {
        // if (filter.name == "Supply")
    };
    FilterSummaryComponent.prototype.removeFilter = function (removedFilter) {
        console.log("filter", removedFilter);
        this.store.dispatch(this.search.removeFilter(removedFilter));
    };
    return FilterSummaryComponent;
}());
FilterSummaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-filter-summary',
        template: __webpack_require__("../../../../../src/app/home/content/filter-summary/filter-summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/content/filter-summary/filter-summary.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__reducers_search_actions__["a" /* SearchActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__reducers_search_actions__["a" /* SearchActions */]) === "function" && _b || Object])
], FilterSummaryComponent);

var _a, _b;
//# sourceMappingURL=filter-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
  * Filter the products based on selected taxons in the sidebar
  * @name filter
  * @param selectedTaxonids
  */
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (products, selectedTaxonId, priceSet) {
        var selectedId = selectedTaxonId;
        if (!products)
            return [];
        if (!selectedId)
            return products;
        return products.filter(function (product) {
            var productPresent = false;
            if (product.taxon_ids.findIndex(function (taxon_id) { return taxon_id === selectedId; }) !== -1) {
                productPresent = true;
            }
            var productPresent2 = false;
            product.product_price_sets.forEach(function (set) {
                if (priceSet == set.id)
                    productPresent2 = true;
            });
            if (priceSet == 1)
                productPresent2 = true;
            return productPresent && productPresent2;
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], FilterPipe);

//# sourceMappingURL=product-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-list-item/product-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product-tile\">\r\n  <p> Product id: {{ product.id }} </p>\r\n  <p> Product Name : {{ product.name }} </p>\r\n  <p> Product Price : {{ product.price }} </p>\r\n  <img [src]=\"getProductImageUrl(product.master.images[0]?.large_url)\" *ngIf=\"product.master.images[0]\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-list-item/product-list-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-tile {\n  margin: 10px;\n  border: solid 1px gray; }\n  .product-tile img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-list-item/product-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_product__ = __webpack_require__("../../../../../src/app/core/models/product.ts");
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



var ProductListItemComponent = (function () {
    function ProductListItemComponent() {
    }
    ProductListItemComponent.prototype.ngOnInit = function () {
    };
    ProductListItemComponent.prototype.getProductImageUrl = function (url) {
        return __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_ENDPOINT + url;
    };
    return ProductListItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_models_product__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_models_product__["a" /* Product */]) === "function" && _a || Object)
], ProductListItemComponent.prototype, "product", void 0);
ProductListItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-product-list-item',
        template: __webpack_require__("../../../../../src/app/home/content/product-list/product-list-item/product-list-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/content/product-list/product-list-item/product-list-item.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductListItemComponent);

var _a;
//# sourceMappingURL=product-list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row-base\" style=\"display: -webkit-flex\">\r\n  <section>  \r\n    <ul class=\"results-base\">\r\n      <p *ngIf=\"products.length == 0\">No Products found for this category</p>\r\n      <li *ngFor=\"let product of products | filter : selectedTaxonId : priceSet\" class=\"product-base\" [style.margin]=\"getMargin()\">\r\n          <div class=\"product-thumbShim\"></div>\r\n          <a [routerLink]=\"['/product/', product.slug]\">\r\n            <img class=\"product-thumb\"\r\n                alt=\"{{product.name}}\" \r\n                [src]=\"getProductImageUrl(product.master.images[0]?.large_url)\"\r\n                *ngIf=\"product.master.images[0]\"/>\r\n            <img class=\"product-thumb\"\r\n                alt=\"{{product.name}}\" \r\n                src=\"assets/logo.png\"\r\n                *ngIf=\"!product.master.images[0]\"/>\r\n            <div class=\"product-productMetaInfo\">\r\n              <div class=\"product-brand\">{{ product.name }}</div>\r\n            </div>\r\n          </a>\r\n          <div class=\"product-sizeDisplayDiv\">\r\n            <div class=\"product-sizeDisplayHeader\">\r\n              <span>Select a size</span>\r\n              <span class=\"myntraweb-sprite product-sizeDisplayRemoveMark sprites-remove\"></span>\r\n            </div>\r\n            <div class=\"product-sizeButtonsContaier\">\r\n              <button class=\"product-sizeButton\">S</button>\r\n              <button class=\"product-sizeButton\">M</button>\r\n              <button class=\"product-sizeButton\">L</button>\r\n              <button class=\"product-sizeButton\">XL</button>\r\n              <button class=\"product-sizeButton\">XXL</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"product-actions\">\r\n            <span class=\"product-actionsButton product-wishlist coming-soon\">save</span>\r\n            <span class=\"product-actionsButton product-addToBag\">\r\n              <span (click)=\"addToCart(product)\">Add to bag</span>\r\n            </span>\r\n          </div>\r\n      </li>\r\n    </ul>\r\n  </section>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row-base {\n  margin-top: 80px; }\n\nul {\n  margin-left: -36px; }\n  ul li .product-thumbShim {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 101%;\n    height: 100%;\n    background-color: #282c3f;\n    transition: visibility 0s,opacity .5s linear;\n    visibility: hidden;\n    opacity: 0; }\n  ul li.product-base {\n    width: 180px;\n    height: 332px;\n    text-align: center;\n    position: relative;\n    vertical-align: top;\n    overflow: hidden;\n    display: inline-block;\n    transition: all 500ms; }\n    ul li.product-base a {\n      text-decoration: none;\n      background-color: transparent;\n      color: #282c3f; }\n      ul li.product-base a .product-thumb {\n        height: 240px;\n        display: block;\n        background-color: transparent;\n        opacity: 1;\n        width: 100%;\n        -o-object-fit: contain;\n           object-fit: contain; }\n      ul li.product-base a .product-productMetaInfo {\n        position: relative;\n        z-index: 2;\n        background: #fff;\n        height: 100%;\n        padding: 0 5px; }\n        ul li.product-base a .product-productMetaInfo .product-brand, ul li.product-base a .product-productMetaInfo .product-product {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          font-size: 13px;\n          font-weight: 500;\n          line-height: 14px;\n          color: #282c3f;\n          text-transform: capitalize;\n          margin-top: 10px; }\n        ul li.product-base a .product-productMetaInfo .product-price {\n          font-size: 13px;\n          line-height: 15px;\n          color: #282c3f;\n          margin: 10px 0 0;\n          white-space: nowrap;\n          font-weight: 500; }\n        ul li.product-base a .product-productMetaInfo .product-sizes {\n          font-size: 11px;\n          display: none;\n          color: #3e4152;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          margin-top: 6px; }\n    ul li.product-base .product-sizeDisplayDiv {\n      z-index: 1;\n      width: 100%;\n      max-width: 100%;\n      position: absolute;\n      bottom: 91px;\n      background: #fff;\n      margin-bottom: -161px;\n      transition: all .2s ease-out; }\n      ul li.product-base .product-sizeDisplayDiv .product-sizeDisplayHeader {\n        border-bottom: 1px solid #eaeaec;\n        border-top: 1px solid #eaeaec;\n        padding: 8px;\n        text-align: left;\n        font-size: 14px;\n        color: #535766; }\n    ul li.product-base .product-sizeButtonsContaier {\n      text-align: center;\n      padding: 10px;\n      overflow-y: scroll;\n      box-sizing: border-box;\n      max-height: 108px; }\n      ul li.product-base .product-sizeButtonsContaier .product-sizeButton {\n        border-radius: 20px;\n        margin: 5px;\n        min-width: 34px;\n        height: 34px;\n        background-color: #fff;\n        border: 1px solid #696e79;\n        outline: none;\n        font-size: 12px;\n        color: #696e79;\n        box-sizing: border-box;\n        padding: 5px; }\n    ul li.product-base .product-actions {\n      position: absolute;\n      left: 0;\n      bottom: 40px;\n      border-bottom: 1px solid #eaeaec;\n      border-top: 1px solid #eaeaec;\n      background: #fff;\n      width: 100%; }\n      ul li.product-base .product-actions .product-actionsButton {\n        line-height: 20px;\n        margin: 10px 0;\n        font-weight: 800;\n        font-size: 11px;\n        color: #526cd0;\n        text-transform: uppercase;\n        display: inline-block;\n        cursor: pointer; }\n        ul li.product-base .product-actions .product-actionsButton.product-wishlist {\n          float: left;\n          width: 40%; }\n        ul li.product-base .product-actions .product-actionsButton.product-addToBag {\n          width: 60%;\n          float: left; }\n          ul li.product-base .product-actions .product-actionsButton.product-addToBag span {\n            border-left: 1px dotted #d4d5d9;\n            display: block; }\n  ul li .product-thumbShim {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 101%;\n    height: 100%;\n    background-color: #282c3f;\n    transition: visibility 0s,opacity .5s linear;\n    visibility: hidden;\n    opacity: 0; }\n  ul li.product-base:hover {\n    outline: 1px solid #eaeaec;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); }\n    ul li.product-base:hover .product-actions {\n      z-index: 10; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_services_checkout_service__ = __webpack_require__("../../../../../src/app/core/services/checkout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductListComponent = (function () {
    function ProductListComponent(checkoutService, store, checkoutActions) {
        this.checkoutService = checkoutService;
        this.store = store;
        this.checkoutActions = checkoutActions;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        // console.log("PriceSet:", this.priceSet);
    };
    ProductListComponent.prototype.getProductImageUrl = function (url) {
        return __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_ENDPOINT + url;
    };
    ProductListComponent.prototype.addToCart = function (product) {
        // const variant_id = product.master.id;
        // this.store.dispatch(this.checkoutActions.addToCart(variant_id, []));
    };
    ProductListComponent.prototype.getMargin = function () {
        return this.toggleLayout.size === 'COZY' ? '0 15px 20px 0' : '0 80px 20px 0';
    };
    ProductListComponent.prototype.countSeletecdProducts = function (count) {
        this.selectedProductsNumber = count + 1;
    };
    ProductListComponent.prototype.getSelectedProductsNum = function () {
        return this.selectedProductsNumber;
    };
    ProductListComponent.prototype.isValid = function (item) {
        return true;
    };
    return ProductListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductListComponent.prototype, "products", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])('taxonId'),
    __metadata("design:type", Object)
], ProductListComponent.prototype, "selectedTaxonId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductListComponent.prototype, "toggleLayout", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductListComponent.prototype, "priceSet", void 0);
ProductListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/home/content/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/content/product-list/product-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__core_services_checkout_service__["a" /* CheckoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__core_services_checkout_service__["a" /* CheckoutService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__["a" /* CheckoutActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__["a" /* CheckoutActions */]) === "function" && _c || Object])
], ProductListComponent);

var _a, _b, _c;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let taxon of taxons\">\r\n    <div class=\"col-xs-12\">\r\n        <h1>{{taxon.title}}</h1>\r\n        <h3>{{taxon.description}}</h3>\r\n    </div>\r\n    <div class=\"col-xs-12\" *ngIf=\"currentUser$ != undefined\">\r\n        <app-content [user]=\"currentUser$\" [products]=\"products$ | async\" [taxonId]=\"taxon.id\">\r\n        </app-content>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_actions_product_actions__ = __webpack_require__("../../../../../src/app/product/actions/product-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_reducers_selectors__ = __webpack_require__("../../../../../src/app/product/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(store, actions, route, router, userService) {
        var _this = this;
        this.store = store;
        this.actions = actions;
        this.route = route;
        this.router = router;
        this.userService = userService;
        router.events.subscribe(function (event) {
            _this.taxons = _this.getTaxons(parseInt(_this.route.snapshot.params['id']));
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__product_reducers_selectors__["a" /* getProducts */]);
        if (localStorage.getItem('user')) {
            this.userService.getUser().subscribe(function (res) {
                _this.currentUser$ = res;
            });
        }
        else {
            this.currentUser$ = false;
        }
    };
    HomeComponent.prototype.getTaxons = function (id) {
        var taxons = JSON.parse(localStorage.getItem('taxons'));
        if (!isNaN(id)) {
            return taxons.filter(function (taxon) {
                if (taxon.id == id)
                    return taxon;
            });
        }
        else {
            return taxons;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__product_actions_product_actions__["a" /* ProductActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__product_actions_product_actions__["a" /* ProductActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__user_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_services_user_service__["a" /* UserService */]) === "function" && _e || Object])
], HomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");

var HomeRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */]
    },
];
//# sourceMappingURL=home.routes.js.map

/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumb_components_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/home/breadcrumb/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/home/content/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__content_product_list_product_list_item_product_list_item_component__ = __webpack_require__("../../../../../src/app/home/content/product-list/product-list-item/product-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_filter_summary_filter_summary_component__ = __webpack_require__("../../../../../src/app/home/content/filter-summary/filter-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__content_customize_customize_component__ = __webpack_require__("../../../../../src/app/home/content/customize/customize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__content_content_header_content_header_component__ = __webpack_require__("../../../../../src/app/home/content/content-header/content-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__content_content__ = __webpack_require__("../../../../../src/app/home/content/content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sidebar_taxons_taxons_component__ = __webpack_require__("../../../../../src/app/home/sidebar/taxons/taxons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sidebar_filter_filter_component__ = __webpack_require__("../../../../../src/app/home/sidebar/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_routes__ = __webpack_require__("../../../../../src/app/home/home.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__content_product_list_product_filter_pipe__ = __webpack_require__("../../../../../src/app/home/content/product-list/product-filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Components

// Breadcrumb components

// Content components






// Sidebar components


// Routes


var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            // components
            __WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__content_product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__content_product_list_product_list_item_product_list_item_component__["a" /* ProductListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_11__sidebar_taxons_taxons_component__["a" /* TaxonsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__sidebar_filter_filter_component__["a" /* FilterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__breadcrumb_components_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
            __WEBPACK_IMPORTED_MODULE_9__content_content_header_content_header_component__["a" /* ContentHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__content_customize_customize_component__["a" /* CustomizeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__content_filter_summary_filter_summary_component__["a" /* FilterSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_10__content_content__["a" /* ContentComponent */],
            // pipes
            __WEBPACK_IMPORTED_MODULE_14__content_product_list_product_filter_pipe__["a" /* FilterPipe */],
        ],
        exports: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_13__home_routes__["a" /* HomeRoutes */]),
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["a" /* SharedModule */]
        ],
        providers: []
    })
], HomeModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/home/reducers/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFilters; });
/* unused harmony export getSelectedTaxonIds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);

/******************* Base Search State ******************/
function getSearchState(state) {
    return state.search;
}
;
/******************* Individual selectors ******************/
function fetchSelectedFilters(state) {
    return state.selectedFilters.toJS();
}
;
function fetchSelectedTaxonIds(state) {
    return state.selectedTaxonIds.toJS();
}
/******************* Public Selector API's ******************/
var getFilters = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getSearchState, fetchSelectedFilters);
var getSelectedTaxonIds = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getSearchState, fetchSelectedTaxonIds);
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ "../../../../../src/app/home/sidebar/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  filter works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/sidebar/filter/filter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/sidebar/filter/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
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

var FilterComponent = (function () {
    function FilterComponent() {
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    return FilterComponent;
}());
FilterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-filter',
        template: __webpack_require__("../../../../../src/app/home/sidebar/filter/filter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/sidebar/filter/filter.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FilterComponent);

//# sourceMappingURL=filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/sidebar/taxons/taxons.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"heading\">Category</h4>\r\n<div class=\"filter-box\">\r\n  <ul class=\"taxonomy\" *ngFor=\"let taxonomy of taxonomies\">\r\n    <li *ngFor=\"let taxon of taxonomy.root.taxons\" class=\"filter\"> \r\n      <label class=\"vertical-filters-label common-customCheckbox\">  \r\n        <input type=\"checkbox\" [checked]=\"isChecked(taxon)\" (click)=\"taxonSelected(taxon, $event.target.checked)\">  {{taxon.name}}\r\n        <div class=\"common-checkboxIndicator\" ></div>\r\n      </label>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/sidebar/taxons/taxons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heading {\n  text-transform: uppercase;\n  font-weight: 900;\n  padding: 5px 22px 5px 2px;\n  color: #282c3f; }\n\n.filter-box {\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e9e9ed;\n  position: relative; }\n  .filter-box ul.taxonomy {\n    margin-left: -37px;\n    list-style: none; }\n    .filter-box ul.taxonomy li.filter {\n      font-size: 14px;\n      margin-bottom: 7px;\n      font-size: 18px; }\n      .filter-box ul.taxonomy li.filter label.vertical-filters-label {\n        display: block;\n        font-size: 16px;\n        width: 95%;\n        white-space: nowrap;\n        cursor: pointer;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        min-height: 17px;\n        color: #282c3f;\n        position: relative; }\n        .filter-box ul.taxonomy li.filter label.vertical-filters-label input {\n          margin: 0 10px 0 0;\n          visibility: hidden; }\n        .filter-box ul.taxonomy li.filter label.vertical-filters-label .common-checkboxIndicator {\n          box-sizing: border-box;\n          position: absolute;\n          top: 6px;\n          left: 0;\n          width: 16px;\n          height: 16px;\n          border: 1px solid #c3c2c9;\n          background: #fff;\n          border-radius: 2px; }\n        .filter-box ul.taxonomy li.filter label.vertical-filters-label .common-checkboxIndicator:after {\n          display: block;\n          content: \"\";\n          position: absolute;\n          top: 4px;\n          left: 4px;\n          z-index: 1;\n          width: 8px;\n          height: 5px;\n          border: 2px solid #fff;\n          border-color: #fff;\n          border-top-style: none;\n          border-right-style: none;\n          transition: all .3s ease-in-out;\n          -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n        .filter-box ul.taxonomy li.filter label.vertical-filters-label input:checked ~ .common-checkboxIndicator {\n          border: 2px;\n          background: #526cd0; }\n        .filter-box ul.taxonomy li.filter label.vertical-filters-label input[type=checkbox]:checked {\n          content: \"\\2713\";\n          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n          font-size: 15px;\n          color: #f3f3f3;\n          text-align: center;\n          line-height: 15px; }\n      .filter-box ul.taxonomy li.filter label:before {\n        border-radius: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/sidebar/taxons/taxons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_search_actions__ = __webpack_require__("../../../../../src/app/home/reducers/search.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_selectors__ = __webpack_require__("../../../../../src/app/home/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
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




var TaxonsComponent = (function () {
    function TaxonsComponent(store, actions, ref) {
        var _this = this;
        this.store = store;
        this.actions = actions;
        this.ref = ref;
        this.selectedFilters = [];
        this.searchFilters$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers_selectors__["a" /* getFilters */]);
        this.searchFilters$.subscribe(function (data) {
            _this.selectedFilters = data;
        });
    }
    TaxonsComponent.prototype.ngOnInit = function () {
        console.log("taxonomies", this.taxonomies);
    };
    TaxonsComponent.prototype.isChecked = function (taxon) {
        var result = false;
        this.selectedFilters.forEach(function (filter) {
            if (filter.id === taxon.id) {
                result = true;
            }
        });
        return result;
    };
    TaxonsComponent.prototype.taxonSelected = function (taxon, checked) {
        if (checked) {
            this.store.dispatch(this.actions.addFilter(taxon));
        }
        else {
            this.store.dispatch(this.actions.removeFilter(taxon));
        }
    };
    return TaxonsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TaxonsComponent.prototype, "taxonomies", void 0);
TaxonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-taxons',
        template: __webpack_require__("../../../../../src/app/home/sidebar/taxons/taxons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/sidebar/taxons/taxons.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__reducers_search_actions__["a" /* SearchActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__reducers_search_actions__["a" /* SearchActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object])
], TaxonsComponent);

var _a, _b, _c;
//# sourceMappingURL=taxons.component.js.map

/***/ })

});
//# sourceMappingURL=index.1.chunk.js.map