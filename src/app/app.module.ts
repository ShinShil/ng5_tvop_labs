import '../styles/styles.scss';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { environment } from 'environments/environment';

import { AppComponent } from './app.component';
import { Lab1Component } from './labs/lab1/lab1.component';
import { LabErrorDisplayComponent } from './labs/shared/error-display/lab-error-display.component';
import { LabErrorDisplayService } from './labs/shared/error-display/lab-error-display.service';
import { LabErrorComponent } from './labs/shared/lab-error/lab-error.component';

const ROUTES: Routes = [
  {  }
]

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    Lab1Component,
    LabErrorComponent,
    LabErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [
    environment.ENV_PROVIDERS,
    LabErrorDisplayService
  ]
})
export class AppModule {}
