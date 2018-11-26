import { Component } from '@angular/core';
import { MemberService } from './Generated.Member.Service';
declare var $: any;
@Component({
    selector: 'member',
    templateUrl: './Generated.Member.html',
	providers: [MemberService]
})

export class MemberComponent {

    MemberList: any;
    Member = {};
   
    constructor(private memberService: MemberService) {
	this.GetMember();
    }

	 GetMember() {
        this.memberService.getMember()
            .subscribe(result => { this.MemberList = result },
            error => console.log("error : " + error),
            function () { });
    }

	GetMemberById(MemberID: number) {
        this.memberService.getMemberByID(MemberID)
            .subscribe(result => { this.Member = result },
            error => console.log("error : " + error),
            function () { });
    }

    SaveMember(Member) {
    
        this.memberService.addOrUpdateMember(Member)
            .subscribe(result =>this.GetMember(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }


	DeleteMember(MemberID: number) {
    
        this.memberService.deleteMember(MemberID)
            .subscribe(result =>this.GetMember(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }

}

