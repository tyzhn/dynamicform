import { Component } from '@angular/core';
import { BusinessUnitService } from './Generated.BusinessUnit.Service';
declare var $: any;
@Component({
    selector: 'businessunit',
    templateUrl: './Generated.BusinessUnit.html',
	providers: [BusinessUnitService]
})

export class BusinessUnitComponent {

    BusinessUnitList: any;
    BusinessUnit = {};
   
    constructor(private businessunitService: BusinessUnitService) {
	this.GetBusinessUnit();
    }

	 GetBusinessUnit() {
        this.businessunitService.getBusinessUnit()
            .subscribe(result => { this.BusinessUnitList = result },
            error => console.log("error : " + error),
            function () { });
    }

	GetBusinessUnitById(BusinessUnitID: number) {
        this.businessunitService.getBusinessUnitByID(BusinessUnitID)
            .subscribe(result => { this.BusinessUnit = result },
            error => console.log("error : " + error),
            function () { });
    }

    SaveBusinessUnit(BusinessUnit) {
    
        this.businessunitService.addOrUpdateBusinessUnit(BusinessUnit)
            .subscribe(result =>this.GetBusinessUnit(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }


	DeleteBusinessUnit(BusinessUnitID: number) {
    
        this.businessunitService.deleteBusinessUnit(BusinessUnitID)
            .subscribe(result =>this.GetBusinessUnit(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }

}

