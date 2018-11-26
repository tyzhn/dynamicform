import { Component } from '@angular/core';
import { OptionService } from './Generated.Option.Service';
declare var $: any;
@Component({
    selector: 'option',
    templateUrl: './Generated.Option.html',
	providers: [OptionService]
})

export class OptionComponent {

    OptionList: any;
    Option = {};
   
    constructor(private optionService: OptionService) {
	this.GetOption();
    }

	 GetOption() {
        this.optionService.getOption()
            .subscribe(result => { this.OptionList = result },
            error => console.log("error : " + error),
            function () { });
    }

	GetOptionById(OptionID: number) {
        this.optionService.getOptionByID(OptionID)
            .subscribe(result => { this.Option = result },
            error => console.log("error : " + error),
            function () { });
    }

    SaveOption(Option) {
    
        this.optionService.addOrUpdateOption(Option)
            .subscribe(result =>this.GetOption(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }


	DeleteOption(OptionID: number) {
    
        this.optionService.deleteOption(OptionID)
            .subscribe(result =>this.GetOption(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }

}

