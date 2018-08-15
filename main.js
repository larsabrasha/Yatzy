(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <app-dice></app-dice>\n    <app-score-board></app-score-board>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'yatzy';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm5/ngxs-devtools-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/app.state */ "./src/app/store/app.state.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _dice_dice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dice/dice.component */ "./src/app/dice/dice.component.ts");
/* harmony import */ var _single_dice_single_dice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./single-dice/single-dice.component */ "./src/app/single-dice/single-dice.component.ts");
/* harmony import */ var _score_board_score_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./score-board/score-board.component */ "./src/app/score-board/score-board.component.ts");
/* harmony import */ var _spot_spot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spot/spot.component */ "./src/app/spot/spot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dice_dice_component__WEBPACK_IMPORTED_MODULE_7__["DiceComponent"],
                _single_dice_single_dice_component__WEBPACK_IMPORTED_MODULE_8__["SingleDiceComponent"],
                _score_board_score_board_component__WEBPACK_IMPORTED_MODULE_9__["ScoreBoardComponent"],
                _spot_spot_component__WEBPACK_IMPORTED_MODULE_10__["SpotComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forRoot([_store_app_state__WEBPACK_IMPORTED_MODULE_5__["AppState"]]),
                _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_2__["NgxsReduxDevtoolsPluginModule"].forRoot({
                    disabled: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment"].production,
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dice/dice.component.html":
/*!******************************************!*\
  !*** ./src/app/dice/dice.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\" *ngIf=\"dice$ | async as dice\">\n  <div class=\"m-1\" *ngFor=\"let aDice of dice; index as i;\">\n    <app-single-dice [dice]=\"aDice\" (click)=\"toggleDiceAtIndex(i)\"></app-single-dice>\n  </div>\n\n  <div class=\"m-1\">\n    <button (click)=\"throw(); $event.preventDefault();\" class=\"btn btn-primary\" style=\"height: 50px; width: 100px;\" [disabled]=\"(numberOfThrowsLeft$ | async) === 0\">\n      <div class=\" d-flex h-100 w-100\">\n        <div class=\"justify-content-center align-self-center mx-auto \">\n          Kasta\n        </div>\n      </div>\n    </button>\n  </div>\n\n  <div>\n    <span *ngFor='let in of counter(numberOfThrowsLeft$ | async) ;let i = index' class=\"p-1\">\n      <i class=\"fas fa-circle\"></i>\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dice/dice.component.scss":
/*!******************************************!*\
  !*** ./src/app/dice/dice.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dice {\n  width: 50px;\n  height: 50px; }\n"

/***/ }),

/***/ "./src/app/dice/dice.component.ts":
/*!****************************************!*\
  !*** ./src/app/dice/dice.component.ts ***!
  \****************************************/
/*! exports provided: DiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceComponent", function() { return DiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/app.actions */ "./src/app/store/app.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiceComponent = /** @class */ (function () {
    function DiceComponent(store) {
        this.store = store;
    }
    DiceComponent.prototype.ngOnInit = function () { };
    DiceComponent.prototype.throw = function () {
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_2__["ThrowDice"]());
    };
    DiceComponent.prototype.toggleDiceAtIndex = function (diceIndex) {
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_2__["ToggleDiceSelection"](diceIndex));
    };
    DiceComponent.prototype.counter = function (i) {
        return new Array(i);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(function (state) { return state.app.dice; }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DiceComponent.prototype, "dice$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(function (state) { return state.app.numberOfThrowsLeft; }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DiceComponent.prototype, "numberOfThrowsLeft$", void 0);
    DiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dice',
            template: __webpack_require__(/*! ./dice.component.html */ "./src/app/dice/dice.component.html"),
            styles: [__webpack_require__(/*! ./dice.component.scss */ "./src/app/dice/dice.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], DiceComponent);
    return DiceComponent;
}());



/***/ }),

