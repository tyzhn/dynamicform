import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { QuestionService } from './Generated.Question.Service';
import { QuestionTypeService } from '../QuestionType/Generated.QuestionType.Service';
import { SurveyFormService } from '../SurveyForm/Generated.SurveyForm.Service';
import { SurveyAnswerService } from '../SurveyAnswer/Generated.SurveyAnswer.Service';
declare var $: any;
declare let alertify: any;


@Component({
    selector: 'question',
    templateUrl: '../app/Question/Generated.Question.html',
    providers: [QuestionService, QuestionTypeService, SurveyFormService, SurveyAnswerService]
})

export class QuestionComponent {

    Question = {};
    QuestionType = {};
    Option = {};
    AddQuestion: any;
    optionType: any;
    optionNo: number;
    optionNumber: number;
    IsRequired: boolean;
    public OptionText: Array<String> = [];
    public questionTypes;
    public optionsArray: Array<Number> = [];

    isVisible = true;
    SurveyFormNameInfo: any;
    formInfo: any;
    SurveyFormId: number;
    formName: string;

    constructor(private questionService: QuestionService, private questionTypeService: QuestionTypeService, private surveyFormService: SurveyFormService, private surveyAnswerService: SurveyAnswerService, private route: ActivatedRoute) {
        this.init();
    }

    init() {
        this.SurveyFormId = +this.route.snapshot.paramMap.get('SurveyFormId');

        this.surveyAnswerService.getFormInfoById(this.SurveyFormId)
            .subscribe(response => {
                this.formInfo = response;
                this.formName = this.formInfo.SurveyFormName;
            })

        this.questionTypeService.getQuestionType()
            .subscribe(response => {
                this.questionTypes = response;
            })

        //this.surveyFormService.getSurveyFormName()
        //    .subscribe(responses => {
        //        this.SurveyFormNameInfo = responses.data;
        //        this.formName = this.SurveyFormNameInfo["SurveyFormName"];
        //        this.SurveyFormId = this.SurveyFormNameInfo["SurveyID"];
        //        console.log("SurveyForm", this.SurveyFormNameInfo);
        //    })
    }

    onSelect(QuestionTypeID) {
        this.optionNo = 0;
        this.optionsArray = [];
        this.OptionText = [];
        this.GetQuestionTypeByID(QuestionTypeID);
        this.isVisible = true;
    }

    onNoSelect(optionNo) {
        this.optionsArray = [];
        for (var i = 0; i < optionNo; i++) {
            this.optionsArray.push(i)
        }
    }

    GetQuestionTypeByID(QuestionTypeID) {
        this.questionTypeService.getQuestionTypeByID(QuestionTypeID)
            .subscribe(response => {
                this.optionType = response.data.Name;
                console.log(this.optionType);
            })
    }

    CreateQuestion(Question: any) {
        this.Question["SurveyFormId"] = this.SurveyFormId;
        if (Question.IsRequired == undefined) {
            Question.IsRequired = false;
        }
        this.questionService.addQuestion(Question, this.OptionText)
            .subscribe(data => {
                this.AddQuestion = JSON.stringify(data);

                this.questionTypeService.getQuestionType()
                    .subscribe(response => {
                        this.questionTypes = response.data;
                    })
                this.isVisible = false;
                this.init();
            });
        alertify.success("Question Added Successfully");
    }

}

