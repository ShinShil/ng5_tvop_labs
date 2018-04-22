import { Lab3Strings } from './lab3.strings.constant';
import { forEach } from 'lodash';

export class TriangleClass {
    public get a(): number {
        return this.triangle.a;
    }

    public get b(): number {
        return this.triangle.b;
    }

    public get c(): number {
        return this.triangle.c;
    }

    public get type(): string {
        let res = '';
        forEach([
            {
                check: !this.isValid,
                message: Lab3Strings.InfoBadTriangle
            },
            {
                check: this.isIsosceless,
                message: Lab3Strings.IsoscelesTriangle
            },
            {
                check: this.isEqualiteral,
                message: Lab3Strings.EquilateralTriangle
            },
            {
                check: this.isVersatile,
                message: Lab3Strings.VersatileTriangle
            }
        ], ({ check, message }) => {
            if (check) {
                res = message;
            }
            return !check;
        });
        return res;
    }

    public get isValid(): boolean {
        return this.a < this.b + this.c
            && this.b < this.a + this.c
            && this.c < this.b + this.a;
    }

    public get isEqualiteral(): boolean {
        return this.a == this.b
            && this.a == this.c
            && this.b == this.c;
    }

    public get isIsosceless(): boolean {
        return !this.isEqualiteral && (this.a == this.b
            || this.a == this.c
            || this.b == this.c);
    }

    public get isVersatile(): boolean {
        return !this.isEqualiteral && !this.isIsosceless;
    }

    constructor(public triangle: ITriangle) {
        if (!triangle.a || !triangle.b || !triangle.c) {
            throw Error('Valid numbers for triangle sides from 1 to 10^9');
        }
    }

}