/***/ "./src/app/score-board/score-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/score-board/score-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm table-borderless\" style=\"width: 200px\" *ngIf=\"spots$ | async as spots; \">\n  <thead>\n    <tr>\n      <td></td>\n      <td class=\"text-center\">Spelare 1</td>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Ettor</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[0]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(0)\"></app-spot>\n      </td>\n    </tr>\n    <tr>\n      <td>Tvåor</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[1]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(1)\"></app-spot>\n      </td>\n    </tr>\n    <tr>\n      <td>Treor</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[2]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(2)\"></app-spot>\n      </td>\n    </tr>\n    <tr>\n      <td>Fyror</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[3]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(3)\"></app-spot>\n      </td>\n    </tr>\n    <tr>\n      <td>Femmor</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[4]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(4)\"></app-spot>\n      </td>\n    </tr>\n    <tr>\n      <td>Sexor</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[5]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(5)\"></app-spot>\n      </td>\n    </tr>\n    <tr class=\"bg-secondary text-light\">\n      <td>Bonus</td>\n      <td class=\"text-center\">{{bonus$ | async}}</td>\n    </tr>\n    <tr class=\"bg-dark text-light\">\n      <td>Summa</td>\n      <td class=\"text-center\">{{upperSum$ | async}}</td>\n    </tr>\n    <tr>\n      <td>Ett par</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[6]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(6)\"></app-spot>\n      </td>\n    </tr>\n    <tr>\n      <td>Två par</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[7]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(7)\"></app-spot>\n      </td>\n    </tr>\n    <tr>\n      <td>Tretal</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[8]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(8)\"></app-spot>\n      </td>\n    </tr>\n    <tr>\n      <td>Fyrtal</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[9]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(9)\"></app-spot>\n      </td>\n    </tr>\n    <tr>\n      <td>Liten stege</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[10]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(10)\"></app-spot>\n      </td>\n    </tr>\n    <tr>\n      <td>Stor stege</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[11]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(11)\"></app-spot>\n      </td>\n    </tr>\n    <tr>\n      <td>Kåk</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[12]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(12)\"></app-spot>\n      </td>\n    </tr>\n    <tr>\n      <td>Chans</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[13]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(13)\"></app-spot>\n      </td>\n    </tr>\n    <tr>\n      <td>Yatzy</td>\n      <td class=\"text-center\">\n        <app-spot [spot]=\"spots[14]\" [showingPossibleValues]=\"showingPossibleValues$ | async\" (select)=\"selectSpot(14)\"></app-spot>\n      </td>\n    </tr>\n    <tr class=\"bg-dark text-light\">\n      <td>Summa</td>\n      <td class=\"text-center\">{{totalSum$ | async}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/score-board/score-board.component.scss":
/*!********************************************************!*\
  !*** ./src/app/score-board/score-board.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/score-board/score-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/score-board/score-board.component.ts ***!
  \******************************************************/
/*! exports provided: ScoreBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreBoardComponent", function() { return ScoreBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _store_app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/app.actions */ "./src/app/store/app.actions.ts");
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/app.state */ "./src/app/store/app.state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScoreBoardComponent = /** @class */ (function () {
    function ScoreBoardComponent(store) {
        this.store = store;
    }
    ScoreBoardComponent.prototype.ngOnInit = function () { };
    ScoreBoardComponent.prototype.selectSpot = function (spotIndex) {
        this.store.dispatch(new _store_app_actions__WEBPACK_IMPORTED_MODULE_3__["SelectSpot"](spotIndex));
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(function (state) { return state.app.spots; }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ScoreBoardComponent.prototype, "spots$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(function (state) { return state.app.showingPossibleValues; }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ScoreBoardComponent.prototype, "showingPossibleValues$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"].bonus),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ScoreBoardComponent.prototype, "bonus$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"].upperSum),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ScoreBoardComponent.prototype, "upperSum$", void 0);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_store_app_state__WEBPACK_IMPORTED_MODULE_4__["AppState"].totalSum),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ScoreBoardComponent.prototype, "totalSum$", void 0);
    ScoreBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-score-board',
            template: __webpack_require__(/*! ./score-board.component.html */ "./src/app/score-board/score-board.component.html"),
            styles: [__webpack_require__(/*! ./score-board.component.scss */ "./src/app/score-board/score-board.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ScoreBoardComponent);
    return ScoreBoardComponent;
}());



/***/ }),

