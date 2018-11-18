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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/answers/answers.component.css":
/*!***********************************************!*\
  !*** ./src/app/answers/answers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ansArea{\r\n  width: auto;\r\n  position: relative;\r\n  margin-left:50px;\r\n}\r\n.ansArea ul{\r\n  list-style:none;\r\n  padding:10px;\r\n  line-height:50px;\r\n}\r\n.ansArea .lbl{\r\n  border: 1px solid black;\r\n  border-radius: 40px;\r\n  height: 56px;\r\n  padding-left: 60px;\r\n  width: 250px;\r\n  display: inline-block;\r\n  line-height: 58px;\r\n  position: relative;\r\n  left: -61px;\r\n  float: right;\r\n  top: 13px;\r\n  font-size: 22px;\r\n  font-family: sans-serif;\r\n  background-color: white;\r\n}\r\n.ansArea label{\r\n  margin-left:30px;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n.ansArea .playBtn{\r\n  font-size: 84px !important;\r\n  position: relative;\r\n  left: 3px;\r\n  z-index: 1;\r\n  top: 7px;\r\n  background-color: #0072ff;\r\n  height: 70px;\r\n  width: 70px;\r\n  line-height: 70px;\r\n  border-radius: 70px;\r\n  cursor: pointer;\r\n  color:#cfcfcf;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.ansArea .playBtn:hover{\r\n  color:#fff;\r\n}\r\n.ansArea .lbl:hover ~ .playBtn {\r\n  color: #fff;\r\n}\r\n.playBtn.yellowbg {\r\n  color:yellow;\r\n}\r\n.ansArea .playBtn:hover{\r\n  background-position:-116px -115px\r\n}\r\nbutton{\r\n  margin-right: 20px;\r\n  position: relative;\r\n  left: 15px;\r\n  border: 2px solid white;\r\n  color: white;\r\n  font-size: 19px;\r\n  font-family: serif;\r\n  font-weight: bold;\r\n  width: 85px;\r\n  height: 35px;\r\n  cursor: pointer;\r\n  background: #87e0fd; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom, #87e0fd 0%,#53cbf1 40%,#05abe0 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#87e0fd', endColorstr='#05abe0',GradientType=0 ); /* IE6-9 */\r\n}\r\nbutton:hover:enabled{\r\n  background: #87e0fd; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\n  background: linear-gradient(to bottom, #87e0fd 0%,#53cbf1 66%,#05abe0 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#87e0fd', endColorstr='#05abe0',GradientType=0 ); /* IE6-9 */\r\n}\r\nbutton:disabled{\r\n  color:#adafae;\r\n  background: #87e0fd;\r\n}\r\n.roundbtn {\r\n  border-radius:35px;\r\n  margin-right: 20px\r\n}\r\n.buttonWrapper{\r\n  text-align: right;\r\n  width: 328px;\r\n}\r\ninput{\r\n  position: relative;\r\n  left: 24px;\r\n}\r\n.ansArea .playBtn.active{\r\n  color:yellow;\r\n}\r\n.ansArea .lbl label.isCorrectAns{\r\n  color:rgb(4, 195, 4);\r\n}\r\n.ansArea .lbl label.isWrongAns{\r\n  color:red;\r\n}\r\n.ariaAlert {\r\n  margin-left: 40px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/answers/answers.component.html":
/*!************************************************!*\
  !*** ./src/app/answers/answers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span role=\"main\" class=\"ansArea\" flex=\"50\">\n  <ul>\n   <li *ngFor=\"let ans of displaySet['o'] let idx = index\">\n      <input\n      name='ansGroup'\n      type='radio'\n      id='{{idx}}'\n      [value]='ans'\n      [(ngModel)] = 'correctAns'\n      (change)='checkAns(idx)'\n     />\n     <div class=\"lbl\">\n       <label [for]=idx #radio_label  [ngClass]=\"{'isCorrectAns':result.correct == ans, 'isWrongAns':result.wrong == ans}\" (click)='checkAns(idx)'>{{ans}}</label>\n      </div>\n     <i class=\"fa playBtn\" [ngClass]=\"{'active':correctAns == ans}\"  #playBtn (click)=\"radio_label.click()\">&#xf144;</i>\n   </li>\n\n </ul>\n <span class=\"ariaAlert\" role=\"alert\" [attr.aria-label]=\"ariaResult\" >{{ariaResult}}</span>\n <div class=\"buttonWrapper\">\n  <button aria-label=\"reset\" class=\"roundbtn\" (click)=reset()>Reset</button>\n  <button aria-label=\"submit\" class=\"roundbtn\" [disabled]=\"disableSubmit\" (click)=authenticateAns()>Submit</button>\n </div>\n"

/***/ }),

