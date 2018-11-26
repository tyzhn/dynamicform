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
var MemberService = /** @class */ (function () {
    function MemberService(_http) {
        this._http = _http;
    }
    MemberService.prototype.getMember = function () {
        return this._http.get('api/Members/GetMembers')
            .map(function (response) { return response.json(); });
    };
    MemberService.prototype.getMemberByID = function (MemberID) {
        var param = { id: MemberID };
        return this._http.get('api/Members/GetMemberByID?id=' + MemberID)
            .map(function (response) { return response.json(); });
    };
    MemberService.prototype.addOrUpdateMember = function (Member) {
        var param = { member: Member };
        return this._http.post('api/Members/AddMember', param).catch(this.handleError);
    };
    MemberService.prototype.deleteMember = function (MemberID) {
        return this._http.delete('api/Members/DeleteMember?id=' + MemberID)
            .catch(this.handleError);
    };
    MemberService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.json().error || 'error');
    };
    MemberService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MemberService);
    return MemberService;
}());
exports.MemberService = MemberService;
//# sourceMappingURL=Generated.Member.Service.js.map