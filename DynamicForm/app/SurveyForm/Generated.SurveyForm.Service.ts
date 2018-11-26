import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class SurveyFormService  {

    constructor(private _http: Http) { }

    getSurveyFormName() {
        return this._http.get('api/Surveys/GetSurveyFormName').map((response: Response) => response.json());
    }
}


