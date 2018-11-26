import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class MemberService  {

   
    constructor(private _http: Http) { }

    getMember() {
        return this._http.get('api/Members/GetMembers')
		.map(response => response.json())
    }


	 getMemberByID(MemberID: number) {
    let param = { id: MemberID };
    return this._http.get('api/Members/GetMemberByID?id=' + MemberID)
	.map((response: Response) => response.json());
  }

  addOrUpdateMember(Member: any) {
    let param = { member: Member }
    return this._http.post('api/Members/AddMember', param).catch(this.handleError);
  }

    deleteMember(MemberID: number){
  
    return this._http.delete('api/Members/DeleteMember?id='+MemberID)
      .catch(this.handleError);
  }


   private handleError(error: Response) {
    return Observable.throw(error.json().error || 'error');
  }
}


