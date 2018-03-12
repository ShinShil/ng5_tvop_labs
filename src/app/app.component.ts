/**
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { LabErrorDisplayService } from './labs/shared/error-display/lab-error-display.service';

@Component({
  selector: 'app',
  styleUrls: [
    './app.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html'
})
export class AppComponent {
  public display: ILabErrorDisplay;
  constructor(private displayService: LabErrorDisplayService) {
    this.display = displayService.getDefaultDisplay();
  }

  public updateDisplay() {
    setTimeout(() => this.displayService.changeDisplayValue.emit(this.display), 100);
  }
}
