import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { DynamicFormService } from './Generated.DynamicForm.Service';

declare var $: any;
//import alertify from 'alertify.js';

@Component({
    selector: 'dynamic-form',
    templateUrl: '../app/DynamicForm/Generated.DynamicForm.html',
    styleUrls: ['../app/SurveyForm/surveyForm.css'],
    providers: [DynamicFormService]
})

export class DynamicFormComponent {

    public FormList;
    constructor(private dynamicFormService: DynamicFormService, private router: Router, private route: ActivatedRoute) { this.init(); }

    init() {
        this.dynamicFormService.getDynamicForms()
            .subscribe(response => {
                this.FormList = response;
                console.log(this.FormList);
            })
    }
}

