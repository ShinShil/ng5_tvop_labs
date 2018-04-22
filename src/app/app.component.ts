/**
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { LabErrorDisplayService } from './labs/shared/error-display/lab-error-display.service';

@Component({
  selector: 'app',
  styleUrls: [
    './app.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public display: ILabErrorDisplay;
  constructor(private displayService: LabErrorDisplayService) {
    this.display = displayService.getDefaultDisplay();
    this.displayService.changeDisplayValue.subscribe(value => {
      setTimeout(() => this.display = value, 100)
    })
  }

  public ngOnInit() {
    this.display = this.displayService.getDefaultDisplay();
  }

  public updateDisplay() {
    setTimeout(() => this.displayService.changeDisplayValue.emit(this.display), 100);
  }
}
