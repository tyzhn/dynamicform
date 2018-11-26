import { Component } from '@angular/core';
import { SurveyService } from './Generated.Survey.Service';
declare var $: any;
@Component({
    selector: 'survey',
    templateUrl: './Generated.Survey.html',
	providers: [SurveyService]
})

export class SurveyComponent {

    SurveyList: any;
    Survey = {};
   
    constructor(private surveyService: SurveyService) {
	this.GetSurvey();
    }

	 GetSurvey() {
        this.surveyService.getSurvey()
            .subscribe(result => { this.SurveyList = result },
            error => console.log("error : " + error),
            function () { });
    }

	GetSurveyById(SurveyID: number) {
        this.surveyService.getSurveyByID(SurveyID)
            .subscribe(result => { this.Survey = result },
            error => console.log("error : " + error),
            function () { });
    }

    SaveSurvey(Survey) {
    
        this.surveyService.addOrUpdateSurvey(Survey)
            .subscribe(result =>this.GetSurvey(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }


	DeleteSurvey(SurveyID: number) {
    
        this.surveyService.deleteSurvey(SurveyID)
            .subscribe(result =>this.GetSurvey(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }

}

