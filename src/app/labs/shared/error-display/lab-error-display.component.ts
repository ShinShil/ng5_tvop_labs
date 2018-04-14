import { Component, OnInit, Input, forwardRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'lab-error-display',
    templateUrl: 'lab-error-display.component.html',
    providers: [
        { 
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => LabErrorDisplayComponent),
          multi: true
        }
      ]
})
export class LabErrorDisplayComponent implements OnInit, ControlValueAccessor {
    private innerValue: ILabErrorDisplay;
    private onChangeEvents: any[] = [];
    
    public clickEvent = new EventEmitter<void>();

    public get value() {
        return this.innerValue;
    }

    @Input() public set value(value: ILabErrorDisplay) {
        this.writeValue(value);
        this.onChangeEvents.forEach(event => event(value));
    }

    ngOnInit() {
        if(!this.innerValue) {
            this.value = {
                images: true,
                description: true,
                steps: true,                
            }
        }
    }

    public click() {
        this.clickEvent.emit();
    }

    public writeValue(obj: any): void {
        this.innerValue = obj;
    }
    public registerOnChange(fn: any): void {
        this.onChangeEvents.push(fn);
    }
    public registerOnTouched(fn: any): void {
        
    }
    public setDisabledState?(isDisabled: boolean): void {
        
    }
}
