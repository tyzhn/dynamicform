import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class BusinessUnitService  {

   
    constructor(private _http: Http) { }

    getBusinessUnit() {
        return this._http.get('api/BusinessUnits/GetBusinessUnits')
		.map(response => response.json())
    }


	 getBusinessUnitByID(BusinessUnitID: number) {
    let param = { id: BusinessUnitID };
    return this._http.get('api/BusinessUnits/GetBusinessUnitByID?id=' + BusinessUnitID)
	.map((response: Response) => response.json());
  }

  addOrUpdateBusinessUnit(BusinessUnit: any) {
    let param = { businessunit: BusinessUnit }
    return this._http.post('api/BusinessUnits/AddBusinessUnit', param).catch(this.handleError);
  }

    deleteBusinessUnit(BusinessUnitID: number){
  
    return this._http.delete('api/BusinessUnits/DeleteBusinessUnit?id='+BusinessUnitID)
      .catch(this.handleError);
  }


   private handleError(error: Response) {
    return Observable.throw(error.json().error || 'error');
  }
}


