import { Component, OnInit } from '@angular/core';
import { clone } from 'lodash';

import { LabErrorDisplayService } from '../shared/error-display/lab-error-display.service';
import { CHECKMATES } from './chess4.constant';
import { SUPER_COW } from './super_cow.constant';
import { CHESS3 } from './chess3.constant';
import { CALC } from './calc.constant';
import { PYATNASHKI } from './pyatnashki.constant';


@Component({
    selector: 'lab2',
    templateUrl: 'lab2.component.html'
})
export class Lab2Component implements OnInit {
    public errors: ILabError[] = [];
    public display: ILabErrorDisplay;

    public applications = [
        {
            displayValue: 'Checkmates',
            value: CHECKMATES
        },
        {
            displayValue: 'SuperCow',
            value: SUPER_COW
        },
        {
            displayValue: 'Chess3',
            value: CHESS3
        },
        {
            displayValue: 'Calc',
            value: CALC
        },
        {
            displayValue: 'Pyatnashki',
            value: PYATNASHKI
        }];

    constructor(private displayService: LabErrorDisplayService) {
        this.errors = CHECKMATES; 
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