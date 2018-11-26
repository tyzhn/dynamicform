import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class QuestionService  {

   
    constructor(private _http: Http) { }

    getQuestions(SurveyFormId: number) {
        let param = { id: SurveyFormId }
        return this._http.get('api/Questions/GetQuestions?id=' + SurveyFormId).map((response: Response) => response.json());
    }

    addQuestion(Question: any, optionText: any) {
        let param = { question: Question, optionText: optionText }
        return this._http.post('api/Questions/AddQuestion', param).catch(this.handleError);
    }

    deleteQuestion(QuestionID: number) {
        let param = { id: QuestionID }
        return this._http.delete('api/Questions/DeleteQuestionByID?id=' + QuestionID).catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().erro || 'error');
    }
}


