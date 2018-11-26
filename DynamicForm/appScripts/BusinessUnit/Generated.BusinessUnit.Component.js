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
var Generated_BusinessUnit_Service_1 = require("./Generated.BusinessUnit.Service");
var BusinessUnitComponent = /** @class */ (function () {
    function BusinessUnitComponent(businessunitService) {
        this.businessunitService = businessunitService;
        this.BusinessUnit = {};
        this.GetBusinessUnit();
    }
    BusinessUnitComponent.prototype.GetBusinessUnit = function () {
        var _this = this;
        this.businessunitService.getBusinessUnit()
            .subscribe(function (result) { _this.BusinessUnitList = result; }, function (error) { return console.log("error : " + error); }, function () { });
    };
    BusinessUnitComponent.prototype.GetBusinessUnitById = function (BusinessUnitID) {
        var _this = this;
        this.businessunitService.getBusinessUnitByID(BusinessUnitID)
            .subscribe(function (result) { _this.BusinessUnit = result; }, function (error) { return console.log("error : " + error); }, function () { });
    };
    BusinessUnitComponent.prototype.SaveBusinessUnit = function (BusinessUnit) {
        var _this = this;
        this.businessunitService.addOrUpdateBusinessUnit(BusinessUnit)
            .subscribe(function (result) { return _this.GetBusinessUnit(); }, function (error) { return console.log("error : " + error); }, function () { console.log("Save completed!!!"); });
    };
    BusinessUnitComponent.prototype.DeleteBusinessUnit = function (BusinessUnitID) {
        var _this = this;
        this.businessunitService.deleteBusinessUnit(BusinessUnitID)
            .subscribe(function (result) { return _this.GetBusinessUnit(); }, function (error) { return console.log("error : " + error); }, function () { console.log("Save completed!!!"); });
    };
    BusinessUnitComponent = __decorate([
        core_1.Component({
            selector: 'businessunit',
            templateUrl: './Generated.BusinessUnit.html',
            providers: [Generated_BusinessUnit_Service_1.BusinessUnitService]
        }),
        __metadata("design:paramtypes", [Generated_BusinessUnit_Service_1.BusinessUnitService])
    ], BusinessUnitComponent);
    return BusinessUnitComponent;
}());
exports.BusinessUnitComponent = BusinessUnitComponent;
//# sourceMappingURL=Generated.BusinessUnit.Component.js.map