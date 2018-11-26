import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class SurveyNameService {


    constructor(private _http: Http) { }

    saveSurveyFormName(FromInfo: any) {
        let param = { SurveyFormName: FromInfo }
        return this._http.post('api/Surveys/SaveSurveyFormName', param).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'error');
    }
}


