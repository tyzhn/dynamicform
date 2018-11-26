import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"

declare var $: any;
declare let alertify: any;

import { AnswerService } from './Generated.Answer.Service';
import { QuestionService } from '../Question/Generated.Question.Service';
import { SurveyFormService } from '../SurveyForm/Generated.SurveyForm.Service';
import { SurveyAnswerService } from '../SurveyAnswer/Generated.SurveyAnswer.Service';

//import alertify from 'alertify.js';

declare var $: any;
@Component({
    selector: 'app-answer',
    templateUrl: '../app/Answer/Generated.Answer.html',
    providers: [AnswerService, QuestionService, SurveyFormService, SurveyAnswerService]
})

export class AnswerComponent {

    question = {};
    questionList = [];
    option = {}
    optionList = [];

    SaveAnswer: any;
    DeleteQuestion: any;
    questionID: number;

    ansOption: any;
    ansOptions: any;

    formInfo: any;
    formName: any;
    SurveyFormId: number;

    public cbOptions: Array<String> = []
    public Answer: Array<Object> = [];
    public AnsText: Array<String> = [];

    constructor(private answerService: AnswerService, private questionService: QuestionService, private surveyFormService: SurveyFormService, private surveyAnswerService: SurveyAnswerService, private router: Router, private route: ActivatedRoute) {
        this.init();
    }

    init() {
        this.SurveyFormId = +this.route.snapshot.paramMap.get('SurveyFormId');

        this.questionService.getQuestions(this.SurveyFormId)
            .subscribe(response => {
                this.questionList = response;

                var questionDemoList = response;
                for (var i = 0; i < this.questionList.length; i++) {
                    this.Answer.push({
                        "Text": "",
                        "QuestionID": this.questionList[i].QuestionID
                    });
                }
                if (this.questionList.length == 0) {
                    alertify.alert("No Questions Found", "Please Add Questions For This Form");
                    this.router.navigate(['./question', this.SurveyFormId]);
                }
            })

        this.surveyAnswerService.getFormInfoById(this.SurveyFormId)
            .subscribe(response => {
                this.formInfo = response;
                this.formName = this.formInfo.SurveyFormName;
            })
    }

    SubmitAnswer(Answer: any) {
        for (var i = 0; i < this.Answer.length; i++) {
            this.Answer[i]["SurveyFormId"] = this.SurveyFormId;
        }
        this.answerService.saveAnswer(Answer)
            .subscribe(data => {
                this.SaveAnswer = JSON.stringify(data);
            })
        alertify.alert("Answer", "Thank You For Your Response");
        this.init();
    }

    DeleteQuestionByID(QuestionID) {

        this.questionService.deleteQuestion(QuestionID)
            .subscribe(data => {
                this.DeleteQuestion = JSON.stringify(data);

                this.questionService.getQuestions(this.SurveyFormId)
                    .subscribe(response => {
                        this.questionList = response;
                        for (var i = 0; i < this.questionList.length; i++) {
                            this.Answer.push({
                                "Text": "",
                                "QuestionID": this.questionList[i].QuestionID
                            });
                        }
                    });
            })
    }

    ngInitQuestionID(index, questionID, answer) {
        answer[index].QuestionID = questionID;
    }

    setCheckboxAnswer(index, answerText, answer) {
        var answerTextValue = answer[index].Text;
        if (answerTextValue != "") {
            var searchValue = answerTextValue.search(answerText);
            if (searchValue == 0) {
                answerTextValue = answerTextValue.replace(answerText, "");
            }
            else if (searchValue > 0) {
                answerTextValue = answerTextValue.replace("," + answerText, "");
            }
            else {
                answerTextValue += "," + answerText;
            }
            answer[index].Text = answerTextValue;
        }
        else {
            answer[index].Text = answerText;
        }
    }

    clearForm() {
        this.ansOption = [];
        this.ansOptions = [];
        this.AnsText = [];
        this.cbOptions = [];
    }
}

