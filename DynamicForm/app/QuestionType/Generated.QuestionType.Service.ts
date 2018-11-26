import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class QuestionTypeService {


    constructor(private _http: Http) { }

    getQuestionType() {
        return this._http.get('api/QuestionTypes/GetQuestionType').map((response: Response) => response.json());
    }

    getQuestionTypeByID(QuestionTypeID: number) {
        let param = { id: QuestionTypeID };
        return this._http.get('api/QuestionTypes/GetQuestionTypeByID?id=' + QuestionTypeID).map((response: Response) => response.json());
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'error');
    }
}


