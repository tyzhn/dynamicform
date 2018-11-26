import { Component } from '@angular/core';
import { QuestionService } from './Generated.Question.Service';
declare var $: any;
@Component({
    selector: 'question',
    templateUrl: './Generated.Question.html',
	providers: [QuestionService]
})

export class QuestionComponent {

    QuestionList: any;
    Question = {};
   
    constructor(private questionService: QuestionService) {
	this.GetQuestion();
    }

	 GetQuestion() {
        this.questionService.getQuestion()
            .subscribe(result => { this.QuestionList = result },
            error => console.log("error : " + error),
            function () { });
    }

	GetQuestionById(QuestionID: number) {
        this.questionService.getQuestionByID(QuestionID)
            .subscribe(result => { this.Question = result },
            error => console.log("error : " + error),
            function () { });
    }

    SaveQuestion(Question) {
    
        this.questionService.addOrUpdateQuestion(Question)
            .subscribe(result =>this.GetQuestion(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }


	DeleteQuestion(QuestionID: number) {
    
        this.questionService.deleteQuestion(QuestionID)
            .subscribe(result =>this.GetQuestion(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }

}

