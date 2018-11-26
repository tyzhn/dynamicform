import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class SurveyAnswerService {

    constructor(private _http: Http) { }

    getQuestionResponse(SurveyFormId: number) {
        let param = { id: SurveyFormId }
        return this._http.get('api/Questions/GetQuestionResponse?id=' + SurveyFormId).map((response: Response) => response.json());
    }

    getFormInfoById(SurveyFormId: number) {
        let param = { id: SurveyFormId }
        return this._http.get('api/Surveys/GetFormInfoById?id=' + SurveyFormId).map((response: Response) => response.json());
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'error');
    }
}


