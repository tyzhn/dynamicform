"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="./../typings/globals/core-js/index.d.ts"/>
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var common_2 = require("@angular/common");
var AppComponent_1 = require("./AppComponent");
//import { SelectModule } from 'ng2-select';
//import { BootstrapModalModule, DialogService } from 'ng2-bootstrap-modal';
var Generated_Question_Component_1 = require("./Question/Generated.Question.Component");
var Generated_Answer_Component_1 = require("./Answer/Generated.Answer.Component");
var Generated_SurveyForm_Component_1 = require("./SurveyForm/Generated.SurveyForm.Component");
var Generated_SurveyName_Component_1 = require("./SurveyForm/SurveyName/Generated.SurveyName.Component");
var Generated_SurveyAnswer_Component_1 = require("./SurveyAnswer/Generated.SurveyAnswer.Component");
var Generated_DynamicForm_Component_1 = require("./DynamicForm/Generated.DynamicForm.Component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [AppComponent_1.AppComponent],
            imports: [router_1.RouterModule.forRoot([
                    //{ path: '', redirectTo: 'question', pathMatch: 'full' },
                    { path: '', redirectTo: 'dynamicForm', pathMatch: 'full' },
                    { path: 'question/:SurveyFormId', component: Generated_Question_Component_1.QuestionComponent },
                    { path: 'answer', component: Generated_Answer_Component_1.AnswerComponent },
                    { path: 'displayQuestion/:SurveyFormId', component: Generated_Answer_Component_1.AnswerComponent },
                    { path: 'surveyForm/:SurveyFormId', component: Generated_SurveyForm_Component_1.SurveyFormComponent },
                    { path: 'formName', component: Generated_SurveyName_Component_1.SurveyNameComponent },
                    { path: 'surveyAnswer/:SurveyFormId', component: Generated_SurveyAnswer_Component_1.SurveyAnswerComponent },
                    { path: 'dynamicForm', component: Generated_DynamicForm_Component_1.DynamicFormComponent }
                ]), platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule],
            declarations: [AppComponent_1.AppComponent, Generated_Question_Component_1.QuestionComponent, Generated_Answer_Component_1.AnswerComponent, Generated_SurveyForm_Component_1.SurveyFormComponent, Generated_SurveyName_Component_1.SurveyNameComponent, Generated_SurveyAnswer_Component_1.SurveyAnswerComponent, Generated_DynamicForm_Component_1.DynamicFormComponent],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, { provide: common_2.LocationStrategy, useClass: common_2.HashLocationStrategy }],
            entryComponents: [Generated_SurveyName_Component_1.SurveyNameComponent, Generated_SurveyForm_Component_1.SurveyFormComponent, Generated_DynamicForm_Component_1.DynamicFormComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.js.map