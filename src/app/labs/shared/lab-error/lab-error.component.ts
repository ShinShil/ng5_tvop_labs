import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { clone } from 'lodash';
import { WordErrorService } from '../word-error/word-error.service';

@Component({
    selector: 'lab-error',
    templateUrl: 'lab-error.component.html',
    styles: [
        `
            .description {
                font-size: 16px;
            }

            .steps {
                font-size: 16px;
            }
        `
    ]
})
export class LabErrorComponent implements OnInit, OnChanges {
    @Input() error: ILabError;
    @Input() display: ILabErrorDisplay;
    @Input() header: IErrorHeader;
    @Input() titleIndex: number;

    constructor(private wordErrorService: WordErrorService) { }

    ngOnInit() {
        if (this.header) {
            this.header.reportIndex = this.titleIndex;
        }
        this.display = clone(this.display);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.display = clone(this.display);
    }

    public typeof(val) {
        return typeof (val);
    }


    public goToReport(header: IErrorHeader, error: ILabError) {
        this.wordErrorService.navigateToError(header, error);
    }
}