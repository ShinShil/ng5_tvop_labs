import { Component, OnInit } from '@angular/core';
import { ADDER_ERRORS } from './adder.constant';
import { clone } from 'lodash';
import { LabErrorDisplayService } from '../shared/error-display/lab-error-display.service';
import { CUBE_ERRORS } from './cube.constant';
import { CHESS1_ERRORS } from './chess1.constant';
import { CHESS2_ERRORS } from './chess2.constant';
import { TETRIS } from './tetris.constat';
import { SAPER } from './saper.constant';

@Component({
    selector: 'lab1',
    templateUrl: 'lab1.component.html'
})
export class Lab1Component {
    public appErrorsDescriptor = {
        errors: [],
        header: null
    };
    public display: ILabErrorDisplay;

    public applications = [
        {
            displayValue: 'Adder',
            value: {
                errors: ADDER_ERRORS,
                header: null
            }
        },
        {
            displayValue: 'Cube',
            value: {
                errors: CUBE_ERRORS,
                header: null
            }
        },
        {
            displayValue: 'Chess 1',
            value: {
                errors: CHESS1_ERRORS,
                header: null
            }
        },
        {
            displayValue: 'Chess 2',
            value: {
                errors: CHESS2_ERRORS,
                header: null
            }
        },
        {
            displayValue: 'Tetris',
            value: {
                errors: TETRIS,
                header: null
            }
        },
        {
            displayValue: 'Saper',
            value: {
                errors: SAPER,
                header: null
            }
        }
    ];

    constructor(private displayService: LabErrorDisplayService) {
        this.appErrorsDescriptor = this.applications[0].value;
        this.addHeaderes();
        this.display = displayService.getDefaultDisplay();
        this.displayService.changeDisplayValue.subscribe((value) => {
            setTimeout(() => this.display = clone(value), 100);
        })
    }

    private addHeaderes(): void {
        (this.applications[2] as any).value.header = this.getDefaultHeader('Draughts', '1.6', '01/09/2002');
        (this.applications[3] as any).value.header = this.getDefaultHeader('Checkers', '1.2.0.1', '09/04/2007');
        (this.applications[4] as any).value.header = this.getDefaultHeader('MegaTetris', '1.0', '05/07/2016');
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