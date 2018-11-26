import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { AnswerService } from '../Answer/Generated.Answer.Service';
import { QuestionService } from '../Question/Generated.Question.Service';
import { SurveyFormService } from './Generated.SurveyForm.Service';
import { SurveyAnswerService } from '../SurveyAnswer/Generated.SurveyAnswer.Service';

declare var $: any;
declare let alertify: any;

@Component({
    selector: 'survey',
    templateUrl: '../app/SurveyForm/Generated.SurveyForm.html',
    styleUrls: ['../app/SurveyForm/surveyForm.css'],
    providers: [SurveyFormService, QuestionService, AnswerService, SurveyAnswerService]
})

export class SurveyFormComponent {

    //SurveyList: any;
    //Survey = {};

    question = {};
    questionList = [];
    option = {}
    optionList = [];

    SaveAnswer: any;
    DeleteQuestion: any;
    questionID: number;

    ansOption: any;
    ansOptions: any;

    formName: any;
    SurveyFormId: number;

    public cbOptions: Array<String> = []
    public Answer: Array<Object> = [];
    public AnsText: Array<String> = [];

    constructor(private surveyFormService: SurveyFormService, private answerService: AnswerService, private questionService: QuestionService, private surveyAnswerService: SurveyAnswerService, private router: Router, private route: ActivatedRoute) { this.init(); }

    init() {
        this.SurveyFormId = +this.route.snapshot.paramMap.get('SurveyFormId');

        this.surveyAnswerService.getFormInfoById(this.SurveyFormId)
            .subscribe(response => {
                this.formName = response.SurveyFormName;
                console.log(this.formName);
            })

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
                    alertify.alert("No Questions Found In This Form, Please Add Questions");
                    this.router.navigate(['./question', this.SurveyFormId]);
                }
            })
    }

    SubmitAnswer(Answer: any) {
        for (var i = 0; i < this.Answer.length; i++) {
            this.Answer[i]["SurveyFormId"] = this.SurveyFormId;
        }
        this.answerService.saveAnswer(Answer)
            .subscribe(data => {
                this.SaveAnswer = JSON.stringify(data);
                this.router.navigate(['./surveyAnswer', this.SurveyFormId]);
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

