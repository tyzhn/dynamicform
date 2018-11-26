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
var SurveyNameService = /** @class */ (function () {
    function SurveyNameService(_http) {
        this._http = _http;
    }
    SurveyNameService.prototype.saveSurveyFormName = function (FromInfo) {
        var param = { SurveyFormName: FromInfo };
        return this._http.post('api/Surveys/SaveSurveyFormName', param).catch(this.handleError);
    };
    SurveyNameService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.json().error || 'error');
    };
    SurveyNameService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SurveyNameService);
    return SurveyNameService;
}());
exports.SurveyNameService = SurveyNameService;
//# sourceMappingURL=Generated.SurveyName.Service.js.map