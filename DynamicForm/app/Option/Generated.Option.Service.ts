import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class OptionService  {

   
    constructor(private _http: Http) { }

    getOption() {
        return this._http.get('api/Options/GetOptions')
		.map(response => response.json())
    }


	 getOptionByID(OptionID: number) {
    let param = { id: OptionID };
    return this._http.get('api/Options/GetOptionByID?id=' + OptionID)
	.map((response: Response) => response.json());
  }

  addOrUpdateOption(Option: any) {
    let param = { option: Option }
    return this._http.post('api/Options/AddOption', param).catch(this.handleError);
  }

    deleteOption(OptionID: number){
  
    return this._http.delete('api/Options/DeleteOption?id='+OptionID)
      .catch(this.handleError);
  }


   private handleError(error: Response) {
    return Observable.throw(error.json().error || 'error');
  }
}


