import { Component, OnInit } from '@angular/core';
import { ADDER_ERRORS } from './adder.constant';
import { clone } from 'lodash';
import { LabErrorDisplayService } from '../shared/error-display/lab-error-display.service';
import { CUBE_ERRORS } from './cube.constant';

@Component({
    selector: 'lab1',
    templateUrl: 'lab1.component.html'
})
export class Lab1Component implements OnInit {
    public errors: ILabError[] = [];
    public display: ILabErrorDisplay

    private applications = [
        {
            displayValue: 'Adder',
            value: ADDER_ERRORS
        },
        {
            displayValue: 'Cube',
            value: CUBE_ERRORS
        }]

    constructor(private displayService: LabErrorDisplayService) {
        this.errors = ADDER_ERRORS;
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