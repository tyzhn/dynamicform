import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class QuestionTypeService  {

   
    constructor(private _http: Http) { }

    getQuestionType() {
        return this._http.get('api/QuestionTypes/GetQuestionTypes')
		.map(response => response.json())
    }


	 getQuestionTypeByID(QuestionTypeID: number) {
    let param = { id: QuestionTypeID };
    return this._http.get('api/QuestionTypes/GetQuestionTypeByID?id=' + QuestionTypeID)
	.map((response: Response) => response.json());
  }

  addOrUpdateQuestionType(QuestionType: any) {
    let param = { questiontype: QuestionType }
    return this._http.post('api/QuestionTypes/AddQuestionType', param).catch(this.handleError);
  }

    deleteQuestionType(QuestionTypeID: number){
  
    return this._http.delete('api/QuestionTypes/DeleteQuestionType?id='+QuestionTypeID)
      .catch(this.handleError);
  }


   private handleError(error: Response) {
    return Observable.throw(error.json().error || 'error');
  }
}


