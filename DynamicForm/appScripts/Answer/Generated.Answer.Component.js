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
var Generated_Answer_Service_1 = require("./Generated.Answer.Service");
var Generated_Question_Service_1 = require("../Question/Generated.Question.Service");
var Generated_SurveyForm_Service_1 = require("../SurveyForm/Generated.SurveyForm.Service");
var Generated_SurveyAnswer_Service_1 = require("../SurveyAnswer/Generated.SurveyAnswer.Service");
var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(answerService, questionService, surveyFormService, surveyAnswerService, router, route) {
        this.answerService = answerService;
        this.questionService = questionService;
        this.surveyFormService = surveyFormService;
        this.surveyAnswerService = surveyAnswerService;
        this.router = router;
        this.route = route;
        this.question = {};
        this.questionList = [];
        this.option = {};
        this.optionList = [];
        this.cbOptions = [];
        this.Answer = [];
        this.AnsText = [];
        this.init();
    }
    AnswerComponent.prototype.init = function () {
        var _this = this;
        this.SurveyFormId = +this.route.snapshot.paramMap.get('SurveyFormId');
        this.questionService.getQuestions(this.SurveyFormId)
            .subscribe(function (response) {
            _this.questionList = response;
            var questionDemoList = response;
            for (var i = 0; i < _this.questionList.length; i++) {
                _this.Answer.push({
                    "Text": "",
                    "QuestionID": _this.questionList[i].QuestionID
                });
            }
            if (_this.questionList.length == 0) {
                alertify.alert("No Questions Found", "Please Add Questions For This Form");
                _this.router.navigate(['./question', _this.SurveyFormId]);
            }
        });
        this.surveyAnswerService.getFormInfoById(this.SurveyFormId)
            .subscribe(function (response) {
            _this.formInfo = response;
            _this.formName = _this.formInfo.SurveyFormName;
        });
    };
    AnswerComponent.prototype.SubmitAnswer = function (Answer) {
        var _this = this;
        for (var i = 0; i < this.Answer.length; i++) {
            this.Answer[i]["SurveyFormId"] = this.SurveyFormId;
        }
        this.answerService.saveAnswer(Answer)
            .subscribe(function (data) {
            _this.SaveAnswer = JSON.stringify(data);
        });
        alertify.alert("Answer", "Thank You For Your Response");
        this.init();
    };
    AnswerComponent.prototype.DeleteQuestionByID = function (QuestionID) {
        var _this = this;
        this.questionService.deleteQuestion(QuestionID)
            .subscribe(function (data) {
            _this.DeleteQuestion = JSON.stringify(data);
            _this.questionService.getQuestions(_this.SurveyFormId)
                .subscribe(function (response) {
                _this.questionList = response;
                for (var i = 0; i < _this.questionList.length; i++) {
                    _this.Answer.push({
                        "Text": "",
                        "QuestionID": _this.questionList[i].QuestionID
                    });
                }
            });
        });
    };
    AnswerComponent.prototype.ngInitQuestionID = function (index, questionID, answer) {
        answer[index].QuestionID = questionID;
    };
    AnswerComponent.prototype.setCheckboxAnswer = function (index, answerText, answer) {
        var answerTextValue = answer[index].Text;
        if (answerTextValue != "") {
            var searchValue = answerTextValue.search(answerText);
            if (searchValue == 0) {
                answerTextValue = answerTextValue.replace(answerText, "");
            }
            else if (searchValue > 0) {
                answerTextValue = answerTextValue.replace("," + answerText, "");
            }
            else {
                answerTextValue += "," + answerText;
            }
            answer[index].Text = answerTextValue;
        }
        else {
            answer[index].Text = answerText;
        }
    };
    AnswerComponent.prototype.clearForm = function () {
        this.ansOption = [];
        this.ansOptions = [];
        this.AnsText = [];
        this.cbOptions = [];
    };
    AnswerComponent = __decorate([
        core_1.Component({
            selector: 'app-answer',
            templateUrl: '../app/Answer/Generated.Answer.html',
            providers: [Generated_Answer_Service_1.AnswerService, Generated_Question_Service_1.QuestionService, Generated_SurveyForm_Service_1.SurveyFormService, Generated_SurveyAnswer_Service_1.SurveyAnswerService]
        }),
        __metadata("design:paramtypes", [Generated_Answer_Service_1.AnswerService, Generated_Question_Service_1.QuestionService, Generated_SurveyForm_Service_1.SurveyFormService, Generated_SurveyAnswer_Service_1.SurveyAnswerService, router_1.Router, router_1.ActivatedRoute])
    ], AnswerComponent);
    return AnswerComponent;
}());
exports.AnswerComponent = AnswerComponent;
//# sourceMappingURL=Generated.Answer.Component.js.map