/***/ "./src/app/single-dice/single-dice.component.html":
/*!********************************************************!*\
  !*** ./src/app/single-dice/single-dice.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"\" (click)=\"_click(); $event.preventDefault();\" class=\"btn border rounded\" [ngClass]=\"{'btn-dark': dice.selected, 'btn-light': !dice.selected}\"\n  style=\"height: 50px; width: 50px;\">\n  <div class=\" d-flex h-100 w-100\">\n    <div class=\"justify-content-center align-self-center mx-auto \">\n      {{dice.value}}\n    </div>\n  </div>\n</a>"

/***/ }),

/***/ "./src/app/single-dice/single-dice.component.scss":
/*!********************************************************!*\
  !*** ./src/app/single-dice/single-dice.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/single-dice/single-dice.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-dice/single-dice.component.ts ***!
  \******************************************************/
/*! exports provided: SingleDiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleDiceComponent", function() { return SingleDiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_app_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/app.model */ "./src/app/store/app.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleDiceComponent = /** @class */ (function () {
    function SingleDiceComponent() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SingleDiceComponent.prototype.ngOnInit = function () { };
    SingleDiceComponent.prototype._click = function () {
        this.click.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _store_app_model__WEBPACK_IMPORTED_MODULE_1__["Dice"])
    ], SingleDiceComponent.prototype, "dice", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SingleDiceComponent.prototype, "click", void 0);
    SingleDiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-dice',
            template: __webpack_require__(/*! ./single-dice.component.html */ "./src/app/single-dice/single-dice.component.html"),
            styles: [__webpack_require__(/*! ./single-dice.component.scss */ "./src/app/single-dice/single-dice.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], SingleDiceComponent);
    return SingleDiceComponent;
}());



/***/ }),

/***/ "./src/app/spot/spot.component.html":
/*!******************************************!*\
  !*** ./src/app/spot/spot.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 32px;\">\n  <span *ngIf=\"spot.taken\">\n    {{spot.value === 0 ? '-' : spot.value}}\n  </span>\n\n  <button *ngIf=\"showingPossibleValues && !spot.taken\" (click)=\"_select()\" class=\"btn btn-sm btn-primary w-100\">\n    Välj <span class=\"ml-1 badge badge-pill badge-light\">{{spot.possibleValue}}</span>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/spot/spot.component.scss":
/*!******************************************!*\
  !*** ./src/app/spot/spot.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/spot/spot.component.ts":
/*!****************************************!*\
  !*** ./src/app/spot/spot.component.ts ***!
  \****************************************/
/*! exports provided: SpotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotComponent", function() { return SpotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_app_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/app.model */ "./src/app/store/app.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpotComponent = /** @class */ (function () {
    function SpotComponent() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SpotComponent.prototype.ngOnInit = function () { };
    SpotComponent.prototype._select = function () {
        this.select.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _store_app_model__WEBPACK_IMPORTED_MODULE_1__["Spot"])
    ], SpotComponent.prototype, "spot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SpotComponent.prototype, "showingPossibleValues", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpotComponent.prototype, "select", void 0);
    SpotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spot',
            template: __webpack_require__(/*! ./spot.component.html */ "./src/app/spot/spot.component.html"),
            styles: [__webpack_require__(/*! ./spot.component.scss */ "./src/app/spot/spot.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], SpotComponent);
    return SpotComponent;
}());



/***/ }),

/***/ "./src/app/store/app.actions.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.actions.ts ***!
  \**************************************/
