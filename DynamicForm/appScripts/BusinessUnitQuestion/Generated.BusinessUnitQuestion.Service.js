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
var BusinessUnitQuestionService = /** @class */ (function () {
    function BusinessUnitQuestionService(_http) {
        this._http = _http;
    }
    BusinessUnitQuestionService.prototype.getBusinessUnitQuestion = function () {
        return this._http.get('api/BusinessUnitQuestions/GetBusinessUnitQuestions')
            .map(function (response) { return response.json(); });
    };
    BusinessUnitQuestionService.prototype.getBusinessUnitQuestionByID = function (BusinessUnitQuestionID) {
        var param = { id: BusinessUnitQuestionID };
        return this._http.get('api/BusinessUnitQuestions/GetBusinessUnitQuestionByID?id=' + BusinessUnitQuestionID)
            .map(function (response) { return response.json(); });
    };
    BusinessUnitQuestionService.prototype.addOrUpdateBusinessUnitQuestion = function (BusinessUnitQuestion) {
        var param = { businessunitquestion: BusinessUnitQuestion };
        return this._http.post('api/BusinessUnitQuestions/AddBusinessUnitQuestion', param).catch(this.handleError);
    };
    BusinessUnitQuestionService.prototype.deleteBusinessUnitQuestion = function (BusinessUnitQuestionID) {
        return this._http.delete('api/BusinessUnitQuestions/DeleteBusinessUnitQuestion?id=' + BusinessUnitQuestionID)
            .catch(this.handleError);
    };
    BusinessUnitQuestionService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.json().error || 'error');
    };
    BusinessUnitQuestionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BusinessUnitQuestionService);
    return BusinessUnitQuestionService;
}());
exports.BusinessUnitQuestionService = BusinessUnitQuestionService;
//# sourceMappingURL=Generated.BusinessUnitQuestion.Service.js.map