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
var Generated_sysdiagrams_Service_1 = require("./Generated.sysdiagrams.Service");
var sysdiagramsComponent = /** @class */ (function () {
    function sysdiagramsComponent(sysdiagramsService) {
        this.sysdiagramsService = sysdiagramsService;
        this.sysdiagrams = {};
        this.Getsysdiagrams();
    }
    sysdiagramsComponent.prototype.Getsysdiagrams = function () {
        var _this = this;
        this.sysdiagramsService.getsysdiagrams()
            .subscribe(function (result) { _this.sysdiagramsList = result; }, function (error) { return console.log("error : " + error); }, function () { });
    };
    sysdiagramsComponent.prototype.GetsysdiagramsById = function (sysdiagramsID) {
        var _this = this;
        this.sysdiagramsService.getsysdiagramsByID(sysdiagramsID)
            .subscribe(function (result) { _this.sysdiagrams = result; }, function (error) { return console.log("error : " + error); }, function () { });
    };
    sysdiagramsComponent.prototype.Savesysdiagrams = function (sysdiagrams) {
        var _this = this;
        this.sysdiagramsService.addOrUpdatesysdiagrams(sysdiagrams)
            .subscribe(function (result) { return _this.Getsysdiagrams(); }, function (error) { return console.log("error : " + error); }, function () { console.log("Save completed!!!"); });
    };
    sysdiagramsComponent.prototype.Deletesysdiagrams = function (sysdiagramsID) {
        var _this = this;
        this.sysdiagramsService.deletesysdiagrams(sysdiagramsID)
            .subscribe(function (result) { return _this.Getsysdiagrams(); }, function (error) { return console.log("error : " + error); }, function () { console.log("Save completed!!!"); });
    };
    sysdiagramsComponent = __decorate([
        core_1.Component({
            selector: 'sysdiagrams',
            templateUrl: './Generated.sysdiagrams.html',
            providers: [Generated_sysdiagrams_Service_1.sysdiagramsService]
        }),
        __metadata("design:paramtypes", [Generated_sysdiagrams_Service_1.sysdiagramsService])
    ], sysdiagramsComponent);
    return sysdiagramsComponent;
}());
exports.sysdiagramsComponent = sysdiagramsComponent;
//# sourceMappingURL=Generated.sysdiagrams.Component.js.map