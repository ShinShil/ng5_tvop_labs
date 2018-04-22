import { TestBed } from '@angular/core/testing';
import { TriangleClass } from './triangle.class';
import { forEach } from 'lodash';
import { numberInputValidator } from './lab3Validators';
import { FormControl } from '@angular/forms';
import { Lab3Strings } from './lab3.strings.constant';
const isocleless = [
    new TriangleClass({
        a: 20,
        b: 20,
        c: 10
    }),
    new TriangleClass({
        a: 1,
        b: 2,
        c: 2
    }),
    new TriangleClass({
        a: 999999999,
        b: 999999999,
        c: 999999998
    })
]

const equalateral = [
    new TriangleClass({
        a: 999999999,
        b: 999999999,
        c: 999999999
    }),
    new TriangleClass({
        a: 1,
        b: 1,
        c: 1
    }),
    new TriangleClass({
        a: 15,
        b: 15,
        c: 15
    })
];

const versatile = [
    new TriangleClass({
        a: 15,
        b: 14,
        c: 13
    }),
    new TriangleClass({
        a: 999999997,
        b: 999999998,
        c: 999999999
    }),
    new TriangleClass({
        a: 2,
        b: 3,
        c: 4
    })
];

const invalidTriangle = [
    new TriangleClass({
        a: 1,
        b: 2,
        c: 3
    }),
    new TriangleClass({
        a: 1,
        b: 999999999,
        c: 1
    }),
    new TriangleClass({
        a: 15,
        b: 50,
        c: 15
    })
];

describe('Get triangle type', () => {
    forEach(isocleless, triangle => {
        it(`Isocleless triangle: ${triangle.a}, ${triangle.b} ${triangle.c}`, () => {
            expect(triangle.isIsosceless).toBeTruthy();
        });
    });
    forEach(equalateral, triangle => {
        it(`Equalateral triangle: ${triangle.a}, ${triangle.b} ${triangle.c}`, () => {
            expect(triangle.isEqualiteral).toBeTruthy();
        });
    });
    forEach(versatile, triangle => {
        it(`Versatile triangle: ${triangle.a}, ${triangle.b} ${triangle.c}`, () => {
            expect(triangle.isVersatile).toBeTruthy();
        });
    });
    forEach(invalidTriangle, triangle => {
        it(`Invalid triangle: ${triangle.a}, ${triangle.b} ${triangle.c}`, () => {
            expect(triangle.isValid).toBeFalsy();
        });
    });
});

const required = [null, undefined, ''];
const invalid = ['qer', 'sss'];
const complex = ['21i'];
const negative = ['-21'];
const float = ['23.2'];
const tooBig = ['1000000001'];
describe('Check input', () => {
    forEach(required, value => {
        it('Input required', () => {
            expect((numberInputValidator({ value } as FormControl)).isError === Lab3Strings.ValueIsRequired).toBeTruthy();
        });
    });
    forEach(invalid, value => {
        it('Input has invalid symbols', () => {
            expect((numberInputValidator({ value } as FormControl)).isError === Lab3Strings.ErrorNumberContainsInvalidSymbols).toBeTruthy();
        });
    });
    forEach(negative, value => {
        it('Input is negative', () => {
            expect((numberInputValidator({ value } as FormControl)).isError === Lab3Strings.ErrorNumberNegative).toBeTruthy();
        });
    });
    forEach(float, value => {
        it('Input is float number', () => {
            expect((numberInputValidator({ value } as FormControl)).isError === Lab3Strings.ErrorNumberFractional).toBeTruthy();
        });
    });
    forEach(complex, value => {
        it('Input is complex', () => {
            expect((numberInputValidator({ value } as FormControl)).isError === Lab3Strings.ErrorNumberComplex).toBeTruthy();
        });
    });
    forEach(tooBig, value => {
        it('Input is too big', () => {
            expect((numberInputValidator({ value } as FormControl)).isError === Lab3Strings.ErrorNumberTooBig).toBeTruthy();
        });
    });
});