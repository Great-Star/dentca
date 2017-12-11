webpackJsonp(["index.0"],{

/***/ "../../../../../src/app/core/models/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Order */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightOrder; });
/*
 * Order model
 * Detailed info http://guides.spreecommerce.org/developer/orders.html
 * Public API's http://guides.spreecommerce.org/api/orders.html
 */
var Order = (function () {
    function Order() {
    }
    return Order;
}());

// NOTE: This just mimics the serializer exposed in the API
// Not sure if it is required, review it in APRIL
var LightOrder = (function () {
    function LightOrder() {
    }
    return LightOrder;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/addresses/addresses.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <app-bill-address class=\"col-md-6 col-sm-6\" [address]=\"(user$ | async).get('bill_address')\"></app-bill-address>\r\n  <app-ship-address class=\"col-md-6 col-sm-6\" [address]=\"(user$ | async).get('ship_address')\"></app-ship-address> \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/components/addresses/addresses.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/addresses/addresses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_selector__ = __webpack_require__("../../../../../src/app/user/reducers/selector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressesComponent = (function () {
    function AddressesComponent(store, userActions) {
        this.store = store;
        this.userActions = userActions;
        this.user$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers_selector__["b" /* getUser */]);
    }
    AddressesComponent.prototype.ngOnInit = function () {
        this.store.dispatch(this.userActions.getUser());
    };
    return AddressesComponent;
}());
AddressesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addresses',
        template: __webpack_require__("../../../../../src/app/user/components/addresses/addresses.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/addresses/addresses.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_user_actions__["a" /* UserActions */]) === "function" && _b || Object])
], AddressesComponent);

var _a, _b;
//# sourceMappingURL=addresses.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/addresses/bill-address/bill-address.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">BILLING ADDRESS</div>\n<div>\n  <p>{{address?.get('full_name')}}</p>\n  <p>{{address?.get('address1') +\", \"+ address?.get('address1')}}</p>\n  <p>{{address?.get('city') + \", \" + address?.get('state')?.get('name') + \", \" + address?.get('zipcode')}}</p>\n  <p>{{address?.get('phone')}}</p>\n  <p>{{address?.get('alternative_phone')}}</p>\n  <p>{{address?.get('country')?.get('name')}}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/components/addresses/bill-address/bill-address.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  font-size: 17px;\n  color: #535766;\n  font-weight: 600;\n  font-family: \"Whitney-semi-bold\";\n  margin-bottom: 20px; }\n\np {\n  margin-bottom: 15px;\n  font-size: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/addresses/bill-address/bill-address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillAddressComponent; });
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

var BillAddressComponent = (function () {
    function BillAddressComponent() {
    }
    BillAddressComponent.prototype.ngOnInit = function () {
    };
    return BillAddressComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BillAddressComponent.prototype, "address", void 0);
BillAddressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bill-address',
        template: __webpack_require__("../../../../../src/app/user/components/addresses/bill-address/bill-address.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/addresses/bill-address/bill-address.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BillAddressComponent);

//# sourceMappingURL=bill-address.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/addresses/ship-address/ship-address.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">SHIPPING ADDRESS</div>\n<div>\n  <p>{{address?.get('full_name')}}</p>\n  <p>{{address?.get('address1') +\", \"+ address?.get('address1')}}</p>\n  <p>{{address?.get('city') + \", \" + address?.get('state')?.get('name') + \", \" + address?.get('zipcode')}}</p>\n  <p>{{address?.get('phone')}}</p>\n  <p>{{address?.get('alternative_phone')}}</p>\n  <p>{{address?.get('country')?.get('name')}}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/components/addresses/ship-address/ship-address.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  font-size: 17px;\n  color: #535766;\n  font-weight: 600;\n  font-family: \"Whitney-semi-bold\";\n  margin-bottom: 20px; }\n\np {\n  margin-bottom: 15px;\n  font-size: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/addresses/ship-address/ship-address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipAddressComponent; });
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

var ShipAddressComponent = (function () {
    function ShipAddressComponent() {
    }
    ShipAddressComponent.prototype.ngOnInit = function () {
    };
    return ShipAddressComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ShipAddressComponent.prototype, "address", void 0);
ShipAddressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ship-address',
        template: __webpack_require__("../../../../../src/app/user/components/addresses/ship-address/ship-address.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/addresses/ship-address/ship-address.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ShipAddressComponent);

//# sourceMappingURL=ship-address.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/corp-orders/corp-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"corpOrders\">\n    <tr class=\"header-row\">\n        <th>Number</th>\n        <th>Created</th>\n        <th>Completed date</th>\n        <th>Total</th>\n        <th style=\"width: 1%;\">Status</th>\n    </tr>\n    <tr *ngFor=\"let order of corpOrders; let i = index\">\n        <td class=\"order-number-cell\">{{ order.number }}</td>\n        <td>{{ order.updated_at | date: 'short' }}</td>\n        <td>{{ order.completed_at | date: 'short' }}</td>\n        <td>{{ order.total | currency: order.currency : 'symbol':'.2-2' }}</td>\n        <td *ngIf=\"order.state == 'complete'\">\n            <p class=\"green-cell\">{{ order.state }}</p>\n        </td>\n        <td *ngIf=\"order.state == 'cart'\">\n            <p class=\"blue-cell\">{{ order.state }}</p>\n        </td>\n        <td *ngIf=\"order.state != 'cart' && order.state != 'complete'\">\n            <p class=\"yellow-cell\">{{ order.state }}</p>\n        </td>\n    </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/user/components/corp-orders/corp-orders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  width: 100%; }\n  table .header-row {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    background-color: #42A948;\n    color: white; }\n    table .header-row:hover {\n      background-color: #42A948; }\n\ntable, th, td {\n  border: 1px solid #ddd;\n  border-collapse: collapse;\n  padding: 8px; }\n\ntable tr:nth-child(even) {\n  background-color: #f2f2f2; }\n\ntable tr:hover {\n  background-color: #ddd; }\n\ntable td:nth-child(5) {\n  text-align: center; }\n\np {\n  border-radius: 10px;\n  margin: 0px;\n  text-align: center;\n  border: 1px;\n  padding: 1px 3px;\n  color: white; }\n  p.green-cell {\n    background-color: #6FB524; }\n  p.blue-cell {\n    background-color: #04e2ef; }\n  p.yellow-cell {\n    background-color: #efb404; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/corp-orders/corp-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorpOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CorpOrdersComponent = (function () {
    function CorpOrdersComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.getCorpOrders()
            .subscribe(function (orders) { return _this.corpOrders = orders; });
    }
    CorpOrdersComponent.prototype.ngOnInit = function () {
    };
    return CorpOrdersComponent;
}());
CorpOrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-corp-orders',
        template: __webpack_require__("../../../../../src/app/user/components/corp-orders/corp-orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/corp-orders/corp-orders.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], CorpOrdersComponent);

var _a;
//# sourceMappingURL=corp-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-user-list/corp-user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n    <tr class=\"header-row\">\n        <th>ID</th>\n        <th>Email</th>\n        <th>Doctor</th>\n        <th>License</th>\n        <th style=\"width: 1%;\">Status</th>\n        <th style=\"width: 1%;\">Action</th>\n    </tr>\n    <tr *ngFor=\"let user of corpUsers; let i = index\">\n        <td>{{ user.id }}</td>\n        <td>{{ user.email }}</td>\n        <td>{{ user.doctor }}</td>\n        <td>{{ user.lincense }}</td>\n        <td>{{ user.status }}</td>\n        <td style=\"display: inline-flex\" *ngIf=\"isUpdated(user)\">\n            <button class=\"btn btn-success btn-activate\" *ngIf=\"user.status == 'deactivated'\" (click)=\"activate(user.id, 'activated')\">Activate</button>\n            <button class=\"btn btn-danger btn-deactivate\" *ngIf=\"user.status == 'activated'\" (click)=\"activate(user.id, 'deactivated')\">Deactivate</button>\n            <a [routerLink]=\"[user.id]\" class=\"btn btn-danger\">edit</a>\n            <button class=\"btn btn-danger btn-failed\" (click)=\"remove(user)\">remove</button>\n        </td>\n    </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-user-list/corp-user-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  width: 100%; }\n  table .header-row {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    background-color: #42A948;\n    color: white; }\n    table .header-row:hover {\n      background-color: #42A948; }\n\ntable, th, td {\n  border: 1px solid #ddd;\n  border-collapse: collapse;\n  padding: 8px; }\n\ntable tr:nth-child(even) {\n  background-color: #f2f2f2; }\n\ntable tr:hover {\n  background-color: #ddd; }\n\ntable td:nth-child(5) {\n  text-align: center; }\n\n.btn-deactivate, .btn-failed {\n  background-color: #FF527B;\n  border-color: #d62929;\n  width: 90px; }\n  .btn-deactivate:hover, .btn-failed:hover {\n    background-color: #de4066; }\n\n.btn-activate {\n  width: 90px; }\n\n.btn {\n  margin: 0 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-user-list/corp-user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorpUserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CorpUserListComponent = (function () {
    function CorpUserListComponent(userService) {
        this.userService = userService;
    }
    CorpUserListComponent.prototype.ngOnInit = function () {
    };
    CorpUserListComponent.prototype.activate = function (id, status) {
        var _this = this;
        var param = {
            'corp_user': {
                'status': status
            }
        };
        this.userService.updateCorpUser(id, param)
            .subscribe(function (user) {
            _this.corpUsers = _this.corpUsers.map(function (user) {
                if (user.id == id) {
                    user.status = status;
                }
                return user;
            });
        });
    };
    CorpUserListComponent.prototype.isUpdated = function (user) {
        if (JSON.parse(localStorage.getItem('user')).id == user.id)
            return false;
        else
            return true;
    };
    CorpUserListComponent.prototype.remove = function (user) {
        var _this = this;
        var index = this.corpUsers.indexOf(user);
        console.log(index);
        this.userService.deleteCorpUser(user.id)
            .subscribe(function () {
            _this.corpUsers.splice(index, 1);
        });
    };
    return CorpUserListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CorpUserListComponent.prototype, "corpUsers", void 0);
CorpUserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-corp-user-list',
        template: __webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-list/corp-user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-list/corp-user-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], CorpUserListComponent);

var _a;
//# sourceMappingURL=corp-user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user-address/corp-user-address.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"updateSuccess\" class=\"success-msg\">\n  Successfully Updated!\n</div>\n<form [formGroup]=\"addressForm\" (ngSubmit)=\"update()\">\n  <div class=\"row\">\n    <div class=\"col-md-12\"> \n      <div formGroupName=\"bill_address_attributes\" class=\"well well-lg\">\n        <h4>Bill Address</h4>\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n\n            <!-- bill_address_attributes.firstname -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('bill_address_attributes.firstname')}\">\n              <label class=\"control-label required\">First Name:</label>\n              <input class=\"form-control required\" formControlName=\"firstname\">\n              <div *ngIf=\"hasError('bill_address_attributes.firstname')\">\n                <span *ngIf=\"getElementFromFG('bill_address_attributes.firstname', addressForm).errors.required\">\n                  First name is required.\n                </span>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"col-md-6\">\n\n            <!-- bill_address_attributes.lastname -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('bill_address_attributes.lastname')}\">\n              <label class=\"control-label required\">Last Name:</label>\n              <input class=\"form-control required\" formControlName=\"lastname\">\n              <div *ngIf=\"hasError('bill_address_attributes.lastname')\">\n                <span *ngIf=\"getElementFromFG('bill_address_attributes.lastname', addressForm).errors.required\">\n                  Last name is required.\n                </span>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <!-- bill_address_attributes.address1 -->\n        <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('bill_address_attributes.address1')}\">\n          <label class=\"control-label required\">Address1:</label>\n          <input class=\"form-control required\" formControlName=\"address1\">\n          <div *ngIf=\"hasError('bill_address_attributes.address1')\">\n            <span *ngIf=\"getElementFromFG('bill_address_attributes.address1', addressForm).errors.required\">\n              Last name is required.\n            </span>\n          </div>\n        </div>\n\n        <!-- bill_address_attributes.address2 -->\n        <div class=\"form-group\">\n          <label class=\"control-label\">Address2:</label>\n          <input class=\"form-control\" formControlName=\"address2\">\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col-md-6\">\n\n            <!-- bill_address_attributes.city -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('bill_address_attributes.city')}\">\n              <label class=\"control-label required\">City:</label>\n              <input class=\"form-control required\" formControlName=\"city\">\n              <div *ngIf=\"hasError('bill_address_attributes.city')\">\n                <span *ngIf=\"getElementFromFG('bill_address_attributes.city', addressForm).errors.required\">\n                  City is required.\n                </span>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"col-md-3\">\n            \n            <!-- bill_address_attributes.state_id -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('bill_address_attributes.state_id')}\">\n              <label class=\"control-label required\" >State:</label>\n              <select class=\"form-control required\" formControlName=\"state_id\">\n                <option value=\"\" selected=\"selected\"></option>\n                <option *ngFor=\"let state of statesForBill\" [value]=\"state.id\">{{ state.name }}</option>\n              </select>\n              <div *ngIf=\"hasError('bill_address_attributes.state_id')\">\n                <span *ngIf=\"getElementFromFG('bill_address_attributes.state_id', addressForm).errors.required\">\n                  State is required.\n                </span>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"col-md-3\">\n              \n            <!-- bill_address_attributes.country_id -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('bill_address_attributes.country_id')}\">\n              <label class=\"control-label required\" >Country:</label>\n              <select class=\"form-control required\" formControlName=\"country_id\" (change)=\"countryForBillChanged($event)\">\n                <option value=\"\" selected=\"selected\"></option>\n                <option *ngFor=\"let country of countries\" [value]=\"country.id\">{{ country.name }}</option>\n              </select>\n              <div *ngIf=\"hasError('bill_address_attributes.country_id')\">\n                <span *ngIf=\"getElementFromFG('bill_address_attributes.country_id', addressForm).errors.required\">\n                  County is required.\n                </span>\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n          \n          <div class=\"col-md-6\">\n\n            <!-- bill_address_attributes.phone -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('bill_address_attributes.phone')}\">\n              <label class=\"control-label required\">Phone Number:</label>\n              <input class=\"form-control required\" formControlName=\"phone\">\n              <div *ngIf=\"hasError('bill_address_attributes.phone')\">\n                <span *ngIf=\"getElementFromFG('bill_address_attributes.phone', addressForm).errors.required\">\n                  Phone Number is required.\n                </span>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"col-md-6\">\n\n            <!-- bill_address_attributes.zipcode -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('bill_address_attributes.zipcode')}\">\n              <label class=\"control-label required\">Zip Code:</label>\n              <input class=\"form-control required\" formControlName=\"zipcode\">\n              <div *ngIf=\"hasError('bill_address_attributes.zipcode')\">\n                <span *ngIf=\"getElementFromFG('bill_address_attributes.zipcode', addressForm).errors.required\">\n                  Zip Code is required.\n                </span>\n                <span *ngIf=\"getElementFromFG('bill_address_attributes.zipcode', addressForm).errors.pattern\">\n                  Zip Code must be exactly 5 numbers.\n                </span>\n              </div>\n            </div>\n\n          </div>\n          \n        </div>\n        \n\n\n\n      </div>\n    </div>\n\n    <div class=\"col-md-12\"> \n      <div formGroupName=\"ship_address_attributes\" class=\"well well-lg\">\n        <h4>Ship Address</h4>\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n\n            <!-- ship_address_attributes.firstname -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('ship_address_attributes.firstname')}\">\n              <label class=\"control-label required\">First Name:</label>\n              <input class=\"form-control required\" formControlName=\"firstname\">\n              <div *ngIf=\"hasError('ship_address_attributes.firstname')\">\n                <span *ngIf=\"getElementFromFG('ship_address_attributes.firstname', addressForm).errors.required\">\n                  First name is required.\n                </span>\n              </div>\n            </div>\n  \n          </div>\n  \n          <div class=\"col-md-6\">\n    \n            <!-- ship_address_attributes.lastname -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('ship_address_attributes.lastname')}\">\n              <label class=\"control-label required\">Last Name:</label>\n              <input class=\"form-control required\" formControlName=\"lastname\">\n              <div *ngIf=\"hasError('ship_address_attributes.lastname')\">\n                <span *ngIf=\"getElementFromFG('ship_address_attributes.lastname', addressForm).errors.required\">\n                  Last name is required.\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- ship_address_attributes.address1 -->\n        <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('ship_address_attributes.address1')}\">\n          <label class=\"control-label required\">Address1:</label>\n          <input class=\"form-control required\" formControlName=\"address1\">\n          <div *ngIf=\"hasError('ship_address_attributes.address1')\">\n            <span *ngIf=\"getElementFromFG('ship_address_attributes.address1', addressForm).errors.required\">\n              Last name is required.\n            </span>\n          </div>\n        </div>\n\n        <!-- ship_address_attributes.address2 -->\n        <div class=\"form-group\">\n          <label class=\"control-label\">Address2:</label>\n          <input class=\"form-control\" formControlName=\"address2\">\n        </div>\n\n        <div class=\"row\">\n\n          <div class=\"col-md-6\">\n\n            <!-- ship_address_attributes.city -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('ship_address_attributes.city')}\">\n              <label class=\"control-label required\">City:</label>\n              <input class=\"form-control required\" formControlName=\"city\">\n              <div *ngIf=\"hasError('ship_address_attributes.city')\">\n                <span *ngIf=\"getElementFromFG('ship_address_attributes.city', addressForm).errors.required\">\n                  City is required.\n                </span>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"col-md-3\">\n            \n            <!-- ship_address_attributes.state_id -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('ship_address_attributes.state_id')}\">\n              <label class=\"control-label required\" >State:</label>\n              <select class=\"form-control required\" formControlName=\"state_id\">\n                <option value=\"\" selected=\"selected\"></option>\n                <option *ngFor=\"let state of statesForShip\" [value]=\"state.id\">{{ state.name }}</option>\n              </select>\n              <div *ngIf=\"hasError('ship_address_attributes.state_id')\">\n                <span *ngIf=\"getElementFromFG('ship_address_attributes.state_id', addressForm).errors.required\">\n                  State is required.\n                </span>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"col-md-3\">\n              \n            <!-- ship_address_attributes.country_id -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('ship_address_attributes.country_id')}\">\n              <label class=\"control-label required\" >Country:</label>\n              <select class=\"form-control required\" formControlName=\"country_id\" (change)=\"countryForShipChanged($event)\">\n                <option value=\"\" selected=\"selected\"></option>\n                <option *ngFor=\"let country of countries\" [value]=\"country.id\">{{ country.name }}</option>\n              </select>\n              <div *ngIf=\"hasError('ship_address_attributes.country_id')\">\n                <span *ngIf=\"getElementFromFG('ship_address_attributes.country_id', addressForm).errors.required\">\n                  County is required.\n                </span>\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n          \n          <div class=\"col-md-6\">\n\n            <!-- ship_address_attributes.phone -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('ship_address_attributes.phone')}\">\n              <label class=\"control-label required\">Phone Number:</label>\n              <input class=\"form-control required\" formControlName=\"phone\">\n              <div *ngIf=\"hasError('ship_address_attributes.phone')\">\n                <span *ngIf=\"getElementFromFG('ship_address_attributes.phone', addressForm).errors.required\">\n                  Phone Number is required.\n                </span>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"col-md-6\">\n\n            <!-- ship_address_attributes.zipcode -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('ship_address_attributes.zipcode')}\">\n              <label class=\"control-label required\">Zip Code:</label>\n              <input class=\"form-control required\" formControlName=\"zipcode\">\n              <div *ngIf=\"hasError('ship_address_attributes.zipcode')\">\n                <span *ngIf=\"getElementFromFG('ship_address_attributes.zipcode', addressForm).errors.required\">\n                  Zip Code is required.\n                </span>\n                <span *ngIf=\"getElementFromFG('ship_address_attributes.zipcode', addressForm).errors.pattern\">\n                  Zip Code must be exactly 5 numbers.\n                </span>\n              </div>\n            </div>\n\n          </div>\n          \n        </div>\n        \n      </div>\n    </div>\n  </div>\n\n  <div style=\"margin-bottom: 1em\">\n      <button type=\"submit\"\n              class=\"btn btn-lg btn-success\"\n              [disabled]=\"addressForm.pristine || addressForm.invalid\" >Update</button> &nbsp;\n      <button type=\"submit\"\n              class=\"btn btn-lg btn-success\"\n              [disabled]=\"addressForm.pristine || addressForm.invalid\" >Reset</button>\n  </div>\n    \n</form>"

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user-address/corp-user-address.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Show asterisk for required fields */\n.control-label.required:after {\n  color: #FF527B;\n  content: \"*\";\n  margin-left: 5px;\n  top: 7px; }\n\n/* Green & Red borders for validity of required fields */\n.ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #FF527B;\n  /* red */ }\n\nspan {\n  color: #FF527B; }\n\n.success-msg {\n  color: #fff;\n  background: #17d276;\n  padding: 10px;\n  font-size: 18px;\n  width: 70%;\n  border-radius: 5px;\n  border: 1px solid;\n  text-align: center;\n  margin-bottom: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user-address/corp-user-address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorpUserAddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_address_service__ = __webpack_require__("../../../../../src/app/core/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_selector__ = __webpack_require__("../../../../../src/app/user/reducers/selector.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CorpUserAddressComponent = (function () {
    function CorpUserAddressComponent(userService, addrService, route, router, formBuilder, store) {
        this.userService = userService;
        this.addrService = addrService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.store = store;
        this.statesForBill = [];
        this.statesForShip = [];
    }
    CorpUserAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSuccess = false;
        this.store.select(__WEBPACK_IMPORTED_MODULE_6__reducers_selector__["a" /* getCountries */])
            .subscribe(function (countries) {
            console.log(countries, typeof (countries));
            _this.countries = countries;
        });
        this.routeSub$ = this.route.params.subscribe(function (params) {
            _this.userId = params['id'];
            _this.userSub$ =
                _this.userService
                    .getCorpUser(_this.userId)
                    .subscribe(function (corpUser) {
                    _this.corpUser = corpUser;
                    _this.initialForm();
                    if (_this.corpUser.bill_address)
                        _this.getState(_this.corpUser.bill_address['country_id'], "bill");
                    if (_this.corpUser.ship_address)
                        _this.getState(_this.corpUser.ship_address['country_id'], "ship");
                });
        });
        this.addressForm = this.formBuilder.group({
            bill_address_attributes: this.formBuilder.group({
                firstname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                lastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                address1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                address2: '',
                city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                zipcode: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern(/^\d{5}$/i)]],
                phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                state_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                country_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
            }),
            ship_address_attributes: this.formBuilder.group({
                firstname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                lastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                address1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                address2: '',
                city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                zipcode: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern(/^\d{5}$/i)]],
                phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                state_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
                country_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
            })
        });
    };
    CorpUserAddressComponent.prototype.initialForm = function () {
        this.addressForm.setValue({
            bill_address_attributes: this.getInitAddress(this.corpUser.bill_address),
            ship_address_attributes: this.getInitAddress(this.corpUser.ship_address)
        });
    };
    CorpUserAddressComponent.prototype.getInitAddress = function (address) {
        if (address)
            return {
                firstname: address['firstname'],
                lastname: address['lastname'],
                address1: address['address1'],
                address2: address['address2'],
                city: address['city'],
                zipcode: address['zipcode'],
                phone: address['phone'],
                state_id: address['state_id'],
                country_id: address['country_id']
            };
        else
            return {
                firstname: '',
                lastname: '',
                address1: '',
                address2: '',
                city: '',
                zipcode: '',
                phone: '',
                state_id: '',
                country_id: ''
            };
    };
    CorpUserAddressComponent.prototype.update = function () {
        var _this = this;
        var formValue = this.addressForm.value;
        var keys = Object.keys(formValue);
        var updatedValue = {
            "corp_user": {
                bill_address_attributes: {
                    firstname: formValue.bill_address_attributes.firstname,
                    lastname: formValue.bill_address_attributes.lastname,
                    address1: formValue.bill_address_attributes.address1,
                    address2: formValue.bill_address_attributes.address2,
                    city: formValue.bill_address_attributes.city,
                    zipcode: formValue.bill_address_attributes.zipcode,
                    phone: formValue.bill_address_attributes.phone,
                    state_id: formValue.bill_address_attributes.state_id,
                    country_id: formValue.bill_address_attributes.country_id
                },
                ship_address_attributes: {
                    firstname: formValue.ship_address_attributes.firstname,
                    lastname: formValue.ship_address_attributes.lastname,
                    address1: formValue.ship_address_attributes.address1,
                    address2: formValue.ship_address_attributes.address2,
                    city: formValue.ship_address_attributes.city,
                    zipcode: formValue.ship_address_attributes.zipcode,
                    phone: formValue.ship_address_attributes.phone,
                    state_id: formValue.ship_address_attributes.state_id,
                    country_id: formValue.ship_address_attributes.country_id
                }
            }
        };
        this.userService.updateCorpUser(this.userId, updatedValue)
            .subscribe(function (data) {
            var errors = data.errors;
            if (errors) {
                //
                console.log("errors", errors);
            }
            else {
                console.log("============", data);
                _this.updateSuccess = true;
            }
        });
        console.log(updatedValue);
    };
    /**
   * Return true if an element has failed validation.
   * Utilizes getElementFromFG() to obtain elements from nested FormGroups.
   */
    CorpUserAddressComponent.prototype.hasError = function (input) {
        var target = this.getElementFromFG(input, this.addressForm);
        return target.invalid &&
            (target.dirty ||
                target.touched);
    };
    /**
     * Retrieve an element from a FormGroup (nested or non-nested).
     * Example: to retrieve centerAppForm.address.address1, do:
     * getElementFromNestedFormGroup('address.address1', this.centerAppForm)
     */
    CorpUserAddressComponent.prototype.getElementFromFG = function (input, target) {
        return input.split('.').reduce(function (obj, key) {
            return obj.get(key);
        }, target);
    };
    CorpUserAddressComponent.prototype.countryForBillChanged = function (event) {
        var selectedCountryId = event.target.value;
        this.getState(selectedCountryId, "bill");
        // this.addressForm.controls['bill_address_attributes']['state_id'].setValue();
    };
    CorpUserAddressComponent.prototype.countryForShipChanged = function (event) {
        var selectedCountryId = event.target.value;
        this.getState(selectedCountryId, "ship");
        // this.addressForm.controls['bill_address_attributes']['state_id'].setValue();
    };
    CorpUserAddressComponent.prototype.getState = function (id, type) {
        var countries = this.countries
            .filter(function (country) { return country.id == id; });
        if (type == "bill")
            this.statesForBill = countries[0].states;
        else
            this.statesForShip = countries[0].states;
    };
    CorpUserAddressComponent.prototype.pushErrorFor = function (ctrl_name, msg) {
        this.addressForm.controls[ctrl_name].setErrors({ 'msg': msg });
    };
    return CorpUserAddressComponent;
}());
CorpUserAddressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-corp-user-address',
        template: __webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user-address/corp-user-address.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user-address/corp-user-address.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_services_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_services_address_service__["a" /* AddressService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["f" /* Store */]) === "function" && _f || Object])
], CorpUserAddressComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=corp-user-address.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"action\">\n  <div *ngIf=\"updateSuccess\" class=\"success-msg\">\n    Successfully Updated!\n  </div>\n  <a class=\"btn btn-success\" [routerLink]=\"['address']\">\n    Change Address\n  </a>\n</div>\n\n<div class=\"row\">\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"update()\">  <!-- ?-->\n    \n    <div class=\"col-md-12\">\n\n      <!-- email -->\n      <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('email')}\">\n        <label class=\"control-label required\">User Email:</label>\n        <input class=\"form-control required\" formControlName=\"email\">\n        <div *ngIf=\"hasError('email')\">\n          <span *ngIf=\"getElementFromFG('email', userForm).errors.required\">\n            Email is required\n          </span>\n        </div>\n      </div>\n\n    </div>\n    \n\n    <div class=\"col-md-6\">\n      \n      <!-- doctor -->\n      <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('doctor')}\">\n        <label class=\"control-label required\">Doctor:</label>\n        <input class=\"form-control required\" formControlName=\"doctor\">\n        <div *ngIf=\"hasError('doctor')\">\n          <span *ngIf=\"getElementFromFG('doctor', userForm).errors.required\">\n            Doctor name is required\n          </span>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-md-6\">\n\n      <!-- license -->\n      <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('license')}\">\n        <label class=\"control-label required\">License:</label>\n        <input class=\"form-control required\" formControlName=\"license\">\n        <div *ngIf=\"hasError('license')\">\n          <span *ngIf=\"getElementFromFG('license', userForm).errors.required\">\n            Doctor license is required\n          </span>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-md-6\">\n      \n      <!-- Password -->\n      <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('password')}\">\n        <label class=\"control-label required\">Password:</label>\n        <input type=\"password\" class=\"form-control required\" formControlName=\"password\">\n        <div *ngIf=\"hasError('password')\">\n          <span *ngIf=\"getElementFromFG('password', userForm).errors.required\">\n            Password is required\n          </span>\n          <span *ngIf=\"getElementFromFG('password', userForm).errors.minlength\">\n            Password must be more than 6 letters.\n          </span>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-md-6\">\n      \n      <!-- Password Confirmation-->\n      <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('password_confirmation')}\">\n        <label class=\"control-label required\">Password Confirm:</label>\n        <input type=\"password\" class=\"form-control required\" formControlName=\"password_confirmation\">\n        <div *ngIf=\"hasError('password_confirmation')\">\n          <span *ngIf=\"getElementFromFG('password_confirmation', userForm).errors.required\">\n            Password confirmation is required\n          </span>\n          <span *ngIf=\"getElementFromFG('password_confirmation', userForm).errors.msg\">\n            Password Conirmation {{getElementFromFG('password_confirmation', userForm).errors.msg}}\n          </span>\n        </div>\n      </div>\n\n    </div>\n\n    <br/>\n    <div style=\"margin-top: 20px; float: right;\">\n        <button type=\"submit\"\n                class=\"btn btn-lg btn-success\"\n                [disabled]=\"userForm.pristine || userForm.invalid\" >Update</button> &nbsp;\n        <button type=\"submit\"\n                class=\"btn btn-lg btn-success\"\n                [disabled]=\"userForm.pristine || userForm.invalid\" >Reset</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Show asterisk for required fields */\n.control-label.required:after {\n  color: #FF527B;\n  content: \"*\";\n  margin-left: 5px;\n  top: 7px; }\n\n/* Green & Red borders for validity of required fields */\n.ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #FF527B;\n  /* red */ }\n\nspan {\n  color: #FF527B; }\n\n.action {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 30px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .action a {\n    height: 35px;\n    margin-left: auto; }\n\n.success-msg {\n  color: #fff;\n  background: #17d276;\n  padding: 10px;\n  font-size: 18px;\n  width: 70%;\n  border-radius: 5px;\n  border: 1px solid;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorpUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CorpUserComponent = (function () {
    function CorpUserComponent(userService, route, router, formBuilder, store) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.store = store;
    }
    CorpUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSuccess = false;
        this.routeSub$ = this.route.params.subscribe(function (params) {
            _this.userId = params['id'];
            _this.userSub$ =
                _this.userService
                    .getCorpUser(_this.userId)
                    .subscribe(function (corpUser) {
                    _this.corpUser = corpUser;
                    _this.initialForm();
                });
        });
        this.userForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            doctor: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            license: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(6)]],
            password_confirmation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    CorpUserComponent.prototype.initialForm = function () {
        this.userForm.setValue({
            email: this.corpUser.email,
            doctor: this.corpUser.doctor,
            license: this.corpUser.license,
            password: '',
            password_confirmation: ''
        });
    };
    CorpUserComponent.prototype.update = function () {
        var _this = this;
        var formValue = this.userForm.value;
        var keys = Object.keys(formValue);
        var updatedValue = {
            "corp_user": {
                email: formValue.email,
                doctor: formValue.doctor,
                license: formValue.license,
                password: formValue.password,
                password_confirmation: formValue.password_confirmation
            }
        };
        this.userService.updateCorpUser(this.userId, updatedValue)
            .subscribe(function (data) {
            var errors = data.errors;
            if (errors) {
                keys.forEach(function (val) {
                    if (errors[val])
                        _this.pushErrorFor(val, errors[val][0]);
                });
            }
            else {
                _this.updateSuccess = true;
            }
        });
        console.log(updatedValue);
    };
    CorpUserComponent.prototype.pushErrorFor = function (ctrl_name, msg) {
        this.userForm.controls[ctrl_name].setErrors({ 'msg': msg });
    };
    /**
   * Return true if an element has failed validation.
   * Utilizes getElementFromFG() to obtain elements from nested FormGroups.
   */
    CorpUserComponent.prototype.hasError = function (input) {
        var target = this.getElementFromFG(input, this.userForm);
        return target.invalid &&
            (target.dirty ||
                target.touched);
    };
    /**
     * Retrieve an element from a FormGroup (nested or non-nested).
     * Example: to retrieve centerAppForm.address.address1, do:
     * getElementFromNestedFormGroup('address.address1', this.centerAppForm)
     */
    CorpUserComponent.prototype.getElementFromFG = function (input, target) {
        return input.split('.').reduce(function (obj, key) {
            return obj.get(key);
        }, target);
    };
    return CorpUserComponent;
}());
CorpUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-corp-user',
        template: __webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["f" /* Store */]) === "function" && _e || Object])
], CorpUserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=corp-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-user-sign-up/corp-user-sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"createSuccess\" class=\"success-msg\">\n  \"{{userForm.value['email']}}\" is successfully created!\n</div>\n\n<div>\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"createCorpUser()\">  <!-- ?-->\n    \n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        \n        <!-- email -->\n        <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('email')}\">\n          <label class=\"control-label required\">User Email:</label>\n          <input class=\"form-control required\" formControlName=\"email\">\n          <div *ngIf=\"hasError('email')\">\n            <span *ngIf=\"getElementFromFG('email', userForm).errors.required\">\n              Email is required\n            </span>\n            <span *ngIf=\"getElementFromFG('email', userForm).errors.msg\">\n              Email {{getElementFromFG('email', userForm).errors.msg}}\n            </span>\n          </div>\n        </div>\n  \n      </div>      \n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        \n        <!-- doctor -->\n        <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('doctor')}\">\n          <label class=\"control-label required\">Doctor:</label>\n          <input class=\"form-control required\" formControlName=\"doctor\">\n          <div *ngIf=\"hasError('doctor')\">\n            <span *ngIf=\"getElementFromFG('doctor', userForm).errors.required\">\n              Doctor name is required\n            </span>\n          </div>\n        </div>\n  \n      </div>\n\n      <div class=\"col-md-6\">\n        \n        <!-- license -->\n        <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('license')}\">\n          <label class=\"control-label required\">License:</label>\n          <input class=\"form-control required\" formControlName=\"license\">\n          <div *ngIf=\"hasError('license')\">\n            <span *ngIf=\"getElementFromFG('license', userForm).errors.required\">\n              Doctor license is required\n            </span>\n          </div>\n        </div>\n  \n      </div>      \n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        \n        <!-- Password -->\n        <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('password')}\">\n          <label class=\"control-label required\">Password:</label>\n          <input type=\"password\" class=\"form-control required\" formControlName=\"password\">\n          <div *ngIf=\"hasError('password')\">\n            <span *ngIf=\"getElementFromFG('password', userForm).errors.required\">\n              Password is required\n            </span>\n            <span *ngIf=\"getElementFromFG('password', userForm).errors.minlength\">\n              Password must be more than 6 letters.\n            </span>\n          </div>\n        </div>\n  \n      </div>\n  \n      <div class=\"col-md-6\">\n        \n        <!-- Password Confirmation-->\n        <div class=\"form-group\" [ngClass]=\"{'has-error': hasError('password_confirmation')}\">\n          <label class=\"control-label required\">Password Confirm:</label>\n          <input type=\"password\" class=\"form-control required\" formControlName=\"password_confirmation\">\n          <div *ngIf=\"hasError('password_confirmation')\">\n            <span *ngIf=\"getElementFromFG('password_confirmation', userForm).errors.required\">\n              Password confirmation is required\n            </span>\n            <span *ngIf=\"getElementFromFG('password_confirmation', userForm).errors.msg\">\n              Password {{getElementFromFG('password_confirmation', userForm).errors.msg}}\n            </span>\n          </div>\n        </div>\n  \n      </div>\n    </div>\n\n    <div style=\"margin-top: 20px; float: right\">\n      <button type=\"submit\"\n              class=\"btn btn-success\"\n              [disabled]=\"userForm.pristine || userForm.invalid\" >Create</button>\n    </div>\n    \n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-user-sign-up/corp-user-sign-up.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Show asterisk for required fields */\n.control-label.required:after {\n  color: #FF527B;\n  content: \"*\";\n  margin-left: 5px;\n  top: 7px; }\n\n/* Green & Red borders for validity of required fields */\n.ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #FF527B;\n  /* red */ }\n\nspan {\n  color: #FF527B; }\n\n.success-msg {\n  color: #fff;\n  background: #17d276;\n  padding: 10px;\n  font-size: 18px;\n  width: 70%;\n  border-radius: 5px;\n  border: 1px solid;\n  text-align: center;\n  margin-bottom: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-user-sign-up/corp-user-sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorpUserSignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CorpUserSignUpComponent = (function () {
    function CorpUserSignUpComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    CorpUserSignUpComponent.prototype.ngOnInit = function () {
        this.createSuccess = false;
        this.userForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            doctor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            license: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6)]],
            password_confirmation: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    CorpUserSignUpComponent.prototype.createCorpUser = function () {
        var _this = this;
        var formValue = this.userForm.value;
        var keys = Object.keys(formValue);
        var corpUser = {
            email: formValue.email,
            doctor: formValue.doctor,
            license: formValue.license,
            password: formValue.password,
            password_confirmation: formValue.password_confirmation
        };
        if (!this.createSuccess) {
            this.userService.createCorpUser({ 'corp_user': corpUser })
                .subscribe(function (data) {
                var errors = data.errors;
                if (errors) {
                    keys.forEach(function (val) {
                        if (errors[val])
                            _this.pushErrorFor(val, errors[val][0]);
                    });
                }
                else {
                    _this.createSuccess = true;
                }
            });
        }
    };
    CorpUserSignUpComponent.prototype.pushErrorFor = function (ctrl_name, msg) {
        this.userForm.controls[ctrl_name].setErrors({ 'msg': msg });
    };
    /**
     * Return true if an element has failed validation.
     * Utilizes getElementFromFG() to obtain elements from nested FormGroups.
     */
    CorpUserSignUpComponent.prototype.hasError = function (input) {
        var target = this.getElementFromFG(input, this.userForm);
        return target.invalid &&
            (target.dirty ||
                target.touched);
    };
    /**
     * Retrieve an element from a FormGroup (nested or non-nested).
     * Example: to retrieve centerAppForm.address.address1, do:
     * getElementFromNestedFormGroup('address.address1', this.centerAppForm)
     */
    CorpUserSignUpComponent.prototype.getElementFromFG = function (input, target) {
        return input.split('.').reduce(function (obj, key) {
            return obj.get(key);
        }, target);
    };
    return CorpUserSignUpComponent;
}());
CorpUserSignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-corp-user-sign-up',
        template: __webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-sign-up/corp-user-sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-sign-up/corp-user-sign-up.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], CorpUserSignUpComponent);

