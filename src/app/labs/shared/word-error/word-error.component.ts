import { Component, OnInit, Input } from '@angular/core';
import { WordErrorService } from './word-error.service';

@Component({
    selector: 'word-error',
    templateUrl: 'word-error.component.html',
    styleUrls: ['word-error.component.scss']
})
export class WordErrorComponent implements OnInit {
    public header: IErrorHeader;
    public error: ILabError;

    constructor(
        private wordErrorService: WordErrorService
    ) { }

    ngOnInit() { 
        this.header = this.wordErrorService.header;
        this.error = this.wordErrorService.error; 
        if(!this.error) {
            const defaults = this.wordErrorService.getDefaults();
            this.error = defaults.error;
            this.header = defaults.header;
        }
    }

}