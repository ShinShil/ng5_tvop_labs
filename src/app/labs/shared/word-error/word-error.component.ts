import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'word-error',
    templateUrl: 'word-error.component.html',
    styleUrls: ['word-error.component.scss']
})
export class WordErrorComponent implements OnInit {
    @Input() public header: IErrorHeader;
    @Input() public error: ILabError;

    constructor() { }

    ngOnInit() { 

    }

}