var _a, _b, _c;
//# sourceMappingURL=corp-user-sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-users.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['create']\" class=\"btn btn-success btn-corp-create\">Create New Corporate User</a>\n\n<app-corp-user-list [corpUsers]=\"corpUsers\"></app-corp-user-list>"

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-corp-create {\n  float: right;\n  margin-bottom: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/corp-users/corp-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorpUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CorpUsersComponent = (function () {
    function CorpUsersComponent(userService) {
        this.userService = userService;
    }
    CorpUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSub$ = this.userService.getCorpUsers()
            .subscribe(function (users) {
            console.log(users);
            _this.corpUsers = users;
        });
    };
    CorpUsersComponent.prototype.ngOnDestroy = function () {
        this.userSub$.unsubscribe();
    };
    return CorpUsersComponent;
}());
CorpUsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-corp-users',
        template: __webpack_require__("../../../../../src/app/user/components/corp-users/corp-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/corp-users/corp-users.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], CorpUsersComponent);

var _a;
//# sourceMappingURL=corp-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/orders/order-ajust/order-ajust.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(orders$ | async)?.length; else elseBlock\">\n  <div *ngFor=\"let order of (orders$ | async)\">\n    <app-order-list-item [order]=\"order\" *ngIf=\"order.original_line_item == origin_item\"></app-order-list-item>\n  </div>  \n</div>    \n<ng-template #elseBlock>\n  <div class=\"cart-empty\">\n    <div class=\"empty-cart-icon\"></div>\n    <div class=\"empty-cart-message\">You have'nt ordered anything yet.</div>\n    <a class=\"empty-wishlist-link\" routerLink=\"/home\">Start Shopping</a>\n  </div>\n</ng-template>  "

/***/ }),

