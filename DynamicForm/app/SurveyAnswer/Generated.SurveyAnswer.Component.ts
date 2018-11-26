import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
declare var $: any;

import { SurveyAnswerService } from './Generated.SurveyAnswer.Service';
import { QuestionService } from '../Question/Generated.Question.Service';
import { AnswerService } from '../Answer/Generated.Answer.Service';


@Component({
    selector: 'app-survey-answer',
    templateUrl: '../app/SurveyAnswer/Generated.SurveyAnswer.html',
    providers: [SurveyAnswerService, QuestionService, AnswerService]
})

export class SurveyAnswerComponent {
    SurveyFormId: number;
    //FormInfo = [];
    FormName: string;
    questionList = [];
    public Answer: Array<Object> = [];

    constructor(private surveyAnswerService: SurveyAnswerService, private questionService: QuestionService, private answerService: AnswerService, private router: Router, private route: ActivatedRoute) { this.init(); }

    init() {
        this.SurveyFormId = +this.route.snapshot.paramMap.get('SurveyFormId');

        this.surveyAnswerService.getFormInfoById(this.SurveyFormId)
            .subscribe(response => {
                this.FormName = response.SurveyFormName;
                console.log(this.FormName);
            })

        this.surveyAnswerService.getQuestionResponse(this.SurveyFormId)
            .subscribe(response => {
                this.questionList = response;
                //console.log("QA", this.questionList);
                var questionDemoList = response;
                for (var i = 0; i < this.questionList.length; i++) {
                    this.Answer.push({
                        "Text": "",
                        "QuestionID": this.questionList[i].QuestionID
                    });
                    //this.questionList[i]["AnswerText"] = this.questionList[i]["AnswerInfo"][i]["AnswerText"];
                }
                console.log("Answer", this.questionList);
            })
    }
}

