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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var QuestionService = /** @class */ (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.getQuestions = function (SurveyFormId) {
        var param = { id: SurveyFormId };
        return this._http.get('api/Questions/GetQuestions?id=' + SurveyFormId).map(function (response) { return response.json(); });
    };
    QuestionService.prototype.addQuestion = function (Question, optionText) {
        var param = { question: Question, optionText: optionText };
        return this._http.post('api/Questions/AddQuestion', param).catch(this.handleError);
    };
    QuestionService.prototype.deleteQuestion = function (QuestionID) {
        var param = { id: QuestionID };
        return this._http.delete('api/Questions/DeleteQuestionByID?id=' + QuestionID).catch(this.handleError);
    };
    QuestionService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().erro || 'error');
    };
    QuestionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=Generated.Question.Service.js.map