import { Component, OnInit } from '@angular/core';
import { clone } from 'lodash';

import { LabErrorDisplayService } from '../shared/error-display/lab-error-display.service';


@Component({
    selector: 'lab2',
    templateUrl: 'lab2.component.html'
})
export class Lab2Component implements OnInit {
    public errors: ILabError[] = [];
    public display: ILabErrorDisplay;

    public applications = [];

    constructor(private displayService: LabErrorDisplayService) {
        this.errors = [];
        this.display = displayService.getDefaultDisplay();
        this.displayService.changeDisplayValue.subscribe((value) => {
            setTimeout(() => this.display = clone(value), 100);
        })
    }

    ngOnInit() {

    }

    public setErrors() {

    }
}