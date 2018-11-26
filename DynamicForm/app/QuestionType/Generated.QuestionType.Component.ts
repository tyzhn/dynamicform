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
    }
}

