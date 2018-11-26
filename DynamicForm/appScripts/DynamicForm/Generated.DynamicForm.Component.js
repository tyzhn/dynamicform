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
var Generated_DynamicForm_Service_1 = require("./Generated.DynamicForm.Service");
//import alertify from 'alertify.js';
var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(dynamicFormService, router, route) {
        this.dynamicFormService = dynamicFormService;
        this.router = router;
        this.route = route;
        this.init();
    }
    DynamicFormComponent.prototype.init = function () {
        var _this = this;
        this.dynamicFormService.getDynamicForms()
            .subscribe(function (response) {
            _this.FormList = response;
            console.log(_this.FormList);
        });
    };
    DynamicFormComponent = __decorate([
        core_1.Component({
            selector: 'dynamic-form',
            templateUrl: '../app/DynamicForm/Generated.DynamicForm.html',
            styleUrls: ['../app/SurveyForm/surveyForm.css'],
            providers: [Generated_DynamicForm_Service_1.DynamicFormService]
        }),
        __metadata("design:paramtypes", [Generated_DynamicForm_Service_1.DynamicFormService, router_1.Router, router_1.ActivatedRoute])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());
exports.DynamicFormComponent = DynamicFormComponent;
//# sourceMappingURL=Generated.DynamicForm.Component.js.map