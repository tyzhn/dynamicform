import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class SurveyService  {

   
    constructor(private _http: Http) { }

    getSurvey() {
        return this._http.get('api/Surveys/GetSurveys')
		.map(response => response.json())
    }


	 getSurveyByID(SurveyID: number) {
    let param = { id: SurveyID };
    return this._http.get('api/Surveys/GetSurveyByID?id=' + SurveyID)
	.map((response: Response) => response.json());
  }

  addOrUpdateSurvey(Survey: any) {
    let param = { survey: Survey }
    return this._http.post('api/Surveys/AddSurvey', param).catch(this.handleError);
  }

    deleteSurvey(SurveyID: number){
  
    return this._http.delete('api/Surveys/DeleteSurvey?id='+SurveyID)
      .catch(this.handleError);
  }


   private handleError(error: Response) {
    return Observable.throw(error.json().error || 'error');
  }
}


