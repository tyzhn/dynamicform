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
var Generated_Member_Service_1 = require("./Generated.Member.Service");
var MemberComponent = /** @class */ (function () {
    function MemberComponent(memberService) {
        this.memberService = memberService;
        this.Member = {};
        this.GetMember();
    }
    MemberComponent.prototype.GetMember = function () {
        var _this = this;
        this.memberService.getMember()
            .subscribe(function (result) { _this.MemberList = result; }, function (error) { return console.log("error : " + error); }, function () { });
    };
    MemberComponent.prototype.GetMemberById = function (MemberID) {
        var _this = this;
        this.memberService.getMemberByID(MemberID)
            .subscribe(function (result) { _this.Member = result; }, function (error) { return console.log("error : " + error); }, function () { });
    };
    MemberComponent.prototype.SaveMember = function (Member) {
        var _this = this;
        this.memberService.addOrUpdateMember(Member)
            .subscribe(function (result) { return _this.GetMember(); }, function (error) { return console.log("error : " + error); }, function () { console.log("Save completed!!!"); });
    };
    MemberComponent.prototype.DeleteMember = function (MemberID) {
        var _this = this;
        this.memberService.deleteMember(MemberID)
            .subscribe(function (result) { return _this.GetMember(); }, function (error) { return console.log("error : " + error); }, function () { console.log("Save completed!!!"); });
    };
    MemberComponent = __decorate([
        core_1.Component({
            selector: 'member',
            templateUrl: './Generated.Member.html',
            providers: [Generated_Member_Service_1.MemberService]
        }),
        __metadata("design:paramtypes", [Generated_Member_Service_1.MemberService])
    ], MemberComponent);
    return MemberComponent;
}());
exports.MemberComponent = MemberComponent;
//# sourceMappingURL=Generated.Member.Component.js.map