/*! exports provided: SelectOnes, SelectTwos, SelectThrees, SelectFours, SelectFives, SelectSixes, SelectOnePair, SelectTwoPairs, SelectThreeSame, SelectFourSame, SelectSmallStraight, SelectBigStraight, SelectKak, SelectChance, SelectYatzy, ToggleDiceSelection, ThrowDice, SelectSpot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOnes", function() { return SelectOnes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTwos", function() { return SelectTwos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectThrees", function() { return SelectThrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFours", function() { return SelectFours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFives", function() { return SelectFives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSixes", function() { return SelectSixes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOnePair", function() { return SelectOnePair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTwoPairs", function() { return SelectTwoPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectThreeSame", function() { return SelectThreeSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFourSame", function() { return SelectFourSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSmallStraight", function() { return SelectSmallStraight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBigStraight", function() { return SelectBigStraight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectKak", function() { return SelectKak; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectChance", function() { return SelectChance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectYatzy", function() { return SelectYatzy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleDiceSelection", function() { return ToggleDiceSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrowDice", function() { return ThrowDice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSpot", function() { return SelectSpot; });
var SelectOnes = /** @class */ (function () {
    function SelectOnes(payload) {
        this.payload = payload;
    }
    SelectOnes.type = '[App] Select Ones';
    return SelectOnes;
}());

var SelectTwos = /** @class */ (function () {
    function SelectTwos(payload) {
        this.payload = payload;
    }
    SelectTwos.type = '[App] Select Ones';
    return SelectTwos;
}());

var SelectThrees = /** @class */ (function () {
    function SelectThrees(payload) {
        this.payload = payload;
    }
    SelectThrees.type = '[App] Select Ones';
    return SelectThrees;
}());

var SelectFours = /** @class */ (function () {
    function SelectFours(payload) {
        this.payload = payload;
    }
    SelectFours.type = '[App] Select Ones';
    return SelectFours;
}());

var SelectFives = /** @class */ (function () {
    function SelectFives(payload) {
        this.payload = payload;
    }
    SelectFives.type = '[App] Select Ones';
    return SelectFives;
}());

var SelectSixes = /** @class */ (function () {
    function SelectSixes(payload) {
        this.payload = payload;
    }
    SelectSixes.type = '[App] Select Ones';
    return SelectSixes;
}());

var SelectOnePair = /** @class */ (function () {
    function SelectOnePair(payload) {
        this.payload = payload;
    }
    SelectOnePair.type = '[App] Select Ones';
    return SelectOnePair;
}());

var SelectTwoPairs = /** @class */ (function () {
    function SelectTwoPairs(payload) {
        this.payload = payload;
    }
    SelectTwoPairs.type = '[App] Select Ones';
    return SelectTwoPairs;
}());

var SelectThreeSame = /** @class */ (function () {
    function SelectThreeSame(payload) {
        this.payload = payload;
    }
    SelectThreeSame.type = '[App] Select Ones';
    return SelectThreeSame;
}());

var SelectFourSame = /** @class */ (function () {
    function SelectFourSame(payload) {
        this.payload = payload;
    }
    SelectFourSame.type = '[App] Select Ones';
    return SelectFourSame;
}());

var SelectSmallStraight = /** @class */ (function () {
    function SelectSmallStraight(payload) {
        this.payload = payload;
    }
    SelectSmallStraight.type = '[App] Select Ones';
    return SelectSmallStraight;
}());

var SelectBigStraight = /** @class */ (function () {
    function SelectBigStraight(payload) {
        this.payload = payload;
    }
    SelectBigStraight.type = '[App] Select Ones';
    return SelectBigStraight;
}());

var SelectKak = /** @class */ (function () {
    function SelectKak(payload) {
        this.payload = payload;
    }
    SelectKak.type = '[App] Select Ones';
    return SelectKak;
}());

var SelectChance = /** @class */ (function () {
    function SelectChance(payload) {
        this.payload = payload;
    }
    SelectChance.type = '[App] Select Ones';
    return SelectChance;
}());

var SelectYatzy = /** @class */ (function () {
    function SelectYatzy(payload) {
        this.payload = payload;
    }
    SelectYatzy.type = '[App] Select Ones';
    return SelectYatzy;
}());

var ToggleDiceSelection = /** @class */ (function () {
    function ToggleDiceSelection(diceIndex) {
        this.diceIndex = diceIndex;
    }
    ToggleDiceSelection.type = '[App] Toggle Dice Selection';
    return ToggleDiceSelection;
}());

