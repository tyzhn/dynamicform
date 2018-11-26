import { Component } from '@angular/core';
import { sysdiagramsService } from './Generated.sysdiagrams.Service';
declare var $: any;
@Component({
    selector: 'sysdiagrams',
    templateUrl: './Generated.sysdiagrams.html',
	providers: [sysdiagramsService]
})

export class sysdiagramsComponent {

    sysdiagramsList: any;
    sysdiagrams = {};
   
    constructor(private sysdiagramsService: sysdiagramsService) {
	this.Getsysdiagrams();
    }

	 Getsysdiagrams() {
        this.sysdiagramsService.getsysdiagrams()
            .subscribe(result => { this.sysdiagramsList = result },
            error => console.log("error : " + error),
            function () { });
    }

	GetsysdiagramsById(sysdiagramsID: number) {
        this.sysdiagramsService.getsysdiagramsByID(sysdiagramsID)
            .subscribe(result => { this.sysdiagrams = result },
            error => console.log("error : " + error),
            function () { });
    }

    Savesysdiagrams(sysdiagrams) {
    
        this.sysdiagramsService.addOrUpdatesysdiagrams(sysdiagrams)
            .subscribe(result =>this.Getsysdiagrams(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }


	Deletesysdiagrams(sysdiagramsID: number) {
    
        this.sysdiagramsService.deletesysdiagrams(sysdiagramsID)
            .subscribe(result =>this.Getsysdiagrams(),
            error => console.log("error : " + error),
            function () { console.log("Save completed!!!") });
    }

}