/***/ "../../../../../src/app/user/components/orders/order-ajust/order-ajust.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cart-empty {\n  min-height: 500px;\n  text-align: center; }\n  .cart-empty .empty-cart-icon {\n    height: 85px;\n    width: 85px;\n    margin: 0 auto;\n    background-image: url(/assets/shoppingbag.png); }\n  .cart-empty .empty-cart-message {\n    font-size: 20px;\n    color: #535766;\n    font-weight: 600;\n    font-family: \"Whitney-semi-bold\";\n    line-height: 120px;\n    margin: 15px 0; }\n  .cart-empty .empty-wishlist-link {\n    color: #526cd0;\n    font-size: 16px;\n    font-weight: 500; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/orders/order-ajust/order-ajust.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderAjustComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_selector__ = __webpack_require__("../../../../../src/app/user/reducers/selector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderAjustComponent = (function () {
    function OrderAjustComponent(store, route, router) {
        this.store = store;
        this.route = route;
        this.router = router;
        this.orders$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers_selector__["c" /* getUserOrders */]);
    }
    OrderAjustComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscription$ = this.route.params.subscribe(function (params) {
            _this.origin_item = params['number'];
        });
    };
    return OrderAjustComponent;
}());
OrderAjustComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-ajust',
        template: __webpack_require__("../../../../../src/app/user/components/orders/order-ajust/order-ajust.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/orders/order-ajust/order-ajust.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], OrderAjustComponent);

var _a, _b, _c;
//# sourceMappingURL=order-ajust.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/orders/order-detail/order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"order\">\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n            <div class=\"row\">\r\n                <div class=\"active col-md-6\">\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-md-4\">\r\n                            <small>SHIPMENT</small>\r\n                            <h5>\r\n                                <i class=\"fa fa-{{order.currency | lowercase}}\" aria-hidden=\"true\"></i> {{order.total}}\r\n                            </h5>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-4\">\r\n                            <small>STATUS</small>\r\n                            <h5 class=\"status\">\r\n                                {{order.shipment_state | uppercase}}\r\n                            </h5>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-4\">\r\n                            <small>ITEMS</small>\r\n                            <h5>\r\n                                {{order.line_items.length}}\r\n                            </h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <hr>\r\n            <div class='row' *ngFor=\"let line_item of order.line_items\">\r\n                <br>\r\n                <div class=\"col-md-2\">\r\n                    <img class=\"line_item_image\" [src]=\"getProductImageUrl(line_item)\" alt=\"Line Item\">\r\n                </div>\r\n\r\n                <div class=\"col-md-3\">\r\n                    <h5 class=\"ptitle\">\r\n                        <a [routerLink]=\"['/product', line_item.product_slug]\">\r\n                            <span class=\"text-uppercase text-primary\">{{line_item.product_name}}</span>\r\n                        </a>\r\n                    </h5>\r\n                    <h6 class=\"\" *ngIf=\"line_item.adjustment_slug\">\r\n                        <a (click)=\"createAdjOrder(line_item)\">\r\n                            <span style=\"cursor: pointer\">Request Adjustment</span>\r\n                        </a>\r\n                    </h6>\r\n                </div>\r\n\r\n                <div class=\"col-md-2\">\r\n                    <h5 class=\"strong\">\r\n                        <i class=\"fa fa-{{order.currency | lowercase}}\" aria-hidden=\"true\"></i> {{line_item.total}}\r\n                    </h5>\r\n                    <small>\r\n                        MRP: \r\n                        <i class=\"fa fa-{{order.currency | lowercase}}\" aria-hidden=\"true\"></i>\r\n                        {{line_item.total}}\r\n                    </small><br/>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <h5 class=\"strong\">\r\n                        {{line_item.number}}\r\n                    </h5>\r\n                </div>\r\n\r\n                <div class=\"col-md-3\">\r\n                    <h5 class=\"strong\">\r\n                        <div class=\"pull-right\">\r\n                            <a (click)=\"caseView(line_item.id)\" class=\"view-details-link strong\" style=\"cursor: pointer\">View Case</a>\r\n                        </div>\r\n                    </h5>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"divider\"></div>\r\n            <div *ngFor=\"let shipment of order.shipments\">\r\n                <app-ship-item [shipment]=\"shipment\" [lineItems]=\"getFocusedLineItems(shipment)\"></app-ship-item>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <br>\r\n    <!-- <h5>SHIPPING DETAILS</h5>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"row panel-body\">\r\n      <div class=\"col-md-12\">\r\n        <h5>Order No: {{order.number}}</h5>\r\n      </div>\r\n      \r\n      <div class=\"col-md-12\">\r\n        <address>\r\n          <strong>{{order.ship_address.full_name}}.</strong><br>\r\n          {{order.ship_address.address1}}<br>\r\n          {{order.ship_address.address2}}<br>\r\n          {{order.ship_address.city}}, {{order.ship_address.zipcode}}<br>\r\n          <abbr title=\"Phone\">P:</abbr> {{order.ship_address.phone}}\r\n        </address>\r\n      </div>\r\n\r\n      <dl class=\"col-md-12\">\r\n        <dt>\r\n          Total Amount:\r\n          <i class=\"fa fa-{{order.currency | lowercase}}\" aria-hidden=\"true\"></i>\r\n          {{order.total}}\r\n        </dt>\r\n        \r\n        <dd>\r\n          MRP: \r\n          <i class=\"fa fa-{{order.currency | lowercase}}\" aria-hidden=\"true\"></i>\r\n          {{order.item_total}}\r\n        </dd>\r\n\r\n        <dd>\r\n          Shipping: \r\n          <i class=\"fa fa-{{order.currency | lowercase}}\" aria-hidden=\"true\"></i>\r\n          {{order.ship_total}}\r\n        </dd>\r\n        \r\n        <dd>\r\n          Adjustment: \r\n          <i class=\"fa fa-{{order.currency | lowercase}}\" aria-hidden=\"true\"></i>\r\n          {{order.adjustment_total}}\r\n        </dd>\r\n      </dl>\r\n\r\n      <dl class=\"col-md-12\">\r\n        <dt>\r\n          Payment: {{order.payment_state | humanize | uppercase}}\r\n        </dt>\r\n      </dl>\r\n    </div>\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/components/orders/order-detail/order-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".status {\n  color: #20bd99; }\n\n.line_item_image {\n  border: 1px solid #eee; }\n\n.divider {\n  width: 100%;\n  border-top: 1px dashed #94969f;\n  height: 5px;\n  display: inline-block !important;\n  background: #fff;\n  color: #535766 !important;\n  padding: 0 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/orders/order-detail/order-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_selector__ = __webpack_require__("../../../../../src/app/user/reducers/selector.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderDetailComponent = (function () {
    function OrderDetailComponent(store, checkout, userService, route, router) {
        this.store = store;
        this.checkout = checkout;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.userOrder$ = this.store.select(__WEBPACK_IMPORTED_MODULE_6__reducers_selector__["c" /* getUserOrders */]);
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSubscription$ = this.route.params.subscribe(function (params) {
            _this.orderNumber = params['number'];
            _this.orderSubscription$ =
                _this.userService
                    .getOrderDetail(_this.orderNumber)
                    .subscribe(function (order) { return _this.order = order; });
        });
    };
    OrderDetailComponent.prototype.getProductImageUrl = function (line_item) {
        return __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API_ENDPOINT + line_item.image_url;
    };
    OrderDetailComponent.prototype.createAdjOrder = function (line_item) {
        this.router.navigate(['/product', line_item.adjustment_slug]);
        this.store.dispatch(this.checkout.updateAdjustmentOrder(line_item.id.toString()));
    };
    OrderDetailComponent.prototype.caseView = function (id) {
        this.router.navigate(['/user', 'orders', 'adjust', id]);
    };
    OrderDetailComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription$.unsubscribe();
        this.orderSubscription$.unsubscribe();
        if (this.childSubscription$)
            this.childSubscription$.unsubscribe();
    };
    OrderDetailComponent.prototype.getFocusedLineItems = function (shipment) {
        return this.order.line_items.filter(function (lineItem) {
            for (var i = 0; i < shipment.line_item_ids.length; i++) {
                if (lineItem.id == shipment.line_item_ids[i])
                    return lineItem;
            }
        });
    };
    return OrderDetailComponent;
}());
OrderDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-detail',
        template: __webpack_require__("../../../../../src/app/user/components/orders/order-detail/order-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/orders/order-detail/order-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__checkout_actions_checkout_actions__["a" /* CheckoutActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__checkout_actions_checkout_actions__["a" /* CheckoutActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _e || Object])
], OrderDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=order-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/orders/order-detail/ship-item/ship-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row ship-item\">\n  <div class=\"col-md-3 type-con\" *ngIf=\"shipment.is_consolidated\">\n      Consolidated Shipping\n  </div>\n\n  <div class=\"col-md-3 type-ind\" *ngIf=\"!shipment.is_consolidated\">\n      Individual Shipping\n  </div>\n\n  <div class=\"col-md-3 number\">\n      {{shipment.number}}\n  </div>\n\n  <div class=\"col-md-3 method\">\n      {{shipment.shipping_method}}\n  </div>\n\n  <div class=\"col-md-1 cost\">\n      ${{shipment.cost}}\n  </div>\n\n  <div class=\"col-md-2 btn-detail\">\n      <a (click)=\"clickDetail()\">Details</a>\n  </div>\n</div>\n<div *ngIf=\"isDetailed\">\n  <div class=\"row line-item\" *ngFor=\"let lineItem of lineItems\">\n      <div class=\"col-md-4\">\n      </div>\n      <div class=\"col-md-2 img\">\n          <img class=\"line-item-img\" [src]=\"getProductImageUrl(lineItem)\" alt=\"Line Item\">\n      </div>\n\n      <div class=\"col-md-3 title\">\n          <h5 class=\"ptitle\">\n            <span class=\"text-uppercase text-primary\">{{lineItem.product_name}}</span>\n          </h5>\n      </div>\n\n      <div class=\"col-md-2 total\">\n          <h5 class=\"strong\">\n            $ {{lineItem.total}}\n          </h5>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/components/orders/order-detail/ship-item/ship-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ship-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .ship-item .type-con {\n    background: #20bd99;\n    color: #fff;\n    text-align: center; }\n  .ship-item .type-ind {\n    background: #fff;\n    color: #20bd99;\n    border: 1px solid;\n    border-color: #20bd99;\n    text-align: center; }\n  .ship-item .number, .ship-item .cost {\n    color: #20bd99;\n    text-align: center; }\n  .ship-item .method {\n    font-weight: bold;\n    text-align: center; }\n  .ship-item .btn-detail {\n    text-align: right;\n    color: #1ba182; }\n\n.line-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .line-item .img {\n    text-align: center; }\n    .line-item .img .line-item-img {\n      border: 1px solid #eee;\n      width: 60px; }\n  .line-item .title, .line-item .total {\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/orders/order-detail/ship-item/ship-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models_shipment__ = __webpack_require__("../../../../../src/app/core/models/shipment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShipItemComponent = (function () {
    function ShipItemComponent() {
    }
    ShipItemComponent.prototype.ngOnInit = function () {
        this.isDetailed = false;
        console.log("line", this.lineItems);
    };
    ShipItemComponent.prototype.clickDetail = function () {
        this.isDetailed = !this.isDetailed;
    };
    ShipItemComponent.prototype.getProductImageUrl = function (line_item) {
        return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].API_ENDPOINT + line_item.image_url;
    };
    return ShipItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_models_shipment__["a" /* LightShipment */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_models_shipment__["a" /* LightShipment */]) === "function" && _a || Object)
], ShipItemComponent.prototype, "shipment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ShipItemComponent.prototype, "lineItems", void 0);
ShipItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ship-item',
        template: __webpack_require__("../../../../../src/app/user/components/orders/order-detail/ship-item/ship-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/orders/order-detail/ship-item/ship-item.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ShipItemComponent);

var _a;
//# sourceMappingURL=ship-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/orders/order-list-item/order-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n        <h5 class=\"active\">{{order.shipment_state | uppercase}}</h5>\r\n        <h5 class=\"active\" style=\"color: #20bd99\">Order Number: {{order.number}}</h5>\r\n        <small>\r\n      Placed on {{order.created_at | date:'fullDate'}} / \r\n      <i\r\n        class=\"fa fa-{{order.currency | lowercase}}\"\r\n        aria-hidden=\"true\">\r\n      </i>{{order.total}} / \r\n      {{order.line_items.length}} items /\r\n      Payment: {{order.payment_state | humanize | uppercase}}\r\n    </small>\r\n        <hr>\r\n        <h5 class=\"strong\">\r\n            Shipment: {{order.line_items.length}} items | {{order.shipment_state | uppercase}} on {{order.updated_at | date:'fullDate'}}\r\n            <div class=\"pull-right\">\r\n                <a [routerLink]=\"['/user','orders','detail', order.number]\" class=\"view-details-link strong\">View Details</a>\r\n            </div>\r\n        </h5>\r\n        <!-- <div *ngFor=\"let line_item of order.line_items\">\r\n      <img class=\"line_item_image\" [src]=\"getProductImageUrl(line_item.image_url)\" alt=\"Line Item\">\r\n    </div> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/components/orders/order-list-item/order-list-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line_item_image {\n  float: left; }\n\n.view-details-link {\n  color: #526cd0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/orders/order-list-item/order-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_order__ = __webpack_require__("../../../../../src/app/core/models/order.ts");
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



var OrderListItemComponent = (function () {
    function OrderListItemComponent() {
    }
    OrderListItemComponent.prototype.ngOnInit = function () {
        console.log("order", this.order);
    };
    OrderListItemComponent.prototype.getProductImageUrl = function (url) {
        return __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_ENDPOINT + url;
    };
    return OrderListItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_models_order__["a" /* LightOrder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_models_order__["a" /* LightOrder */]) === "function" && _a || Object)
], OrderListItemComponent.prototype, "order", void 0);
OrderListItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-list-item',
        template: __webpack_require__("../../../../../src/app/user/components/orders/order-list-item/order-list-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/orders/order-list-item/order-list-item.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], OrderListItemComponent);

var _a;
//# sourceMappingURL=order-list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(orders$ | async)?.length; else elseBlock\">\r\n  <div *ngFor=\"let order of (orders$ | async)\">\r\n    <app-order-list-item [order]=\"order\" *ngIf=\"!order.original_line_item\"></app-order-list-item>\r\n  </div>  \r\n</div>    \r\n<ng-template #elseBlock>\r\n  <div class=\"cart-empty\">\r\n    <div class=\"empty-cart-icon\"></div>\r\n    <div class=\"empty-cart-message\">You have'nt ordered anything yet.</div>\r\n    <a class=\"empty-wishlist-link\" routerLink=\"/home\">Start Shopping</a>\r\n  </div>\r\n</ng-template>  \r\n"

/***/ }),

