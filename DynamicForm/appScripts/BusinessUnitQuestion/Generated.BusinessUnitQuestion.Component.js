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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Generated_BusinessUnitQuestion_Service_1 = require("./Generated.BusinessUnitQuestion.Service");
var BusinessUnitQuestionComponent = /** @class */ (function () {
    function BusinessUnitQuestionComponent(businessunitquestionService) {
        this.businessunitquestionService = businessunitquestionService;
        this.BusinessUnitQuestion = {};
        this.GetBusinessUnitQuestion();
    }
    BusinessUnitQuestionComponent.prototype.GetBusinessUnitQuestion = function () {
        var _this = this;
        this.businessunitquestionService.getBusinessUnitQuestion()
            .subscribe(function (result) { _this.BusinessUnitQuestionList = result; }, function (error) { return console.log("error : " + error); }, function () { });
    };
    BusinessUnitQuestionComponent.prototype.GetBusinessUnitQuestionById = function (BusinessUnitQuestionID) {
        var _this = this;
        this.businessunitquestionService.getBusinessUnitQuestionByID(BusinessUnitQuestionID)
            .subscribe(function (result) { _this.BusinessUnitQuestion = result; }, function (error) { return console.log("error : " + error); }, function () { });
    };
    BusinessUnitQuestionComponent.prototype.SaveBusinessUnitQuestion = function (BusinessUnitQuestion) {
        var _this = this;
        this.businessunitquestionService.addOrUpdateBusinessUnitQuestion(BusinessUnitQuestion)
            .subscribe(function (result) { return _this.GetBusinessUnitQuestion(); }, function (error) { return console.log("error : " + error); }, function () { console.log("Save completed!!!"); });
    };
    BusinessUnitQuestionComponent.prototype.DeleteBusinessUnitQuestion = function (BusinessUnitQuestionID) {
        var _this = this;
        this.businessunitquestionService.deleteBusinessUnitQuestion(BusinessUnitQuestionID)
            .subscribe(function (result) { return _this.GetBusinessUnitQuestion(); }, function (error) { return console.log("error : " + error); }, function () { console.log("Save completed!!!"); });
    };
    BusinessUnitQuestionComponent = __decorate([
        core_1.Component({
            selector: 'businessunitquestion',
            templateUrl: './Generated.BusinessUnitQuestion.html',
            providers: [Generated_BusinessUnitQuestion_Service_1.BusinessUnitQuestionService]
        }),
        __metadata("design:paramtypes", [Generated_BusinessUnitQuestion_Service_1.BusinessUnitQuestionService])
    ], BusinessUnitQuestionComponent);
    return BusinessUnitQuestionComponent;
}());
exports.BusinessUnitQuestionComponent = BusinessUnitQuestionComponent;
//# sourceMappingURL=Generated.BusinessUnitQuestion.Component.js.map