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
var router_1 = require("@angular/router");
var Generated_Question_Service_1 = require("./Generated.Question.Service");
var Generated_QuestionType_Service_1 = require("../QuestionType/Generated.QuestionType.Service");
var Generated_SurveyForm_Service_1 = require("../SurveyForm/Generated.SurveyForm.Service");
var Generated_SurveyAnswer_Service_1 = require("../SurveyAnswer/Generated.SurveyAnswer.Service");
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(questionService, questionTypeService, surveyFormService, surveyAnswerService, route) {
        this.questionService = questionService;
        this.questionTypeService = questionTypeService;
        this.surveyFormService = surveyFormService;
        this.surveyAnswerService = surveyAnswerService;
        this.route = route;
        this.Question = {};
        this.QuestionType = {};
        this.Option = {};
        this.OptionText = [];
        this.optionsArray = [];
        this.isVisible = true;
        this.init();
    }
    QuestionComponent.prototype.init = function () {
        var _this = this;
        this.SurveyFormId = +this.route.snapshot.paramMap.get('SurveyFormId');
        this.surveyAnswerService.getFormInfoById(this.SurveyFormId)
            .subscribe(function (response) {
            _this.formInfo = response;
            _this.formName = _this.formInfo.SurveyFormName;
        });
        this.questionTypeService.getQuestionType()
            .subscribe(function (response) {
            _this.questionTypes = response;
        });
        //this.surveyFormService.getSurveyFormName()
        //    .subscribe(responses => {
        //        this.SurveyFormNameInfo = responses.data;
        //        this.formName = this.SurveyFormNameInfo["SurveyFormName"];
        //        this.SurveyFormId = this.SurveyFormNameInfo["SurveyID"];
        //        console.log("SurveyForm", this.SurveyFormNameInfo);
        //    })
    };
    QuestionComponent.prototype.onSelect = function (QuestionTypeID) {
        this.optionNo = 0;
        this.optionsArray = [];
        this.OptionText = [];
        this.GetQuestionTypeByID(QuestionTypeID);
        this.isVisible = true;
    };
    QuestionComponent.prototype.onNoSelect = function (optionNo) {
        this.optionsArray = [];
        for (var i = 0; i < optionNo; i++) {
            this.optionsArray.push(i);
        }
    };
    QuestionComponent.prototype.GetQuestionTypeByID = function (QuestionTypeID) {
        var _this = this;
        this.questionTypeService.getQuestionTypeByID(QuestionTypeID)
            .subscribe(function (response) {
            _this.optionType = response.data.Name;
            console.log(_this.optionType);
        });
    };
    QuestionComponent.prototype.CreateQuestion = function (Question) {
        var _this = this;
        this.Question["SurveyFormId"] = this.SurveyFormId;
        if (Question.IsRequired == undefined) {
            Question.IsRequired = false;
        }
        this.questionService.addQuestion(Question, this.OptionText)
            .subscribe(function (data) {
            _this.AddQuestion = JSON.stringify(data);
            _this.questionTypeService.getQuestionType()
                .subscribe(function (response) {
                _this.questionTypes = response.data;
            });
            _this.isVisible = false;
            _this.init();
        });
        alertify.success("Question Added Successfully");
    };
    QuestionComponent = __decorate([
        core_1.Component({
            selector: 'question',
            templateUrl: '../app/Question/Generated.Question.html',
            providers: [Generated_Question_Service_1.QuestionService, Generated_QuestionType_Service_1.QuestionTypeService, Generated_SurveyForm_Service_1.SurveyFormService, Generated_SurveyAnswer_Service_1.SurveyAnswerService]
        }),
        __metadata("design:paramtypes", [Generated_Question_Service_1.QuestionService, Generated_QuestionType_Service_1.QuestionTypeService, Generated_SurveyForm_Service_1.SurveyFormService, Generated_SurveyAnswer_Service_1.SurveyAnswerService, router_1.ActivatedRoute])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=Generated.Question.Component.js.map