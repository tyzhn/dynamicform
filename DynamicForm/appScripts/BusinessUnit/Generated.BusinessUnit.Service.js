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
var BusinessUnitService = /** @class */ (function () {
    function BusinessUnitService(_http) {
        this._http = _http;
    }
    BusinessUnitService.prototype.getBusinessUnit = function () {
        return this._http.get('api/BusinessUnits/GetBusinessUnits')
            .map(function (response) { return response.json(); });
    };
    BusinessUnitService.prototype.getBusinessUnitByID = function (BusinessUnitID) {
        var param = { id: BusinessUnitID };
        return this._http.get('api/BusinessUnits/GetBusinessUnitByID?id=' + BusinessUnitID)
            .map(function (response) { return response.json(); });
    };
    BusinessUnitService.prototype.addOrUpdateBusinessUnit = function (BusinessUnit) {
        var param = { businessunit: BusinessUnit };
        return this._http.post('api/BusinessUnits/AddBusinessUnit', param).catch(this.handleError);
    };
    BusinessUnitService.prototype.deleteBusinessUnit = function (BusinessUnitID) {
        return this._http.delete('api/BusinessUnits/DeleteBusinessUnit?id=' + BusinessUnitID)
            .catch(this.handleError);
    };
    BusinessUnitService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.json().error || 'error');
    };
    BusinessUnitService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BusinessUnitService);
    return BusinessUnitService;
}());
exports.BusinessUnitService = BusinessUnitService;
//# sourceMappingURL=Generated.BusinessUnit.Service.js.map