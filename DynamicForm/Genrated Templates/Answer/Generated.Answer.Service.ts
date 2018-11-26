
                                                  





 import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class AnswerService  {

   
    constructor(private _http: Http) { }

    getAnswer() {
        return this._http.get('api/Answers/GetAnswers')
		.map(response => response.json())
    }


	 getAnswerByID(AnswerID: number) {
    let param = { id: AnswerID };
    return this._http.get('api/Answers/GetAnswerByID?id=' + AnswerID)
	.map((response: Response) => response.json());
  }

  addOrUpdateAnswer(Answer: any) {
    let param = { answer: Answer }
    return this._http.post('api/Answers/AddAnswer', param).catch(this.handleError);
  }

    deleteAnswer(AnswerID: number){
  
    return this._http.delete('api/Answers/DeleteAnswer?id='+AnswerID)
      .catch(this.handleError);
  }


   private handleError(error: Response) {
    return Observable.throw(error.json().error || 'error');
  }
}


