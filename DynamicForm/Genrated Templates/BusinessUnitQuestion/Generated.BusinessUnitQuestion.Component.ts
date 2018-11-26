import { Component } from '@angular/core';
import { BusinessUnitQuestionService } from './Generated.BusinessUnitQuestion.Service';
declare var $: any;
@Component({
    selector: 'businessunitquestion',
    templateUrl: './Generated.BusinessUnitQuestion.html',
	providers: [BusinessUnitQuestionService]
})

export class BusinessUnitQuestionComponent {

    BusinessUnitQuestionList: any;
    BusinessUnitQuestion = {};
   
    constructor(private businessunitquestionService: BusinessUnitQuestionService) {
	this.GetBusinessUnitQuestion();
    }

	 GetBusinessUnitQuestion() {
        this.businessunitquestionService.getBusinessUnitQuestion()
            .subscribe(result => { this.BusinessUnitQuestionList = result },
            error => console.log("error : " + error),
            function () { });
    }

	GetBusinessUnitQuestionById(BusinessUnitQuestionID: number) {
        this.businessunitquestionService.getBusinessUnitQuestionByID(BusinessUnitQuestionID)
            .subscribe(result => { this.BusinessUnitQuestion = result },
            error => console.log("error : " + error),
            function () { });
    }

    SaveBusinessUnitQuestion(BusinessUnitQuestion) {
    
        this.businessunitquestionService.addOrUpdateBusinessUnitQuestion(BusinessUnitQuestion)
            .subscribe(result =>this.GetBusinessUnitQuestion(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }


	DeleteBusinessUnitQuestion(BusinessUnitQuestionID: number) {
    
        this.businessunitquestionService.deleteBusinessUnitQuestion(BusinessUnitQuestionID)
            .subscribe(result =>this.GetBusinessUnitQuestion(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }

}

