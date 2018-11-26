import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class AnswerService {


    constructor(private _http: Http) { }

    //getQuestions() {
    //    return this._http.get('api/Questions/GetQuestions').map((response: Response) => response.json());
    //}

    //deleteQuestion(QuestionID: number) {
    //    let param = { id: QuestionID }
    //    return this._http.delete('api/Questions/DeleteQuestionByID?id=' + QuestionID).catch(this.handleError);
    //}

    saveAnswer(Answer: any) {
        let param = { answer: Answer }
        return this._http.post('api/Answers/SaveAnswer', param).catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'error');
    }
}


