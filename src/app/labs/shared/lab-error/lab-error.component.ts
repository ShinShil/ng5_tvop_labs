import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { clone } from 'lodash';

@Component({
    selector: 'lab-error',
    templateUrl: 'lab-error.component.html'
})
export class LabErrorComponent implements OnInit, OnChanges {
    @Input() error: ILabError;
    @Input() display: ILabErrorDisplay;
    @Input() titleIndex: number;

    constructor() { }

    ngOnInit() { 
        this.display = clone(this.display);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.display = clone(this.display);
    }

    public typeof(val) {
        return typeof(val);
    }
}