/***/ "../../../../../src/app/user/components/orders/orders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cart-empty {\n  min-height: 500px;\n  text-align: center; }\n  .cart-empty .empty-cart-icon {\n    height: 85px;\n    width: 85px;\n    margin: 0 auto;\n    background-image: url(/assets/shoppingbag.png); }\n  .cart-empty .empty-cart-message {\n    font-size: 20px;\n    color: #535766;\n    font-weight: 600;\n    font-family: \"Whitney-semi-bold\";\n    line-height: 120px;\n    margin: 15px 0; }\n  .cart-empty .empty-wishlist-link {\n    color: #526cd0;\n    font-size: 16px;\n    font-weight: 500; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_selector__ = __webpack_require__("../../../../../src/app/user/reducers/selector.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersComponent = (function () {
    function OrdersComponent(store, userActions) {
        this.store = store;
        this.userActions = userActions;
        this.orders$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers_selector__["c" /* getUserOrders */]);
    }
    OrdersComponent.prototype.ngOnInit = function () {
        // this.store.dispatch(this.userActions.getUserOrders());
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__("../../../../../src/app/user/components/orders/orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/orders/orders.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__actions_user_actions__["a" /* UserActions */]) === "function" && _b || Object])
], OrdersComponent);

var _a, _b;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li>\r\n    <label class=\"title\">ID:</label>\r\n    {{(user$ | async).get('id')}}\r\n  </li>\r\n  <li>\r\n    <label class=\"title\">EMAIL:</label>\r\n    {{(user$ | async).get('email')}}\r\n  </li>\r\n  <li>\r\n    <label class=\"title\">DOCTOR NAME:</label>\r\n    {{(user$ | async).get('doctor')}}\r\n  </li>\r\n  <li>\r\n    <label class=\"title\">DOCTOR LICENSE:</label>\r\n    {{(user$ | async).get('license')}}\r\n  </li>\r\n</ul>\r\n<!-- <p>\r\n  {{user$ | async}}\r\n</p> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/user/components/overview/overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n  font-size: 17px;\n  list-style: none;\n  padding-top: 10px;\n  border-bottom-style: ridge; }\n  li .title {\n    font-size: 17px;\n    color: #535766;\n    font-weight: 600;\n    font-family: \"Whitney-semi-bold\";\n    padding-left: 20px;\n    margin-right: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_selector__ = __webpack_require__("../../../../../src/app/user/reducers/selector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OverviewComponent = (function () {
    function OverviewComponent(store, userActions) {
        this.store = store;
        this.userActions = userActions;
        this.user$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers_selector__["b" /* getUser */]);
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-overview',
        template: __webpack_require__("../../../../../src/app/user/components/overview/overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/overview/overview.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_user_actions__["a" /* UserActions */]) === "function" && _b || Object])
], OverviewComponent);

var _a, _b;
//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/returns/return-list-item/return-list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/returns/return-list-item/return-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  return-list-item works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/components/returns/return-list-item/return-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnListItemComponent; });
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

var ReturnListItemComponent = (function () {
    function ReturnListItemComponent() {
    }
    ReturnListItemComponent.prototype.ngOnInit = function () {
    };
    return ReturnListItemComponent;
}());
ReturnListItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-return-list-item',
        template: __webpack_require__("../../../../../src/app/user/components/returns/return-list-item/return-list-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/returns/return-list-item/return-list-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReturnListItemComponent);

//# sourceMappingURL=return-list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/components/returns/returns.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/components/returns/returns.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  returns works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/components/returns/returns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnsComponent; });
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

var ReturnsComponent = (function () {
    function ReturnsComponent() {
    }
    ReturnsComponent.prototype.ngOnInit = function () {
    };
    return ReturnsComponent;
}());
ReturnsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-returns',
        template: __webpack_require__("../../../../../src/app/user/components/returns/returns.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/components/returns/returns.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReturnsComponent);

//# sourceMappingURL=returns.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_overview_overview_component__ = __webpack_require__("../../../../../src/app/user/components/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_orders_orders_component__ = __webpack_require__("../../../../../src/app/user/components/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_orders_order_list_item_order_list_item_component__ = __webpack_require__("../../../../../src/app/user/components/orders/order-list-item/order-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_returns_returns_component__ = __webpack_require__("../../../../../src/app/user/components/returns/returns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_returns_return_list_item_return_list_item_component__ = __webpack_require__("../../../../../src/app/user/components/returns/return-list-item/return-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_addresses_bill_address_bill_address_component__ = __webpack_require__("../../../../../src/app/user/components/addresses/bill-address/bill-address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_addresses_ship_address_ship_address_component__ = __webpack_require__("../../../../../src/app/user/components/addresses/ship-address/ship-address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_routes__ = __webpack_require__("../../../../../src/app/user/user.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_addresses_addresses_component__ = __webpack_require__("../../../../../src/app/user/components/addresses/addresses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_orders_order_detail_order_detail_component__ = __webpack_require__("../../../../../src/app/user/components/orders/order-detail/order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_orders_order_ajust_order_ajust_component__ = __webpack_require__("../../../../../src/app/user/components/orders/order-ajust/order-ajust.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_orders_order_detail_ship_item_ship_item_component__ = __webpack_require__("../../../../../src/app/user/components/orders/order-detail/ship-item/ship-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_corp_users_corp_users_component__ = __webpack_require__("../../../../../src/app/user/components/corp-users/corp-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_corp_orders_corp_orders_component__ = __webpack_require__("../../../../../src/app/user/components/corp-orders/corp-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_corp_users_corp_user_list_corp_user_corp_user_component__ = __webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_corp_users_corp_user_list_corp_user_list_component__ = __webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-list/corp-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_corp_users_corp_user_sign_up_corp_user_sign_up_component__ = __webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-sign-up/corp-user-sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_corp_users_corp_user_list_corp_user_corp_user_address_corp_user_address_component__ = __webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user-address/corp-user-address.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// components








// services
// import { UserService } from './services/user.service';












var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            // components
            __WEBPACK_IMPORTED_MODULE_2__components_overview_overview_component__["a" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_orders_order_list_item_order_list_item_component__["a" /* OrderListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_returns_returns_component__["a" /* ReturnsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_returns_return_list_item_return_list_item_component__["a" /* ReturnListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_7__user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_addresses_addresses_component__["a" /* AddressesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_orders_order_detail_order_detail_component__["a" /* OrderDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_addresses_bill_address_bill_address_component__["a" /* BillAddressComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_addresses_ship_address_ship_address_component__["a" /* ShipAddressComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_orders_order_ajust_order_ajust_component__["a" /* OrderAjustComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_orders_order_detail_ship_item_ship_item_component__["a" /* ShipItemComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_corp_users_corp_users_component__["a" /* CorpUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_corp_orders_corp_orders_component__["a" /* CorpOrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_corp_users_corp_user_sign_up_corp_user_sign_up_component__["a" /* CorpUserSignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_corp_users_corp_user_list_corp_user_list_component__["a" /* CorpUserListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_corp_users_corp_user_list_corp_user_corp_user_component__["a" /* CorpUserComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_corp_users_corp_user_list_corp_user_corp_user_address_corp_user_address_component__["a" /* CorpUserAddressComponent */]
        ],
        exports: [],
        providers: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_10__user_routes__["a" /* UserRoutes */]),
            __WEBPACK_IMPORTED_MODULE_12__shared_index__["a" /* SharedModule */]
        ]
    })
], UserModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"col-md-12\">\r\n    <h4> My Account </h4>\r\n    <hr>\r\n  </div>\r\n\r\n  <div class=\"sidebar col-md-3\">\r\n    <p><a routerLink=\"/user/overview\" routerLinkActive=\"active\">Overview</a></p>\r\n    <hr>\r\n    <p><small>ORDERS</small></p>\r\n    <p><a routerLink=\"/user/orders\" routerLinkActive=\"active\">My Orders</a></p>\r\n    <hr>\r\n    <p><a routerLink=\"/user/addresses\" routerLinkActive=\"active\">My Address</a></p>\r\n    <hr>\r\n    <div *ngIf=\"(user$ | async)?.get('corp_admin')\">\r\n      <p><small>Corp Admin</small></p>\r\n      <p><a routerLink=\"/user/corpusers\" routerLinkActive=\"active\">Corp Users</a></p>\r\n      <p><a routerLink=\"/user/corporders\" routerLinkActive=\"active\">Corp Orders</a></p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-9\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p a {\n  color: #697071;\n  text-decoration: none; }\n  p a.active {\n    font-family: Whitney-semi-bold;\n    color: #20bd99;\n    font-weight: 500;\n    background-color: transparent; }\n\n.sidebar {\n  border-right: 1px solid #eaeaec; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_selector__ = __webpack_require__("../../../../../src/app/user/reducers/selector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(store, actions) {
        this.store = store;
        this.actions = actions;
        this.user$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers_selector__["b" /* getUser */]);
        this.store.dispatch(this.actions.getCountries());
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_user_actions__["a" /* UserActions */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_overview_overview_component__ = __webpack_require__("../../../../../src/app/user/components/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_orders_orders_component__ = __webpack_require__("../../../../../src/app/user/components/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_addresses_addresses_component__ = __webpack_require__("../../../../../src/app/user/components/addresses/addresses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_orders_order_detail_order_detail_component__ = __webpack_require__("../../../../../src/app/user/components/orders/order-detail/order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_orders_order_ajust_order_ajust_component__ = __webpack_require__("../../../../../src/app/user/components/orders/order-ajust/order-ajust.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_corp_users_corp_users_component__ = __webpack_require__("../../../../../src/app/user/components/corp-users/corp-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_corp_orders_corp_orders_component__ = __webpack_require__("../../../../../src/app/user/components/corp-orders/corp-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_corp_users_corp_user_list_corp_user_corp_user_component__ = __webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_corp_users_corp_user_sign_up_corp_user_sign_up_component__ = __webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-sign-up/corp-user-sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_corp_users_corp_user_list_corp_user_corp_user_address_corp_user_address_component__ = __webpack_require__("../../../../../src/app/user/components/corp-users/corp-user-list/corp-user/corp-user-address/corp-user-address.component.ts");











var UserRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* UserComponent */],
        children: [
            { path: '', redirectTo: 'overview' },
            { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_0__components_overview_overview_component__["a" /* OverviewComponent */] },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_2__components_orders_orders_component__["a" /* OrdersComponent */] },
            { path: 'orders/detail/:number', component: __WEBPACK_IMPORTED_MODULE_4__components_orders_order_detail_order_detail_component__["a" /* OrderDetailComponent */] },
            { path: 'orders/adjust/:number', component: __WEBPACK_IMPORTED_MODULE_5__components_orders_order_ajust_order_ajust_component__["a" /* OrderAjustComponent */] },
            { path: 'addresses', component: __WEBPACK_IMPORTED_MODULE_3__components_addresses_addresses_component__["a" /* AddressesComponent */] },
            { path: 'corpusers', component: __WEBPACK_IMPORTED_MODULE_6__components_corp_users_corp_users_component__["a" /* CorpUsersComponent */] },
            { path: 'corpusers/create', component: __WEBPACK_IMPORTED_MODULE_9__components_corp_users_corp_user_sign_up_corp_user_sign_up_component__["a" /* CorpUserSignUpComponent */] },
            { path: 'corpusers/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_corp_users_corp_user_list_corp_user_corp_user_component__["a" /* CorpUserComponent */] },
            { path: 'corpusers/:id/address', component: __WEBPACK_IMPORTED_MODULE_10__components_corp_users_corp_user_list_corp_user_corp_user_address_corp_user_address_component__["a" /* CorpUserAddressComponent */] },
            { path: 'corporders', component: __WEBPACK_IMPORTED_MODULE_7__components_corp_orders_corp_orders_component__["a" /* CorpOrdersComponent */] }
        ]
    },
];
//# sourceMappingURL=user.routes.js.map

/***/ })

});
//# sourceMappingURL=index.0.chunk.js.map