/***/ "./src/app/answers/answers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/answers/answers.component.ts ***!
  \**********************************************/
/*! exports provided: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersComponent", function() { return AnswersComponent; });
/* harmony import */ var _question_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../question-data.service */ "./src/app/question-data.service.ts");
/* harmony import */ var _milestone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../milestone.service */ "./src/app/milestone.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswersComponent = /** @class */ (function () {
    function AnswersComponent(questionDataService, milestoneService) {
        this.questionDataService = questionDataService;
        this.milestoneService = milestoneService;
        this.questions = []; // question data
        this.displayIndex = 0; // index of question data array
        this.displaySet = []; // currently displayed question data which is at displayIndex
        this.isCorrectAns = false; // holds boolean value ie if an answer is correct
        this.retryCount = 0; // number of retrys  count
        this.correctAns = ''; // holds the value of correct answer at a given point of time
        this.correctAnsCount = 0; // holds overall corretly answered count at the given time
        this.disableSubmit = true; // controls the submit button state
        this.result = { 'correct': '', 'wrong': '' }; // holds the correct and incorrect ans for a question set/ displaySet
        this.ariaResult = '';
    } // subcribed to questionDataService and milestoneService
    AnswersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getQuestionData();
        this.questionDataService.currentIndex.subscribe(function (indexVal) { return _this.displayIndex = indexVal; });
    };
    /*
    ** get the question data from service
    */
    AnswersComponent.prototype.getQuestionData = function () {
        this.questions = this.questionDataService.getQuestionData();
        this.displaySet = this.questions[this.displayIndex];
    };
    /*
    ** check if the selected answer is correct or not and set respective variables.
    ** This method is just an alternative to fetching currently selected radio when submit is clicked.
    */
    AnswersComponent.prototype.checkAns = function (idx) {
        if (this.displaySet['a'] === this.displaySet['o'][idx]) {
            this.isCorrectAns = true;
        }
        else {
            this.isCorrectAns = false;
        }
        this.disableSubmit = false;
    };
    /*
    ** decide if an answer is correct
    */
    AnswersComponent.prototype.authenticateAns = function () {
        var _this = this;
        if (this.isCorrectAns) {
            this.ariaResult = 'correct answer';
            this.result.correct = this.displaySet['a']; // set correct answer. Used for marking green in answers
            setTimeout(function () { return _this.markCorrect(); }, 3000);
        }
        else {
            this.ariaResult = 'wrong answer';
            this.retryCount++;
            var wrong = this.correctAns;
            this.result.wrong = wrong;
            this.correctAns = null; // remove the selection so that previously selected answer does not remain selected in next set of question
            if (this.retryCount > 1) {
                this.result.wrong = wrong; // set incorrect answer. Used for marking red in answers
                // alert('Not correct, here is the correct answer');
                this.correctAns = this.displaySet['a'];
                this.result.correct = this.displaySet['a'];
                setTimeout(function () { return _this.markCorrect(); }, 3000);
            }
            else {
                // alert('Oops! Give it another try');
            }
        }
        this.disableSubmit = true;
    };
    /*
    ** if everyting is correct in a given set, move to next set of question
    */
    AnswersComponent.prototype.markCorrect = function () {
        this.displayIndex++; // advance the question array index
        this.correctAnsCount++; // increment the correct answer count
        this.setMilestone(this.correctAnsCount);
        // advance displayIndex  but only if its not last set of question
        if (this.questions.length !== this.displayIndex) {
            this.questionDataService.changeIndex(this.displayIndex);
            this.displaySet = this.questions[this.displayIndex];
            this.retryCount = 0;
            this.correctAns = null;
            // reset selection of last answer
            this.result.correct = '';
            this.result.wrong = '';
            this.ariaResult = '';
        }
    };
    /*
    ** set the milestone depending upon number of correct answers
    ** This method calls milestoneService method changeMilestone, which sets currentMilestone
    ** currentMilestone is subscribed by other components like lock and pagination components
    */
    AnswersComponent.prototype.setMilestone = function (pCorrectAnsCount) {
        // clear 1st milestone upon completion of first two answers
        // clear 2nd milestone upon completion of next three answers ie 5th ans
        // clear 3rd  milestone upon completion of next three answers ie 8th ans
        if (pCorrectAnsCount === 2) {
            this.milestoneService.changeMilestone(1);
        }
        if (pCorrectAnsCount === 5) {
            this.milestoneService.changeMilestone(2);
        }
        if (pCorrectAnsCount === 8) {
            this.milestoneService.changeMilestone(3);
        }
        if (pCorrectAnsCount === 0) {
            this.milestoneService.changeMilestone(0);
        }
    };
    /*
   ** reset everything.
   */
    AnswersComponent.prototype.reset = function () {
        this.displayIndex = 0;
        this.questionDataService.changeIndex(this.displayIndex);
        this.displaySet = this.questions[this.displayIndex]; // dont need to call everytime. ned to check
        this.retryCount = 0;
        this.setMilestone(0);
        this.correctAns = null;
        this.disableSubmit = true;
        // reset selection of last answer
        this.result.correct = '';
        this.result.wrong = '';
        this.ariaResult = '';
    };
    AnswersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-answers',
            template: __webpack_require__(/*! ./answers.component.html */ "./src/app/answers/answers.component.html"),
            styles: [__webpack_require__(/*! ./answers.component.css */ "./src/app/answers/answers.component.css")]
        }),
        __metadata("design:paramtypes", [_question_data_service__WEBPACK_IMPORTED_MODULE_0__["QuestionDataService"],
            _milestone_service__WEBPACK_IMPORTED_MODULE_1__["MilestoneService"]])
    ], AnswersComponent);
    return AnswersComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  background-color:#ffff00;\r\n}\r\n.mainWrapper{\r\n  background: url('bodybg.jpg') repeat;\r\n}\r\n.middleWrapper{\r\n\tdisplay:flex;\r\n  padding-left: 48px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"mainWrapper\">\n <app-header></app-header>\n <app-question></app-question>\n <div class=\"middleWrapper\">\n  <app-lock></app-lock>\n  <app-answers></app-answers>\n </div>\n <app-footer></app-footer>\n</div>\n\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _answers_answers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./answers/answers.component */ "./src/app/answers/answers.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/lock/lock.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _answers_answers_component__WEBPACK_IMPORTED_MODULE_5__["AnswersComponent"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"],
                _lock_lock_component__WEBPACK_IMPORTED_MODULE_7__["LockComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_11__["HelpComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n  background-color: #ed1c24;\r\n  height:100px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <app-pagination></app-pagination>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\r\n\twidth:100%;\r\n  background-color:#d1eef9;\r\n  background-image:url('cartoon-lizard.png'), url('cartoon-tree.png');\r\n  background-position: left, right;\r\n  background-repeat: no-repeat;\r\n\theight:86px;\r\n  }\r\n\r\n  .examTitle{\r\n    position: relative;\r\n    top: 34px;\r\n    left: 174px;\r\n    color:#880f14;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"examTitle\">\n    <h1>Your Turn: Vocabulary</h1>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  help works!\n</p>\n"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
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

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/lock/lock.component.css":
/*!*****************************************!*\
  !*** ./src/app/lock/lock.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lock{\r\n\r\n  }\r\n"

/***/ }),

