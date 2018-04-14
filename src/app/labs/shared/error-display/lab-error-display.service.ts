import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LabErrorDisplayService {
    public changeDisplayValue = new EventEmitter<ILabErrorDisplay>();

    public getDefaultDisplay(): ILabErrorDisplay {
        return {
            description: true,
            steps: false,
            images: true
        }
    }

}