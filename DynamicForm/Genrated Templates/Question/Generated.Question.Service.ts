import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class QuestionService  {

   
    constructor(private _http: Http) { }

    getQuestion() {
        return this._http.get('api/Questions/GetQuestions')
		.map(response => response.json())
    }


	 getQuestionByID(QuestionID: number) {
    let param = { id: QuestionID };
    return this._http.get('api/Questions/GetQuestionByID?id=' + QuestionID)
	.map((response: Response) => response.json());
  }

  addOrUpdateQuestion(Question: any) {
    let param = { question: Question }
    return this._http.post('api/Questions/AddQuestion', param).catch(this.handleError);
  }

    deleteQuestion(QuestionID: number){
  
    return this._http.delete('api/Questions/DeleteQuestion?id='+QuestionID)
      .catch(this.handleError);
  }


   private handleError(error: Response) {
    return Observable.throw(error.json().error || 'error');
  }
}


