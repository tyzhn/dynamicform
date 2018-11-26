import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class BusinessUnitQuestionService  {

   
    constructor(private _http: Http) { }

    getBusinessUnitQuestion() {
        return this._http.get('api/BusinessUnitQuestions/GetBusinessUnitQuestions')
		.map(response => response.json())
    }


	 getBusinessUnitQuestionByID(BusinessUnitQuestionID: number) {
    let param = { id: BusinessUnitQuestionID };
    return this._http.get('api/BusinessUnitQuestions/GetBusinessUnitQuestionByID?id=' + BusinessUnitQuestionID)
	.map((response: Response) => response.json());
  }

  addOrUpdateBusinessUnitQuestion(BusinessUnitQuestion: any) {
    let param = { businessunitquestion: BusinessUnitQuestion }
    return this._http.post('api/BusinessUnitQuestions/AddBusinessUnitQuestion', param).catch(this.handleError);
  }

    deleteBusinessUnitQuestion(BusinessUnitQuestionID: number){
  
    return this._http.delete('api/BusinessUnitQuestions/DeleteBusinessUnitQuestion?id='+BusinessUnitQuestionID)
      .catch(this.handleError);
  }


   private handleError(error: Response) {
    return Observable.throw(error.json().error || 'error');
  }
}


