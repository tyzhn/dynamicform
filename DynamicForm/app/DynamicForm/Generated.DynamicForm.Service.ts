import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class DynamicFormService  {

    constructor(private _http: Http) { }

    getDynamicForms() {
        return this._http.get('api/Surveys/GetDynamicForms').map((response: Response) => response.json());
    }
}


