(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/charts/charts.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/charts/charts.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"countryCodes()\" class=\"container-fluid\">\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"/charts.component.scss\">\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let list of cardsList\">\r\n      <div class=\"col-sm-4\" style=\"padding-left:60px\">\r\n        <br>\r\n        <mat-card class=\"example-card\">\r\n          <mat-card-header>\r\n            <mat-card-title>{{list.apiName}}</mat-card-title>\r\n            <mat-card-subtitle>{{list.apiClassification}}</mat-card-subtitle>\r\n          </mat-card-header>\r\n          <mat-card-content style=\"overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;padding-left:\r\n          16px \" data-toggle=\"tooltip\" data-placement=\"top\" title={{list.apiDescription}} >\r\n            {{list.apiDescription}} </mat-card-content>\r\n          <img mat-card-image [src]=\"list.imageURL\">\r\n          <mat-card-actions style=\"padding-left:50px;padding-inline: 10px\">\r\n            <button  mat-button class=\".btn-block\" (click)=\"diaplayDescription(list.apiName, list.MuleApi)\">Details</button>\r\n          </mat-card-actions>\r\n          <div *ngIf=\"list.muleApi\" style=\"margin-left: 125px;\r\n          padding-bottom: 39px;\r\n          margin-top: -20px;\r\n      \">\r\n            <img mat-card-image [src]=\"fullImagePath\"></div>\r\n          <!-- <mat-card-footer  style='padding-left : 90px'>\r\n\r\n            \r\n          </mat-card-footer> -->\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!countryCodes()\" class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <div *ngFor=\"let list of cardsList\">\r\n        <div *ngIf=\"list.apiName == cardClicked\">\r\n          <div style=\"padding-left:250px\" [innerHTML]= \"list.apiLongDescription\">\r\n            \r\n          </div>\r\n          <a style=\"padding-left:350px\"  *ngIf=\"list.muleApi\" [href]=\"this.url\" target=\"_blank\">\r\n            <button  mat-raised-button >Go To API</button>\r\n          </a>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/layout/charts/charts.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/charts/charts.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-image {\n  width: 64px;\n  height: 47px;\n  margin: -5px 47px 34px 112px; }\n\n.mat-card-image:first-child {\n  margin-top: -16px; }\n\n.mat-card {\n  background: white;\n  display: block;\n  width: 315px;\n  height: 303px; }\n\n.mat-card-title {\n  font-size: 19px; }\n\nimg {\n  border-radius: 50%; }\n\n.mat-card-header .mat-card-subtitle {\n  margin-top: -8px;\n  font-size: smaller; }\n\n.mat-card-content {\n  box-sizing: border-box;\n  font-size: small; }\n\n.mat-card-actions {\n  margin-left: 52px; }\n\n.mat-card:hover {\n  box-shadow: -1px 10px 29px 0px rgba(0, 0, 0, 0.8); }\n\n.tooltiptext {\n  visibility: visible;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  opacity: 100;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1; }\n\n.tooltip:hover .tooltiptext {\n  visibility: visible; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NoYXJ0cy9DOlxcSGVhbHRoY2FyZUFwaVxcUGxhbiBEZXYgSHViL3NyY1xcYXBwXFxsYXlvdXRcXGNoYXJ0c1xcY2hhcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBRUEsWUFBVztFQUNYLGFBQVk7RUFDWiw2QkFBNEIsRUFDM0I7O0FBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7O0FBS0Q7RUFDRSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGFBQVk7RUFDWixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDQSxnQkFBZSxFQUNkOztBQUVEO0VBQ0EsbUJBQWtCLEVBRWpCOztBQU1EO0VBQ0UsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLHVCQUFzQjtFQUN0QixpQkFBZ0IsRUFDakI7O0FBV0Q7RUFDQSxrQkFBaUIsRUFDaEI7O0FBR0Q7RUFDQSxrREFBaUQsRUFDaEQ7O0FBRUE7RUFDQyxvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2QixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2hCLGFBQVk7RUFDViwwQkFBMEI7RUFDMUIsbUJBQWtCO0VBQ2xCLFdBQVUsRUFDWDs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jaGFydHMvY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIC5idG4tYmxvY2t7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjcyNTtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICB3aWR0aDogMzMlO1xyXG4vLyAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuLy8gICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuLy8gfVxyXG5cclxuLm1hdC1jYXJkLWltYWdle1xyXG4gIFxyXG53aWR0aDogNjRweDtcclxuaGVpZ2h0OiA0N3B4O1xyXG5tYXJnaW46IC01cHggNDdweCAzNHB4IDExMnB4O1xyXG59XHJcbi5tYXQtY2FyZC1pbWFnZTpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbn1cclxuLy8gLm1hdC1jYXJkLWNvbnRlbnRbX25nY29udGVudC1jNV0ge1xyXG4vLyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyBmb250LXNpemU6IHNtYWxsO1xyXG4vLyB9XHJcbi5tYXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDMxNXB4O1xyXG4gIGhlaWdodDogMzAzcHg7XHJcbn1cclxuLm1hdC1jYXJkLXRpdGxlIHtcclxuZm9udC1zaXplOiAxOXB4O1xyXG59XHJcblxyXG5pbWcge1xyXG5ib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG59XHJcbi8vIC5tYXQtY2FyZC1pbWFnZXtcclxuLy8gICB3aWR0aDogNTFweDtcclxuLy8gICBoZWlnaHQ6IDQycHg7XHJcbi8vICAgbWFyZ2luOiAtNXB4IDQ3cHggMzRweCAxMTJweDtcclxuLy8gfVxyXG4ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxuICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4vLyAubWF0LWNhcmQtY29udGVudHtcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyB9XHJcbi8vIC5tYXQtY2FyZC1pbWFnZSB7XHJcbi8vICAgIHdpZHRoOiA2NHB4O1xyXG4vLyAgIGhlaWdodDogNDdweDtcclxuLy8gIG1hcmdpbjogOXB4IC04MnB4IDBweCA1NnB4O1xyXG5cclxuLy8gfVxyXG4ubWF0LWNhcmQtYWN0aW9ucyB7XHJcbm1hcmdpbi1sZWZ0OiA1MnB4O1xyXG59XHJcblxyXG5cclxuLm1hdC1jYXJkOmhvdmVye1xyXG5ib3gtc2hhZG93OiAtMXB4IDEwcHggMjlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG4gLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG5vcGFjaXR5OiAxMDA7XHJcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/charts/charts.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/charts/charts.component.ts ***!
  \***************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _shared_services_APIService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/APIService */ "./src/app/shared/services/APIService.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartsComponent = /** @class */ (function () {
    function ChartsComponent(_APIService) {
        this._APIService = _APIService;
    }
    ChartsComponent.prototype.countryCodes = function () {
        return _shared_services_APIService__WEBPACK_IMPORTED_MODULE_0__["_isCardDetail"];
    };
    ChartsComponent.prototype.diaplayDescription = function (value) {
        Object(_shared_services_APIService__WEBPACK_IMPORTED_MODULE_0__["setCardDetail"])(false);
        this.cardClicked = value;
    };
    ChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fullImagePath = '../../../assets/API-icon.png';
        this._APIService.get()
            .subscribe(function (data) {
            _this.url = data[0].assetUrl;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], ChartsComponent.prototype, "cardsList", void 0);
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(/*! ./charts.component.html */ "./src/app/layout/charts/charts.component.html"),
            styles: [__webpack_require__(/*! ./charts.component.scss */ "./src/app/layout/charts/charts.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_APIService__WEBPACK_IMPORTED_MODULE_0__["APIService"]])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/topnav/topnav.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"background:black\" class=\"fix-nav\">\r\n    <div class=\"nav-brand\">\r\n        <img\r\n            src=\"assets/images/deloitte_logo.png\"\r\n            style=\"height:35px;margin-top:15px\"\r\n        />\r\n    </div>\r\n\r\n    <h1 style=\"color:whitesmoke; margin:0 auto\">\r\n        Health Plans Development Hub\r\n    </h1>\r\n\r\n    <div class=\"nav-icons-div\" style=\"padding:15px 0\">\r\n        <form class=\"form-inline mr-auto\">\r\n            <input\r\n                class=\"form-control mr-sm-2\"\r\n                type=\"text\"\r\n                placeholder=\"Search\"\r\n                aria-label=\"Search\"\r\n            />\r\n        </form>\r\n    </div>\r\n</mat-toolbar>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/components/topnav/topnav.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3RvcG5hdi90b3BuYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/components/topnav/topnav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.ts ***!
  \**************************************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopnavComponent = /** @class */ (function () {
    function TopnavComponent(router, translate) {
        this.router = router;
        this.translate = translate;
    }
    TopnavComponent.prototype.ngOnInit = function () {
        this.pushRightClass = 'push-right';
    };
    TopnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__(/*! ./topnav.component.html */ "./src/app/layout/components/topnav/topnav.component.html"),
            styles: [__webpack_require__(/*! ./topnav.component.scss */ "./src/app/layout/components/topnav/topnav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "./src/app/layout/configurations/configurations.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/configurations/configurations.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n   <div >\r\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n    <div >\r\n    <div class=\"\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <div>\r\n      <button type=\"button\" (click)=\"selectedValue('claims')\" class=\"btn btn-primary btn-block\">Claims</button>\r\n          \r\n    \r\n        <button type=\"button\"  (click)=\"selectedValue('member')\" class=\"btn btn-primary btn-block\">Members</button>\r\n        \r\n        <button type=\"button\"  (click)=\"selectedValue('provider')\" class=\"btn btn-primary btn-block\">Providers</button>\r\n      \r\n        <button type=\"button\" (click)=\"selectedValue('')\" class=\"btn btn-primary btn-block\">Manage Medical Costs </button>\r\n        \r\n        <button type=\"button\" (click)=\"selectedValue('')\" class=\"btn btn-primary btn-block\">Improve Quality of Care</button>\r\n      \r\n        <button type=\"button\" (click)=\"selectedValue('')\" class=\"btn btn-primary btn-block\">Setup Products & Benefits</button>\r\n    \r\n        <button type=\"button\" (click)=\"selectedValue('')\" class=\"btn btn-primary btn-block\">Manage Billings</button>\r\n    \r\n        <button type=\"button\" (click)=\"selectedValue('')\" class=\"btn btn-primary btn-block\">Accounts Receivables</button>\r\n     \r\n       <div style=\"padding:30px;font-size: 1.1em ; color: black\">\r\n        <a href=\"http://healthinnovationhub.s3-website-us-east-1.amazonaws.com/\" style=\"color:rgb(81, 11, 245); \" class=\"w3-btn w3-black\">Product Development Innovation Hub</a>\r\n      </div>\r\n       \r\n        <!-- <button type=\"button\" (click)=\"selectedValue('claims')\" class=\"btn btn-primary btn-block\">Manage Billings & Accounts Receivables</button>\r\n        <br>\r\n        <button type=\"button\" (click)=\"selectedValue('claims')\" class=\"btn btn-primary btn-block\">Manage Billings & Accounts Receivables</button>\r\n        <br> -->\r\n    \r\n        </div>\r\n      </ul>\r\n    </div>\r\n    \r\n    <div class=\"container\">\r\n      <div class=\"content-wrapper\">\r\n        \r\n        <app-charts *ngIf=\"displayComponent=='provider' \" [cardsList]=\"newCardsList\" ></app-charts>\r\n        <app-charts *ngIf=\"displayComponent=='member'\"  [cardsList]=\"newCardsList\" ></app-charts>\r\n        <app-charts *ngIf=\"displayComponent=='claims'\" [cardsList]=\"newCardsList\" ></app-charts>\r\n      \r\n    \r\n    </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/layout/configurations/configurations.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/configurations/configurations.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-fixed-left {\n  width: 223px;\n  border-radius: 0;\n  height: 100%;\n  top: 0;\n  z-index: 1; }\n\n.btn-block {\n  display: block;\n  width: 92%; }\n\n.navbar-fixed-left .navbar-nav > li {\n  float: none;\n  /* Cancel default li float: left */\n  width: 149px; }\n\nbutton {\n  text-align: left; }\n\n/* On using dropdown menu (To right shift popuped) */\n\n.navbar-fixed-left .navbar-nav > li > .dropdown-menu {\n  margin-left: 40px; }\n\nul li:after {\n  height: 1px;\n  width: 132%;\n  margin: 10px;\n  background: #dbcfcf; }\n\n.navbar-nav > li > a {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important;\n  height: 13px; }\n\n.navbar {\n  min-height: 32px !important; }\n\na.disabled {\n  pointer-events: none;\n  cursor: default; }\n\n_ngcontent-c5 {\n  color: #f1eded; }\n\nbody {\n  background-color: red; }\n\n.btn-block {\n  background-color: black;\n  display: block;\n  /*width: 102%;*/\n  padding: 15px 32px;\n  font-size: 13px;\n  border-color: transparent; }\n\n.btn-primary:hover {\n  border-color: transparent;\n  background-color: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbmZpZ3VyYXRpb25zL0M6XFxIZWFsdGhjYXJlQXBpXFxQbGFuIERldiBIdWIvc3JjXFxhcHBcXGxheW91dFxcY29uZmlndXJhdGlvbnNcXGNvbmZpZ3VyYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBWTtFQUVaLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1gsT0FBTTtFQUNOLFdBQVUsRUFFWjs7QUFDRDtFQUNFLGVBQWM7RUFDZCxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSxZQUFXO0VBQUcsbUNBQW1DO0VBQ2pELGFBQVksRUFDYjs7QUFJRDtFQUFPLGlCQUFnQixFQUFFOztBQUd6QixxREFBcUQ7O0FBQ3JEO0VBRUUsa0JBQWlCLEVBQ2xCOztBQUNEO0VBRUUsWUFBVztFQUNYLFlBQVc7RUFDWCxhQUFZO0VBQ1osb0JBQTZCLEVBQzlCOztBQUNEO0VBQXNCLDRCQUEwQjtFQUFFLCtCQUE2QjtFQUFHLGFBQVksRUFBRzs7QUFDakc7RUFBUyw0QkFBMEIsRUFBSTs7QUFDdkM7RUFDQSxxQkFBb0I7RUFDcEIsZ0JBQWUsRUFDZDs7QUFDRDtFQUNFLGVBQWEsRUFDZDs7QUFDRDtFQUFNLHNCQUFxQixFQUFHOztBQUM5QjtFQUNBLHdCQUFzQjtFQUN0QixlQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLDBCQUF3QixFQUN2Qjs7QUFDRDtFQUNBLDBCQUF3QjtFQUN4Qix3QkFBc0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29uZmlndXJhdGlvbnMvY29uZmlndXJhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdmJhci1maXhlZC1sZWZ0IHtcclxuICB3aWR0aDogMjIzcHg7XHJcbiAgXHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgIHRvcDogMDtcclxuICAgei1pbmRleDogMTtcclxuICAvLyBvdmVyZmxvdy15OiBoaWRkZW47IFxyXG59XHJcbi5idG4tYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA5MiU7XHJcbn1cclxuXHJcbi5uYXZiYXItZml4ZWQtbGVmdCAubmF2YmFyLW5hdiA+IGxpIHtcclxuICBmbG9hdDogbm9uZTsgIC8qIENhbmNlbCBkZWZhdWx0IGxpIGZsb2F0OiBsZWZ0ICovXHJcbiAgd2lkdGg6IDE0OXB4O1xyXG59XHJcblxyXG5cclxuXHJcbmJ1dHRvbnt0ZXh0LWFsaWduOiBsZWZ0fVxyXG5cclxuXHJcbi8qIE9uIHVzaW5nIGRyb3Bkb3duIG1lbnUgKFRvIHJpZ2h0IHNoaWZ0IHBvcHVwZWQpICovXHJcbi5uYXZiYXItZml4ZWQtbGVmdCAubmF2YmFyLW5hdiA+IGxpID4gLmRyb3Bkb3duLW1lbnUge1xyXG4gIFxyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcbnVsIGxpOmFmdGVyIHtcclxuIFxyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAxMzIlO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBiYWNrZ3JvdW5kOnJnYigyMTksIDIwNywgMjA3KTtcclxufVxyXG4ubmF2YmFyLW5hdiA+IGxpID4gYSB7cGFkZGluZy10b3A6NXB4ICFpbXBvcnRhbnQ7IHBhZGRpbmctYm90dG9tOjVweCAhaW1wb3J0YW50OyAgaGVpZ2h0OiAxM3B4O31cclxuLm5hdmJhciB7bWluLWhlaWdodDozMnB4ICFpbXBvcnRhbnQ7IH1cclxuYS5kaXNhYmxlZCB7XHJcbnBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5jdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuX25nY29udGVudC1jNXtcclxuICBjb2xvcjojZjFlZGVkO1xyXG59XHJcbmJvZHkge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XHJcbi5idG4tYmxvY2sge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrOyBcclxuZGlzcGxheTogYmxvY2s7XHJcbi8qd2lkdGg6IDEwMiU7Ki9cclxucGFkZGluZzogMTVweCAzMnB4O1xyXG5mb250LXNpemU6IDEzcHg7XHJcbmJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG4uYnRuLXByaW1hcnk6aG92ZXJ7XHJcbmJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtcclxuYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/configurations/configurations.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/configurations/configurations.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfigurationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationsComponent", function() { return ConfigurationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_APIService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/APIService */ "./src/app/shared/services/APIService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigurationsComponent = /** @class */ (function () {
    function ConfigurationsComponent(_APIService) {
        this._APIService = _APIService;
        this.newProviderList = new Array();
        this.newCardsList = [];
        this.listProvider = new Array();
        this.listDomains = new Array();
        this.newCardsList = new Array();
        this.listDomainsBackened = new Array();
    }
    ConfigurationsComponent.prototype.selectedValue = function (value) {
        if (value == 'claims') {
            this.displayComponent = 'claims';
            this._APIService.setproviderListDisplay(this.newProviderList);
            this.loadValues();
            Object(_shared_services_APIService__WEBPACK_IMPORTED_MODULE_1__["setCardDetail"])(true);
        }
        if (value == 'member') {
            this.displayComponent = 'member';
            this.loadValues();
            console.log(this.displayComponent);
            Object(_shared_services_APIService__WEBPACK_IMPORTED_MODULE_1__["setCardDetail"])(true);
        }
        if (value == 'provider') {
            this.displayComponent = 'provider';
            this.loadValues();
            Object(_shared_services_APIService__WEBPACK_IMPORTED_MODULE_1__["setCardDetail"])(true);
        }
    };
    ConfigurationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._APIService.get().subscribe(function (list) {
            _this.listProvider = list;
        }, function (error) { console.log(error); });
        this._APIService.getLoggedinUser().subscribe(function (data) {
            _this.listDomainsBackened = data;
        });
    };
    ConfigurationsComponent.prototype.loadValues = function () {
        var _this = this;
        if (this.displayComponent == 'claims') {
            this.newCardsList = [];
            this.listDomainsBackened[0].lobList.forEach(function (lob) {
                lob.apiList.forEach(function (apnNm) {
                    if (_this.listProvider.find(function (api) { return (api.apiName.trim() === apnNm.apiName.trim()); })) {
                        apnNm.muleApi = true;
                        apnNm.apiDescription = _this.listProvider.find(function (prov) { return (prov.apiName.trim() === apnNm.apiName); }).description;
                    }
                });
            });
            this.listDomainsBackened.forEach(function (obj) {
                obj.lobList.forEach(function (obj1) {
                    if (obj1.lobName == 'claims') {
                        obj1.apiList.forEach(function (obj2) {
                            _this.newCardsList.push(obj2);
                        });
                    }
                });
            });
        }
        if (this.displayComponent == 'member') {
            this.newCardsList = [];
            this.listDomainsBackened.forEach(function (obj) {
                obj.lobList.forEach(function (obj1) {
                    if (obj1.lobName == 'member') {
                        obj1.apiList.forEach(function (obj2) {
                            _this.newCardsList.push(obj2);
                        });
                    }
                });
            });
            this.listDomainsBackened.forEach(function (obj) {
                obj.lobList.forEach(function (obj1) {
                    if (obj1.lobName == 'member') {
                        _this.listProvider.forEach(function (provider) {
                            obj1.apiList.forEach(function (obj2) {
                                if (obj2.apiName.trim() === provider.apiName.trim()) {
                                    obj2.apiDescription = provider.description;
                                    obj2.muleApi = true;
                                }
                            });
                        });
                    }
                });
            });
        }
        if (this.displayComponent == 'provider') {
            this.newCardsList = [];
            this.listDomainsBackened.forEach(function (obj) {
                obj.lobList.forEach(function (obj1) {
                    if (obj1.lobName == 'provider') {
                        obj1.apiList.forEach(function (obj2) {
                            _this.newCardsList.push(obj2);
                        });
                    }
                });
            });
            this.listDomainsBackened.forEach(function (obj) {
                obj.lobList.forEach(function (obj1) {
                    if (obj1.lobName == 'provider') {
                        _this.listProvider.forEach(function (provider) {
                            obj1.apiList.forEach(function (obj2) {
                                if (obj2.apiName.trim() === provider.apiName.trim()) {
                                    obj2.apiDescription = provider.description;
                                    obj2.muleApi = true;
                                }
                            });
                        });
                    }
                });
            });
        }
    };
    ConfigurationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configurations',
            template: __webpack_require__(/*! ./configurations.component.html */ "./src/app/layout/configurations/configurations.component.html"),
            styles: [__webpack_require__(/*! ./configurations.component.scss */ "./src/app/layout/configurations/configurations.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_APIService__WEBPACK_IMPORTED_MODULE_1__["APIService"]])
    ], ConfigurationsComponent);
    return ConfigurationsComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/layout/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
        children: []
    },
    {
        path: 'healthcare',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n      <style>\r\n            * {\r\n                  box-sizing: border-box;\r\n            }\r\n\r\n            .menu {\r\n                  float: left;\r\n                  width: 20%;\r\n            }\r\n\r\n            .menuitem {\r\n                  padding: 8px;\r\n                  margin-top: 7px;\r\n                  border-bottom: 1px solid #f1f1f1;\r\n            }\r\n\r\n            .main {\r\n                  float: left;\r\n                  width: 100%;\r\n                  padding: 0 20px;\r\n                  overflow: hidden;\r\n            }\r\n\r\n            .right {\r\n                  background-color: lightblue;\r\n                  float: left;\r\n                  width: 20%;\r\n                  padding: 10px 15px;\r\n                  margin-top: 7px;\r\n            }\r\n\r\n            @media only screen and (max-width:800px) {\r\n\r\n                  /* For tablets: */\r\n                  .main {\r\n                        width: 80%;\r\n                        padding: 0;\r\n                  }\r\n\r\n                  .right {\r\n                        width: 100%;\r\n                  }\r\n            }\r\n\r\n            @media only screen and (max-width:500px) {\r\n\r\n                  /* For mobile phones: */\r\n                  .menu,\r\n                  .main,\r\n                  .right {\r\n                        width: 100%;\r\n                  }\r\n            }\r\n      </style>\r\n</head>\r\n\r\n<body style=\"font-family:Verdana;\">\r\n\r\n      <div style=\"background-color:black;padding:4px;\">\r\n            <app-topnav></app-topnav>\r\n      </div>\r\n\r\n      <div>\r\n            <div class=\"menu\">\r\n                  <app-configurations></app-configurations>\r\n            </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n      <div id=\"step-container\">\r\n            \r\n      </div>\r\n\r\n\r\n\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-sidenav-content {\n  height: 700%;\n  align-items: center;\n  justify-content: center; }\n\n.container {\n  padding: 16px; }\n\n.card + .card {\n  margin: 0 0 0 8px; }\n\n.example-container {\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.5); }\n\n.play_button {\n  position: absolute;\n  transition: .5s ease;\n  left: -275px;\n  top: -13px; }\n\n.example-sidenav {\n  padding: 53px;\n  top: 64px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0M6XFxIZWFsdGhjYXJlQXBpXFxQbGFuIERldiBIdWIvc3JjXFxhcHBcXGxheW91dFxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQix3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2I7O0FBQUE7RUFDQSxrQkFBaUIsRUFDakI7O0FBRUY7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHFDQUFvQyxFQUNyQzs7QUFDRDtFQUNFLG1CQUFpQjtFQUNuQixxQkFBb0I7RUFDbEIsYUFBWTtFQUNaLFdBQVUsRUFFWDs7QUFDRDtFQUNFLGNBQWE7RUFDYixVQUFTLEVBRVYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIFxyXG4gIGhlaWdodDogNzAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiB9LmNhcmQgKyAuY2FyZCB7XHJcbiAgbWFyZ2luOiAwIDAgMCA4cHg7XHJcbiB9XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuLnBsYXlfYnV0dG9uIHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxudHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgbGVmdDogLTI3NXB4O1xyXG4gIHRvcDogLTEzcHg7XHJcbiAgXHJcbn1cclxuLmV4YW1wbGUtc2lkZW5hdiB7XHJcbiAgcGFkZGluZzogNTNweDtcclxuICB0b3A6IDY0cHg7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
        this.template = '<h1>Abhinav</h1>'; // or your html   
    }
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/layout/login/login.component.ts");
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts/charts.component */ "./src/app/layout/charts/charts.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/topnav/topnav.component */ "./src/app/layout/components/topnav/topnav.component.ts");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _configurations_configurations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./configurations/configurations.component */ "./src/app/layout/configurations/configurations.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_7__["LayoutRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"], _charts_charts_component__WEBPACK_IMPORTED_MODULE_1__["ChartsComponent"], _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_6__["TopnavComponent"], _configurations_configurations_component__WEBPACK_IMPORTED_MODULE_10__["ConfigurationsComponent"], _charts_charts_component__WEBPACK_IMPORTED_MODULE_1__["ChartsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title style=\"font-size:20px\">Health Plans Development Hub</mat-card-title>\r\n  <mat-card-content>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\r\n      <p>\r\n        <mat-form-field>\r\n          <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"username\">\r\n        </mat-form-field>\r\n      </p>\r\n\r\n      <p>\r\n        <mat-form-field>\r\n          <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\r\n        </mat-form-field>\r\n      </p>\r\n\r\n      <p *ngIf=\"error\" class=\"error\">\r\n        {{ error }}\r\n      </p>\r\n\r\n      <div class=\"button\">\r\n        <button (click)=\"onLogin()\" mat-button>Login</button>\r\n      </div>\r\n\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n`"

/***/ }),

/***/ "./src/app/layout/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/login/login.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  justify-content: center;\n  margin: 100px 0px; }\n\n.mat-form-field {\n  width: 100%;\n  min-width: 300px; }\n\nmat-card-title,\nmat-card-content {\n  display: flex;\n  justify-content: center; }\n\n.error {\n  padding: 16px;\n  width: 300px;\n  color: white;\n  background-color: red; }\n\n.button {\n  display: flex;\n  justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xvZ2luL0M6XFxIZWFsdGhjYXJlQXBpXFxQbGFuIERldiBIdWIvc3JjXFxhcHBcXGxheW91dFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCLEVBQ2pCOztBQUVEOztFQUVFLGNBQWE7RUFDYix3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGFBQVk7RUFDWixzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMDBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQtdGl0bGUsXHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZXJyb3Ige1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_APIService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/APIService */ "./src/app/shared/services/APIService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _APIService) {
        this.router = router;
        this._APIService = _APIService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLogin = function () {
        if (this.form.value.username == 'admin' && this.form.value.password == 'admin') {
            console.log(this.form.value.username);
            this.router.navigate(["/healthcare"]);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/layout/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/layout/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_APIService__WEBPACK_IMPORTED_MODULE_2__["APIService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map