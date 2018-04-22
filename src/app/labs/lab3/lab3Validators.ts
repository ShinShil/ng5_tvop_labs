import { FormControl, ValidationErrors } from '@angular/forms';
import { Lab3Strings } from './lab3.strings.constant';
import { find } from 'lodash';

export const numberInputValidator = (formControl: FormControl): ValidationErrors => {
    let errors = null;
    let value: string = formControl.value;
    const num = Number(value);
    let errorsConfigs = [];
    if (num != null && !isNaN(num) && value != null) {
        errorsConfigs = [
            {
                isError: isFloat(num),
                errorMessage: Lab3Strings.ErrorNumberFractional,
            },
            {
                isError: num < 0,
                errorMessage: Lab3Strings.ErrorNumberNegative
            },
            {
                isError: num > Math.pow(10, 9),
                errorMessage: Lab3Strings.ErrorNumberTooBig
            }
        ];
    } else if (value != null) {
        errorsConfigs = [
            {
                isError: value.indexOf('i') === value.lastIndexOf('i') && value.lastIndexOf(',') !== -1,
                errorMessage: Lab3Strings.ErrorNumberComplex
            },
            {
                isError: true,
                errorMessage: Lab3Strings.ErrorNumberContainsInvalidSymbols
            }
        ]
    } else {
        errorsConfigs = [
            {
                isError: true,
                errorMessage: Lab3Strings.ValueIsRequired
            }
        ]
    }

    errors = find(errorsConfigs, conf => conf.isError)
    if (errors) {
        errors = {
            isError: errors.errorMessage
        }
    }
    return errors;
}

export const isFloat = (n: number): boolean => {
    return Number(n) === n && n % 1 !== 0;
}