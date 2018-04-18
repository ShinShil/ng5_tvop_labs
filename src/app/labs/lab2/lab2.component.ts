
import { Component, OnInit } from '@angular/core';
import { clone } from 'lodash';
import { LabErrorDisplayService } from '../shared/error-display/lab-error-display.service';
import { CHECKMATES } from './checkmates.constant';
import { SUPER_COW } from './super_cow.constant';
import { CHESS3 } from './chess3.constant';
import { CALC } from './calc.constant';
import { PYATNASHKI } from './pyatnashki.constant';

@Component({
    selector: 'lab2',
    templateUrl: 'lab2.component.html'
})
export class Lab2Component {
    public appErrorsDescriptor = {
        errors: [],
        header: null
    };
    public display: ILabErrorDisplay;

    public applications = [
        {
            displayValue: 'Checkmates',
            value: {
                errors: CHECKMATES,
                header: null
            }
        },
        {
            displayValue: 'SuperCow',
            value: {
                errors: SUPER_COW,
                header: null
            }
        },
        {
            displayValue: 'Chess3',
            value: {
                errors: CHESS3,
                header: null
            }
        },
        {
            displayValue: 'Calc',
            value: {
                errors: CALC,
                header: null
            }
        },
        {
            displayValue: 'Pyatnashki',
            value: {
                errors: PYATNASHKI,
                header: null
            }
        }];

    constructor(private displayService: LabErrorDisplayService) {
        this.appErrorsDescriptor = this.applications[0].value;
        this.addHeaderes();
        this.display = displayService.getDefaultDisplay();
        this.displayService.changeDisplayValue.subscribe((value) => {
            setTimeout(() => this.display = clone(value), 100);
        })
    }

    private addHeaderes(): void {
        (this.applications[0] as any).value.header = this.getDefaultHeader('Project1', '1.0', '30/05/2012');
        (this.applications[1] as any).value.header = this.getDefaultHeader('SuperCow', '1.6', '03/08/2007');
        (this.applications[2] as any).value.header = this.getDefaultHeader('ShashkiRozum', '1.0', '05/04/2014');
        (this.applications[3] as any).value.header = this.getDefaultHeader('Calc', '1.0', '09/04/2007');
        (this.applications[4] as any).value.header = this.getDefaultHeader('Pyatnashki', '1.0', '05/07/2016');
    }

    private getDefaultHeader(appName: string, releaseVersion: string, releaseDate: string): IErrorHeader {
        return {
            releaseDate,
            releaseVersion,
            appName,
            confidence: '',
            createdAt: '17/04/2018',
            workerName: 'Старостин Никита',
            companyName: 'Старостин Никита, гр. 551004',
            reportIndex: 0
        }
    }
}
