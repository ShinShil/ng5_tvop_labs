import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ADDER_ERRORS } from '../../lab1/adder.constant';
import { clone } from 'lodash';

@Injectable()
export class WordErrorService {
    public header: IErrorHeader;
    public error: ILabError;

    constructor(private router: Router) { }

    public navigateToError(header: IErrorHeader, error: ILabError): void {
        this.error = error;
        this.header = header;
        console.log({
            header,
            error
        });
        if(!this.error || !this.header) {
            const defaults = this.getDefaults();
            this.error = defaults.error;
            this.header = defaults.header;
        }
        this.router.navigate(['/','word-error']);
    }

    public getDefaults(): { error: ILabError, header: IErrorHeader } {
        const error = ADDER_ERRORS[0];
        const header = {
           releaseDate: '12/02/2018',
           releaseVersion: '1.2',
           workerName: 'Никита Старостин',
           companyName: 'Старостин Никита, гр.551004',
           confidence: '',
           appName: 'Chess2',
           reportIndex: 1,
           createdAt: '12/02/2018' 
        } as IErrorHeader;
        error.fix = 'Нужно сделать так, чтобы просто работало и не было никаких багов',
        error.repeatable = true;
        error.importance = 1;
        error.type = 1;
        return {
            error: ADDER_ERRORS[0],
            header
        }
    }
}