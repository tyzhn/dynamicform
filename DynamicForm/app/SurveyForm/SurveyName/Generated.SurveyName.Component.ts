import { Component, OnInit } from '@angular/core';
import { SurveyNameService } from './Generated.SurveyName.Service';
import { Router } from '@angular/router'
declare var $: any;
declare let alertify: any;

import { SurveyFormComponent } from '../Generated.SurveyForm.Component';
import { SurveyFormService } from '../Generated.SurveyForm.Service';

@Component({
    selector: 'app-survey-name',
    templateUrl: '../app/SurveyForm/SurveyName/Generated.SurveyName.html',
    providers: [SurveyNameService, SurveyFormService]
})

export class SurveyNameComponent{

    //SurveyList: any;
    //Survey = {};
    saveFormInfo: any;
    SurveyFormId: number;
   
    constructor(private surveyNameService: SurveyNameService, private router: Router) { }

    SaveSurveyFormName(FormInfo: any) {
        this.surveyNameService.saveSurveyFormName(FormInfo)
            .subscribe(data => {
                this.saveFormInfo = JSON.stringify(data);

                var JSONObject = JSON.parse(this.saveFormInfo);

                this.SurveyFormId = JSONObject["_body"];

                this.router.navigate(['./question', this.SurveyFormId])
            });
        alertify.alert("Form", "Form Added successfully");
    }
}