/***/ "./src/app/lock/lock.component.html":
/*!******************************************!*\
  !*** ./src/app/lock/lock.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"lock\">\n    <img alt=\"lock image\" src=\"/dist/assets/lock/images/lock{{imageNumber}}.png\" />\n  </div>\n"

/***/ }),

/***/ "./src/app/lock/lock.component.ts":
/*!****************************************!*\
  !*** ./src/app/lock/lock.component.ts ***!
  \****************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _milestone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../milestone.service */ "./src/app/milestone.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LockComponent = /** @class */ (function () {
    function LockComponent(milestoneService) {
        this.milestoneService = milestoneService;
        this.currentMilestone = 0; // holds current milestone reached at a given point of time
        this.prefixNum = [0, 0, 0]; // used for lock image file naming compliance
        this.postfixNum = 1; // used for lock image file naming compliance
        this.imageNumber = ''; // holds the image number eg format 0001
        this.dialStoppage = { '1': 112, '2': 252, '3': 456 }; // denotes the image number where the lock rotates for a milestone completion
    } // subscribe to MilestoneService
    LockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.milestoneService.currentMilestone.subscribe(function (mileStoneNum) {
            _this.turnLockDial(mileStoneNum); // turn lock dial as the milestone changes
            _this.currentMilestone = mileStoneNum;
        });
        this.imageNumber = this.generateImageNum(this.postfixNum); // initialize image
    };
    /*
    ** generates image number in a format 0001, 0010 etc
    */
    LockComponent.prototype.generateImageNum = function (postFix) {
        if ((postFix.toString().length + this.prefixNum.length) > 4) {
            this.prefixNum.pop();
            return this.prefixNum.join('') + postFix;
        }
        else {
            return this.prefixNum.join('') + postFix;
        }
    };
    /*
    ** turn the lock dial to a specified image number depending upon milestone reached
    */
    LockComponent.prototype.turnLockDial = function (pCurrentMilestone) {
        var _this = this;
        if (pCurrentMilestone > 0) {
            var interval_1 = setInterval(function () {
                _this.postfixNum++;
                _this.imageNumber = _this.generateImageNum(_this.postfixNum + 70);
                console.log(_this.dialStoppage[pCurrentMilestone] + '===' + _this.postfixNum);
                if (_this.dialStoppage[pCurrentMilestone] === _this.postfixNum + 70) {
                    // console.log('stop');
                    clearInterval(interval_1);
                    return;
                }
            }, 50); // animation speed is 50
        }
        else {
            // reset lock
            this.imageNumber = '0001';
        }
    };
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock',
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/lock/lock.component.html"),
            styles: [__webpack_require__(/*! ./lock.component.css */ "./src/app/lock/lock.component.css")]
        }),
        __metadata("design:paramtypes", [_milestone_service__WEBPACK_IMPORTED_MODULE_1__["MilestoneService"]])
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/milestone.service.ts":
/*!**************************************!*\
  !*** ./src/app/milestone.service.ts ***!
  \**************************************/
