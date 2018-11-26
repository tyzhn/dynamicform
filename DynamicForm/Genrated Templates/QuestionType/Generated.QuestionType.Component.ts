import { Component } from '@angular/core';
import { QuestionTypeService } from './Generated.QuestionType.Service';
declare var $: any;
@Component({
    selector: 'questiontype',
    templateUrl: './Generated.QuestionType.html',
	providers: [QuestionTypeService]
})

export class QuestionTypeComponent {

    QuestionTypeList: any;
    QuestionType = {};
   
    constructor(private questiontypeService: QuestionTypeService) {
	this.GetQuestionType();
    }

	 GetQuestionType() {
        this.questiontypeService.getQuestionType()
            .subscribe(result => { this.QuestionTypeList = result },
            error => console.log("error : " + error),
            function () { });
    }

	GetQuestionTypeById(QuestionTypeID: number) {
        this.questiontypeService.getQuestionTypeByID(QuestionTypeID)
            .subscribe(result => { this.QuestionType = result },
            error => console.log("error : " + error),
            function () { });
    }

    SaveQuestionType(QuestionType) {
    
        this.questiontypeService.addOrUpdateQuestionType(QuestionType)
            .subscribe(result =>this.GetQuestionType(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }


	DeleteQuestionType(QuestionTypeID: number) {
    
        this.questiontypeService.deleteQuestionType(QuestionTypeID)
            .subscribe(result =>this.GetQuestionType(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }

}

