///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './AppComponent';

//import { SelectModule } from 'ng2-select';
//import { BootstrapModalModule, DialogService } from 'ng2-bootstrap-modal';

import { QuestionComponent } from './Question/Generated.Question.Component';
import { AnswerComponent } from './Answer/Generated.Answer.Component';
import { SurveyFormComponent } from './SurveyForm/Generated.SurveyForm.Component';
import { SurveyNameComponent } from './SurveyForm/SurveyName/Generated.SurveyName.Component';
import { SurveyAnswerComponent } from './SurveyAnswer/Generated.SurveyAnswer.Component';
import { DynamicFormComponent } from './DynamicForm/Generated.DynamicForm.Component';


@NgModule({
    bootstrap: [AppComponent],
    imports: [RouterModule.forRoot([
        //{ path: '', redirectTo: 'question', pathMatch: 'full' },
        { path: '', redirectTo: 'dynamicForm', pathMatch: 'full' },
        { path: 'question/:SurveyFormId', component: QuestionComponent },
        { path: 'answer', component: AnswerComponent },
        { path: 'displayQuestion/:SurveyFormId', component: AnswerComponent },
        { path: 'surveyForm/:SurveyFormId', component: SurveyFormComponent },
        { path: 'formName', component: SurveyNameComponent },
        { path: 'surveyAnswer/:SurveyFormId', component: SurveyAnswerComponent },
        { path: 'dynamicForm', component: DynamicFormComponent }

    ]), BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, QuestionComponent, AnswerComponent, SurveyFormComponent, SurveyNameComponent, SurveyAnswerComponent, DynamicFormComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    entryComponents: [SurveyNameComponent, SurveyFormComponent, DynamicFormComponent]
})
export class AppModule { }