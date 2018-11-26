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
var Generated_SurveyAnswer_Service_1 = require("./Generated.SurveyAnswer.Service");
var Generated_Question_Service_1 = require("../Question/Generated.Question.Service");
var Generated_Answer_Service_1 = require("../Answer/Generated.Answer.Service");
var SurveyAnswerComponent = /** @class */ (function () {
    function SurveyAnswerComponent(surveyAnswerService, questionService, answerService, router, route) {
        this.surveyAnswerService = surveyAnswerService;
        this.questionService = questionService;
        this.answerService = answerService;
        this.router = router;
        this.route = route;
        this.questionList = [];
        this.Answer = [];
        this.init();
    }
    SurveyAnswerComponent.prototype.init = function () {
        var _this = this;
        this.SurveyFormId = +this.route.snapshot.paramMap.get('SurveyFormId');
        this.surveyAnswerService.getFormInfoById(this.SurveyFormId)
            .subscribe(function (response) {
            _this.FormName = response.SurveyFormName;
            console.log(_this.FormName);
        });
        this.surveyAnswerService.getQuestionResponse(this.SurveyFormId)
            .subscribe(function (response) {
            _this.questionList = response;
            //console.log("QA", this.questionList);
            var questionDemoList = response;
            for (var i = 0; i < _this.questionList.length; i++) {
                _this.Answer.push({
                    "Text": "",
                    "QuestionID": _this.questionList[i].QuestionID
                });
                //this.questionList[i]["AnswerText"] = this.questionList[i]["AnswerInfo"][i]["AnswerText"];
            }
            console.log("Answer", _this.questionList);
        });
    };
    SurveyAnswerComponent = __decorate([
        core_1.Component({
            selector: 'app-survey-answer',
            templateUrl: '../app/SurveyAnswer/Generated.SurveyAnswer.html',
            providers: [Generated_SurveyAnswer_Service_1.SurveyAnswerService, Generated_Question_Service_1.QuestionService, Generated_Answer_Service_1.AnswerService]
        }),
        __metadata("design:paramtypes", [Generated_SurveyAnswer_Service_1.SurveyAnswerService, Generated_Question_Service_1.QuestionService, Generated_Answer_Service_1.AnswerService, router_1.Router, router_1.ActivatedRoute])
    ], SurveyAnswerComponent);
    return SurveyAnswerComponent;
}());
exports.SurveyAnswerComponent = SurveyAnswerComponent;
//# sourceMappingURL=Generated.SurveyAnswer.Component.js.map