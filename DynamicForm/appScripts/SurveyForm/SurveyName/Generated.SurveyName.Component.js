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
var Generated_SurveyName_Service_1 = require("./Generated.SurveyName.Service");
var router_1 = require("@angular/router");
var Generated_SurveyForm_Service_1 = require("../Generated.SurveyForm.Service");
var SurveyNameComponent = /** @class */ (function () {
    function SurveyNameComponent(surveyNameService, router) {
        this.surveyNameService = surveyNameService;
        this.router = router;
    }
    SurveyNameComponent.prototype.SaveSurveyFormName = function (FormInfo) {
        var _this = this;
        this.surveyNameService.saveSurveyFormName(FormInfo)
            .subscribe(function (data) {
            _this.saveFormInfo = JSON.stringify(data);
            var JSONObject = JSON.parse(_this.saveFormInfo);
            _this.SurveyFormId = JSONObject["_body"];
            _this.router.navigate(['./question', _this.SurveyFormId]);
        });
        alertify.alert("Form", "Form Added successfully");
    };
    SurveyNameComponent = __decorate([
        core_1.Component({
            selector: 'app-survey-name',
            templateUrl: '../app/SurveyForm/SurveyName/Generated.SurveyName.html',
            providers: [Generated_SurveyName_Service_1.SurveyNameService, Generated_SurveyForm_Service_1.SurveyFormService]
        }),
        __metadata("design:paramtypes", [Generated_SurveyName_Service_1.SurveyNameService, router_1.Router])
    ], SurveyNameComponent);
    return SurveyNameComponent;
}());
exports.SurveyNameComponent = SurveyNameComponent;
//# sourceMappingURL=Generated.SurveyName.Component.js.map