var ThrowDice = /** @class */ (function () {
    function ThrowDice() {
    }
    ThrowDice.type = '[App] Throw Dice';
    return ThrowDice;
}());

var SelectSpot = /** @class */ (function () {
    function SelectSpot(spotIndex) {
        this.spotIndex = spotIndex;
    }
    SelectSpot.type = '[App] Select Spot';
    return SelectSpot;
}());



/***/ }),

/***/ "./src/app/store/app.model.ts":
/*!************************************!*\
  !*** ./src/app/store/app.model.ts ***!
  \************************************/
/*! exports provided: Dice, Spot, AppStateModel, diceDefaultValues, defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dice", function() { return Dice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spot", function() { return Spot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStateModel", function() { return AppStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diceDefaultValues", function() { return diceDefaultValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
var Dice = /** @class */ (function () {
    function Dice() {
    }
    return Dice;
}());

var Spot = /** @class */ (function () {
    function Spot() {
    }
    return Spot;
}());

var AppStateModel = /** @class */ (function () {
    function AppStateModel() {
    }
    return AppStateModel;
}());

var diceDefaultValues = [
    {
        value: null,
        selected: false,
    },
    {
        value: null,
        selected: false,
    },
    {
        value: null,
        selected: false,
    },
    {
        value: null,
        selected: false,
    },
    {
        value: null,
        selected: false,
    },
];
var defaults = {
    spots: Array.from({ length: 16 }, function (x) { return ({
        value: null,
        possibleValue: null,
        taken: false,
    }); }),
    dice: diceDefaultValues,
    numberOfThrowsLeft: 3,
    showingPossibleValues: false,
};


/***/ }),

/***/ "./src/app/store/app.state.ts":
/*!************************************!*\
  !*** ./src/app/store/app.state.ts ***!
  \************************************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.actions */ "./src/app/store/app.actions.ts");
