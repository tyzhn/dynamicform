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
var Generated_QuestionType_Service_1 = require("./Generated.QuestionType.Service");
var QuestionTypeComponent = /** @class */ (function () {
    function QuestionTypeComponent(questiontypeService) {
        this.questiontypeService = questiontypeService;
        this.QuestionType = {};
    }
    QuestionTypeComponent = __decorate([
        core_1.Component({
            selector: 'questiontype',
            templateUrl: './Generated.QuestionType.html',
            providers: [Generated_QuestionType_Service_1.QuestionTypeService]
        }),
        __metadata("design:paramtypes", [Generated_QuestionType_Service_1.QuestionTypeService])
    ], QuestionTypeComponent);
    return QuestionTypeComponent;
}());
exports.QuestionTypeComponent = QuestionTypeComponent;
//# sourceMappingURL=Generated.QuestionType.Component.js.map