/*! exports provided: MilestoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilestoneService", function() { return MilestoneService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Milestone service will provide current milestone, which will be changed by answers componenent from time to time as answers get completed
 A component subscribing to this service will get the current milestone and can change there status accordingly
*/


var MilestoneService = /** @class */ (function () {
    function MilestoneService() {
        this.curMilestoneSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.currentMilestone = this.curMilestoneSource.asObservable();
    }
    MilestoneService.prototype.changeMilestone = function (milestoneNumber) {
        this.curMilestoneSource.next(milestoneNumber);
    };
    MilestoneService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MilestoneService);
    return MilestoneService;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pagination/pagination.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paginationDots{\r\n    width: 124px;\r\n    list-style: none;\r\n    position: relative;\r\n    top: 34px;\r\n    left: 41%;\r\n  }\r\n  .paginationDots li{\r\n    float:left;\r\n    margin:10px;\r\n  }\r\n  .paginationDots li span{\r\n    display:block;\r\n    width:20px;\r\n    height:20px;\r\n    border-radius: 20px;\r\n    box-shadow: inset 0 5px 12px -5px #333;\r\n  }\r\n  .paginationDots li span.active{\r\n    background-color:#ffff00;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/pagination/pagination.component.html":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"paginationDots\" aria-live=\"assertive\">\n  <li><span class=\"{{ currentMilestone === 0 ? 'active': '' }}\" aria-label=\"milestone 1\" [attr.aria-current]=\"currentMilestone === 0\"></span></li>\n  <li><span class=\"{{ currentMilestone === 1 ? 'active': '' }}\" aria-label=\"milestone 1 complete. milestone 2\" [attr.aria-current]=\"currentMilestone === 1\"></span></li>\n  <li><span class=\"{{ currentMilestone === 2 || currentMilestone === 3  ? 'active': '' }}\" aria-label=\"milestone 2 complete. milestone 3\" [attr.aria-current]=\"currentMilestone === 2\"></span></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _milestone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../milestone.service */ "./src/app/milestone.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(milestoneService) {
        this.milestoneService = milestoneService;
        this.currentMilestone = 0;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.milestoneService.currentMilestone.subscribe(function (mileStoneNum) { return _this.currentMilestone = mileStoneNum; });
    };
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [_milestone_service__WEBPACK_IMPORTED_MODULE_1__["MilestoneService"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/question-data.service.ts":
/*!******************************************!*\
  !*** ./src/app/question-data.service.ts ***!
  \******************************************/
/*! exports provided: QuestionDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDataService", function() { return QuestionDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 QuestionDataService will provide question and answers data and also maintain current index ( index number of question array)
 index will be changed by answers componenent from time to time as answers get completed
 A componenet subscribing to QuestionDataService will get question data as well as current index,
 which it can use to goto specific question set
 */


var QuestionDataService = /** @class */ (function () {
    function QuestionDataService() {
        this.curIndexSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.currentIndex = this.curIndexSource.asObservable();
    }
    // updates the index of question & ans set array
    QuestionDataService.prototype.changeIndex = function (indexVal) {
        this.curIndexSource.next(indexVal);
    };
    // returns question and answers json data
    QuestionDataService.prototype.getQuestionData = function () {
        return [
            {
                q: 'The little lost sheep are in ____________!',
                o: [
                    'partner',
                    'special',
                    'danger',
                    'splendid'
                ],
                a: 'danger'
            },
            {
                q: 'Meg is my _____________ in math.',
                o: [
                    'danger',
                    'partner',
                    'splendid',
                    'special'
                ],
                a: 'partner'
            },
            {
                q: 'The queen lives in a _____________ castle.',
                o: [
                    'partner',
                    'splendid',
                    'danger',
                    'special'
                ],
                a: 'splendid'
            },
            {
                q: 'My _____________ and I will work together as a team.',
                o: [
                    'special',
                    'danger',
                    'partner',
                    'splendid'
                ],
                a: 'partner'
            },
            {
                q: 'That hat is _____________ because Gran gave it to me.',
                o: [
                    'danger',
                    'partner',
                    'special',
                    'splendid'
                ],
                a: 'special'
            },
            {
                q: 'Small fish may face _____________ in the big sea.',
                o: [
                    'splendid',
                    'special',
                    'danger',
                    'partner'
                ],
                a: 'danger'
            },
            {
                q: 'I thanked my host for a _____________ meal.',
                o: [
                    'splendid',
                    'danger',
                    'special',
                    'partner'
                ],
                a: 'splendid'
            },
            {
                q: 'He will get _____________ glasses to help him see.',
                o: [
                    'danger',
                    'special',
                    'partner',
                    'splendid'
                ],
                a: 'special'
            }
        ];
    };
    QuestionDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], QuestionDataService);
    return QuestionDataService;
}());



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".questArea{\r\n\twidth: 100%;\r\n    position: relative;\r\n    left: 51px;\r\n  }\r\n  .questArea h2{\r\n    font-family: sans-serif;\r\n    color: #fff;\r\n  }\r\n  .questArea h3{\r\n  border: 5px solid #4c4c4c;\r\n  width: 850px;\r\n  background-color: #fff;\r\n  padding: 18px;\r\n  font-family:cursive;\r\n}\r\n"

/***/ }),

/***/ "./src/app/question/question.component.html":
/*!**************************************************!*\
  !*** ./src/app/question/question.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"questArea\">\n  <div class=\"questDesc\">\n\n   <h2>Read each sentence. Choose the vocabulary word that best completes the sentence.</h2>\n  </div>\n  <h3 class=\"questText\"  aria-live=\"polite\">{{questions[displayIndex]['q']}}</h3>\n</div>\n"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _question_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../question-data.service */ "./src/app/question-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(questionDataService) {
        this.questionDataService = questionDataService;
        this.questions = [];
        this.displayIndex = 0;
    }
    // displaySet = [];
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionDataService.currentIndex.subscribe(function (indexVal) { return _this.displayIndex = indexVal; });
        this.getQuestionData();
    };
    QuestionComponent.prototype.getQuestionData = function () {
        this.questions = this.questionDataService.getQuestionData();
        // this.displaySet = this.questions[this.displayIndex];
    };
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [_question_data_service__WEBPACK_IMPORTED_MODULE_1__["QuestionDataService"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! D:\xampp\htdocs\assignment\angular5\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map