/* harmony import */ var _app_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.model */ "./src/app/store/app.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppState = /** @class */ (function () {
    function AppState() {
    }
    AppState_1 = AppState;
    AppState.sum1 = function (state) {
        return state.spots
            .filter(function (_, index) { return index < 6; })
            .map(function (spot) { return spot.value; })
            .reduce(function (acc, cur) { return acc + cur; });
    };
    AppState.bonusValue = function (state) {
        return AppState_1.sum1(state) >= 63 ? 50 : 0;
    };
    AppState.sum2 = function (state) {
        return state.spots
            .filter(function (_, index) { return index >= 6; })
            .map(function (spot) { return spot.value; })
            .reduce(function (acc, cur) { return acc + cur; });
    };
    AppState.bonus = function (state) {
        var numberOfTakenAtTop = state.spots
            .filter(function (_, index) { return index < 6; })
            .map(function (spot) { return (spot.taken ? 1 : 0); })
            .reduce(function (acc, cur) { return acc + cur; }, 0);
        return numberOfTakenAtTop >= 6 ? AppState_1.bonusValue(state) : null;
    };
    AppState.upperSum = function (state) {
        return AppState_1.sum1(state) + AppState_1.bonus(state);
    };
    AppState.totalSum = function (state) {
        return (AppState_1.sum1(state) + AppState_1.bonusValue(state) + AppState_1.sum2(state));
    };
    AppState.prototype.throw = function (context) {
        var _this = this;
        var state = context.getState();
        var newDice = state.dice.map(function (d) {
            return d.selected
                ? d
                : {
                    value: _this.getRandomDiceValue(),
                    selected: d.selected,
                };
        });
        context.patchState({
            dice: newDice,
            numberOfThrowsLeft: state.numberOfThrowsLeft > 0 ? state.numberOfThrowsLeft - 1 : 0,
            spots: this.newSpotsForDice(state.spots, newDice),
            showingPossibleValues: true,
        });
    };
    AppState.prototype.toggleDiceSelection = function (context, action) {
        var state = context.getState();
        context.patchState({
            dice: state.dice.map(function (d, index) {
                return index === action.diceIndex
                    ? {
                        value: d.value,
                        selected: !d.selected,
                    }
                    : d;
            }),
        });
    };
    AppState.prototype.selectSpot = function (context, action) {
        var state = context.getState();
        var newSpots = state.spots.slice();
        var selectedSpot = state.spots[action.spotIndex];
        newSpots[action.spotIndex] = __assign({}, selectedSpot, { taken: true, value: selectedSpot.possibleValue });
        context.patchState({
            spots: newSpots,
            numberOfThrowsLeft: 3,
            dice: _app_model__WEBPACK_IMPORTED_MODULE_2__["diceDefaultValues"],
            showingPossibleValues: false,
        });
    };
    AppState.prototype.getRandomDiceValue = function () {
        return this.getRandomInt(1, 6);
    };
    AppState.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    AppState.prototype.newSpotsForDice = function (spots, dice) {
        var diceValues = dice.map(function (x) { return x.value; });
        return spots == null
            ? spots
            : [
                __assign({}, spots[0], { possibleValue: this.best(diceValues, 1) }),
                __assign({}, spots[1], { possibleValue: this.best(diceValues, 2) }),
                __assign({}, spots[2], { possibleValue: this.best(diceValues, 3) }),
                __assign({}, spots[3], { possibleValue: this.best(diceValues, 4) }),
                __assign({}, spots[4], { possibleValue: this.best(diceValues, 5) }),
                __assign({}, spots[5], { possibleValue: this.best(diceValues, 6) }),
                __assign({}, spots[6], { possibleValue: this.bestOnePair(diceValues) }),
                __assign({}, spots[7], { possibleValue: this.bestTwoPairs(diceValues) }),
                __assign({}, spots[8], { possibleValue: this.bestThreeSame(diceValues) }),
                __assign({}, spots[9], { possibleValue: this.bestFourSame(diceValues) }),
                __assign({}, spots[10], { possibleValue: this.smallStraight(diceValues) }),
                __assign({}, spots[11], { possibleValue: this.bigStraight(diceValues) }),
                __assign({}, spots[12], { possibleValue: this.kak(diceValues) }),
                __assign({}, spots[13], { possibleValue: this.chance(diceValues) }),
                __assign({}, spots[14], { possibleValue: this.yatzy(diceValues) }),
            ];
    };
    AppState.prototype.diceCounts = function (diceValues) {
        return [6, 5, 4, 3, 2, 1].map(function (x) { return ({
            dice: x,
            count: diceValues.filter(function (s) { return s === x; }).length,
        }); });
    };
    AppState.prototype.best = function (diceValues, no) {
        return diceValues.reduce(function (acc, cur) { return (cur === no ? acc + cur : acc); }, 0);
    };
    AppState.prototype.bestOnePair = function (diceValues) {
        return this.diceCounts(diceValues).reduce(function (acc, cur) { return (cur.count >= 2 && cur.dice * 2 > acc ? cur.dice * 2 : acc); }, 0);
    };
    AppState.prototype.bestTwoPairs = function (diceValues) {
        var twoPairs = this.diceCounts(diceValues).reduce(function (acc, cur) {
            var newPairs = {
                highestPair: acc.highestPair,
                nextHighestPair: acc.nextHighestPair,
            };
            if (cur.count >= 4) {
                if (cur.dice * 2 > acc.highestPair) {
                    newPairs.highestPair = cur.dice * 2;
                }
                if (cur.dice * 2 > acc.nextHighestPair) {
                    newPairs.nextHighestPair = cur.dice * 2;
                }
            }
            else if (cur.count >= 2) {
                if (cur.dice * 2 > acc.highestPair) {
                    newPairs.highestPair = cur.dice * 2;
                }
                else if (cur.dice * 2 > acc.nextHighestPair) {
                    newPairs.nextHighestPair = cur.dice * 2;
                }
            }
            return newPairs;
        }, { highestPair: 0, nextHighestPair: 0 });
        return twoPairs.highestPair > 0 && twoPairs.nextHighestPair > 0
            ? twoPairs.highestPair + twoPairs.nextHighestPair
            : 0;
    };
    AppState.prototype.bestThreeSame = function (diceValues) {
        return this.diceCounts(diceValues).reduce(function (acc, cur) { return (cur.count >= 3 && cur.dice * 3 > acc ? cur.dice * 3 : acc); }, 0);
    };
    AppState.prototype.bestFourSame = function (diceValues) {
        return this.diceCounts(diceValues).reduce(function (acc, cur) { return (cur.count >= 4 && cur.dice * 4 > acc ? cur.dice * 4 : acc); }, 0);
    };
    AppState.prototype.smallStraight = function (diceValues) {
        return diceValues.some(function (x) { return x === 1; }) &&
            diceValues.some(function (x) { return x === 2; }) &&
            diceValues.some(function (x) { return x === 3; }) &&
            diceValues.some(function (x) { return x === 4; }) &&
            diceValues.some(function (x) { return x === 5; })
            ? 15
            : 0;
    };
    AppState.prototype.bigStraight = function (diceValues) {
        return diceValues.some(function (x) { return x === 2; }) &&
            diceValues.some(function (x) { return x === 3; }) &&
            diceValues.some(function (x) { return x === 4; }) &&
            diceValues.some(function (x) { return x === 5; }) &&
            diceValues.some(function (x) { return x === 6; })
            ? 20
            : 0;
    };
    AppState.prototype.kak = function (diceValues) {
        var kakPairs = this.diceCounts(diceValues).reduce(function (acc, cur) {
            if (cur.count >= 3) {
                return {
                    highestTreeSame: cur.dice * 3,
                    highestTwoSame: acc.highestTwoSame,
                };
            }
            if (cur.count >= 2) {
                return cur.dice * 2 > acc.highestTwoSame
                    ? {
                        highestTreeSame: acc.highestTreeSame,
                        highestTwoSame: cur.dice * 2,
                    }
                    : acc;
            }
            return acc;
        }, { highestTreeSame: 0, highestTwoSame: 0 });
        return kakPairs.highestTreeSame > 0 && kakPairs.highestTwoSame > 0
            ? kakPairs.highestTreeSame + kakPairs.highestTwoSame
            : 0;
    };
    AppState.prototype.chance = function (diceValues) {
        return diceValues.reduce(function (acc, cur) { return cur + acc; }, 0);
    };
    AppState.prototype.yatzy = function (diceValues) {
        return this.diceCounts(diceValues).reduce(function (acc, cur) { return (cur.count === 5 ? 50 : acc); }, 0);
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_actions__WEBPACK_IMPORTED_MODULE_1__["ThrowDice"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppState.prototype, "throw", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_actions__WEBPACK_IMPORTED_MODULE_1__["ToggleDiceSelection"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _app_actions__WEBPACK_IMPORTED_MODULE_1__["ToggleDiceSelection"]]),
        __metadata("design:returntype", void 0)
    ], AppState.prototype, "toggleDiceSelection", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_app_actions__WEBPACK_IMPORTED_MODULE_1__["SelectSpot"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _app_actions__WEBPACK_IMPORTED_MODULE_1__["SelectSpot"]]),
        __metadata("design:returntype", void 0)
    ], AppState.prototype, "selectSpot", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [_app_model__WEBPACK_IMPORTED_MODULE_2__["AppStateModel"]]),
        __metadata("design:returntype", void 0)
    ], AppState, "bonus", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [_app_model__WEBPACK_IMPORTED_MODULE_2__["AppStateModel"]]),
        __metadata("design:returntype", void 0)
    ], AppState, "upperSum", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [_app_model__WEBPACK_IMPORTED_MODULE_2__["AppStateModel"]]),
        __metadata("design:returntype", void 0)
    ], AppState, "totalSum", null);
    AppState = AppState_1 = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'app',
            defaults: _app_model__WEBPACK_IMPORTED_MODULE_2__["defaults"],
        })
    ], AppState);
    return AppState;
    var AppState_1;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Data/Projekt/Yatzy/yatzy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map