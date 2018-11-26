import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class sysdiagramsService  {

   
    constructor(private _http: Http) { }

    getsysdiagrams() {
        return this._http.get('api/sysdiagramss/Getsysdiagramss')
		.map(response => response.json())
    }


	 getsysdiagramsByID(sysdiagramsID: number) {
    let param = { id: sysdiagramsID };
    return this._http.get('api/sysdiagramss/GetsysdiagramsByID?id=' + sysdiagramsID)
	.map((response: Response) => response.json());
  }

  addOrUpdatesysdiagrams(sysdiagrams: any) {
    let param = { sysdiagrams: sysdiagrams }
    return this._http.post('api/sysdiagramss/Addsysdiagrams', param).catch(this.handleError);
  }

    deletesysdiagrams(sysdiagramsID: number){
  
    return this._http.delete('api/sysdiagramss/Deletesysdiagrams?id='+sysdiagramsID)
      .catch(this.handleError);
  }


   private handleError(error: Response) {
    return Observable.throw(error.json().error || 'error');
  }
}


