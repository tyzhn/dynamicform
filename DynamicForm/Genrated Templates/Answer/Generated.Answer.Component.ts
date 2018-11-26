import { Component } from '@angular/core';
import { AnswerService } from './Generated.Answer.Service';
declare var $: any;
@Component({
    selector: 'answer',
    templateUrl: './Generated.Answer.html',
	providers: [AnswerService]
})

export class AnswerComponent {

    AnswerList: any;
    Answer = {};
   
    constructor(private answerService: AnswerService) {
	this.GetAnswer();
    }

	 GetAnswer() {
        this.answerService.getAnswer()
            .subscribe(result => { this.AnswerList = result },
            error => console.log("error : " + error),
            function () { });
    }

	GetAnswerById(AnswerID: number) {
        this.answerService.getAnswerByID(AnswerID)
            .subscribe(result => { this.Answer = result },
            error => console.log("error : " + error),
            function () { });
    }

    SaveAnswer(Answer) {
    
        this.answerService.addOrUpdateAnswer(Answer)
            .subscribe(result =>this.GetAnswer(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }


	DeleteAnswer(AnswerID: number) {
    
        this.answerService.deleteAnswer(AnswerID)
            .subscribe(result =>this.GetAnswer(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }

}

