import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { TriangleClass } from './triangle.class';
import { Form, FormBuilder, FormGroup, ValidationErrors, FormControl } from '@angular/forms';
import { Lab3Strings } from './lab3.strings.constant';
import { find, max } from 'lodash';
import { numberInputValidator } from './lab3Validators';
import { LabErrorDisplayService } from '../shared/error-display/lab-error-display.service';

@Component({
    selector: 'lab3',
    templateUrl: 'lab3.component.html',
    styleUrls: [
        'lab3.component.scss'
    ]
})
export class Lab3Component implements OnInit, OnDestroy {
    public triangleModel: TriangleClass;
    public form: FormGroup;
    @ViewChild('canvas') public canvasElRef: ElementRef;
    private get canvas(): HTMLCanvasElement {
        return this.canvasElRef.nativeElement;
    }
    private get canvasContext(): CanvasRenderingContext2D {
        return this.canvas.getContext('2d');
    }
    constructor(private formBuilder: FormBuilder,
    private labErrorDisplayService: LabErrorDisplayService) {

    }

    ngOnInit() {
        setTimeout(this.labErrorDisplayService.changeDisplayValue.emit(null), 100);
        this.form = this.formBuilder.group({
            a: [null, numberInputValidator],
            b: [null, numberInputValidator],
            c: [null, numberInputValidator]
        });
        this.form.valueChanges.subscribe((value) => {
            const a = this.form.get('a');
            const b = this.form.get('b');
            const c = this.form.get('c');
            if (a.valid && b.valid && c.valid && value.a && value.b && value.c) {
                const triangle: ITriangle = {
                    a: +value.a,
                    b: +value.b,
                    c: +value.c
                };
                this.triangleModel = new TriangleClass(triangle);
                if (this.triangleModel.isValid) {
                    this.drawTriangle();
                }
            } else {
                this.triangleModel = null;
                this.clearCanvas();
            }
        });
        this.canvas.width = 400;
        this.canvas.height = 300;
    }

    ngOnDestroy() {
        this.labErrorDisplayService.changeDisplayValue.emit(this.labErrorDisplayService.getDefaultDisplay());
    }

    public drawTriangle(): void {
        this.clearCanvas();
        const abc: number[] = [this.triangleModel.a, this.triangleModel.b, this.triangleModel.c];
        const longest = max(abc);
        for (let i = 0; i < 2; ++i) {
            if (abc[i] === longest) {
                abc.splice(i, 1);
                break;
            }
        }
        const firstLineLength = 300;
        const koeff = firstLineLength / longest;
        const firstLineX1 = this.canvas.width / 2 - firstLineLength / 2;
        const firstLineX2 = this.canvas.width / 2 + firstLineLength / 2;
        const firstLineY = this.canvas.height - 5;

        const circle0: ICircle = {
            center: {
                x: firstLineX1,
                y: firstLineY
            },
            radius: abc[0] * koeff
        }

        const circle1: ICircle = {
            center: {
                x: firstLineX2,
                y: firstLineY
            },
            radius: abc[1] * koeff
        }

        const intersections = this.calculateIntersecions(
            circle0.center.x, circle0.center.y, circle0.radius,
            circle1.center.x, circle1.center.y, circle1.radius
        ).p1;

        this.canvasContext.beginPath();
        this.canvasContext.moveTo(firstLineX1, firstLineY);
        this.canvasContext.lineTo(firstLineX2, firstLineY);
        this.canvasContext.lineTo(intersections.x, intersections.y);
        this.canvasContext.closePath();

        this.canvasContext.lineWidth = 10;
        this.canvasContext.strokeStyle = '#666666';
        this.canvasContext.stroke();

        this.canvasContext.fillStyle = '#FFCC00';
        this.canvasContext.fill();
    }

    private calculateIntersecions(cx0: number, cy0: number, radius0: number,
        cx1: number, cy1: number, radius1: number): { p1: IPoint, p2: IPoint } {
        const res = {
            p1: null,
            p2: null
        }

        const dx = cx0 - cx1;
        const dy = cy0 - cy1;
        const dist = Math.sqrt(dx * dx - dy * dy);
        if (dist > radius0 + radius1) {
            res.p1 = null;
            res.p2 = null;
        } else if (dist < Math.abs(radius0 - radius1)) {
            res.p1 = null;
            res.p2 = null;
        } else if (dist === 0 && radius0 === radius1) {
            res.p1 = null;
            res.p2 = null;
        } else {
            const a = (radius0 * radius0 - radius1 * radius1 + dist * dist) / (2 * dist);
            const h = Math.sqrt(radius0 * radius0 - a * a);

            const cx2 = cx0 + a * (cx1 - cx0) / dist;
            const cy2 = cy0 + a * (cy1 - cy0) / dist;

            res.p1 = {
                x: cx2 + h * (cy1 - cy0) / dist,
                y: cy2 - h * (cx1 - cx0) / dist
            };

            res.p2 = {
                x: cx2 - h * (cy1 - cy0) / dist,
                y: cy2 + h * (cx1 - cx0) / dist
            };
        }

        return res;
    }

    private getKeys(object: any): string[] {
        return Object.keys(object);
    }

    private clearCanvas(): void {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}