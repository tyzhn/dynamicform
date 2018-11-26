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
var Generated_Option_Service_1 = require("./Generated.Option.Service");
var OptionComponent = /** @class */ (function () {
    function OptionComponent(optionService) {
        this.optionService = optionService;
        this.Option = {};
        this.GetOption();
    }
    OptionComponent.prototype.GetOption = function () {
        var _this = this;
        this.optionService.getOption()
            .subscribe(function (result) { _this.OptionList = result; }, function (error) { return console.log("error : " + error); }, function () { });
    };
    OptionComponent.prototype.GetOptionById = function (OptionID) {
        var _this = this;
        this.optionService.getOptionByID(OptionID)
            .subscribe(function (result) { _this.Option = result; }, function (error) { return console.log("error : " + error); }, function () { });
    };
    OptionComponent.prototype.SaveOption = function (Option) {
        var _this = this;
        this.optionService.addOrUpdateOption(Option)
            .subscribe(function (result) { return _this.GetOption(); }, function (error) { return console.log("error : " + error); }, function () { console.log("Save completed!!!"); });
    };
    OptionComponent.prototype.DeleteOption = function (OptionID) {
        var _this = this;
        this.optionService.deleteOption(OptionID)
            .subscribe(function (result) { return _this.GetOption(); }, function (error) { return console.log("error : " + error); }, function () { console.log("Save completed!!!"); });
    };
    OptionComponent = __decorate([
        core_1.Component({
            selector: 'option',
            templateUrl: './Generated.Option.html',
            providers: [Generated_Option_Service_1.OptionService]
        }),
        __metadata("design:paramtypes", [Generated_Option_Service_1.OptionService])
    ], OptionComponent);
    return OptionComponent;
}());
exports.OptionComponent = OptionComponent;
//# sourceMappingURL=Generated.Option.Component.js.map