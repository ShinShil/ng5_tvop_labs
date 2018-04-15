import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class WordErrorService {
    public header: IErrorHeader;
    public error: ILabError;

    constructor(private router: Router) { }

    public navigateToError(header: IErrorHeader, error: ILabError): void {
        this.header = header;
        this.error = error;
        console.log(this.error);
        this.router.navigate(['/','word-error']);
    }
}