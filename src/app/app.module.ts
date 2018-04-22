import '../styles/styles.scss';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSidenavModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'environments/environment';

import { AppComponent } from './app.component';
import { Lab1Component } from './labs/lab1/lab1.component';
import { LabErrorDisplayComponent } from './labs/shared/error-display/lab-error-display.component';
import { LabErrorDisplayService } from './labs/shared/error-display/lab-error-display.service';
import { LabErrorComponent } from './labs/shared/lab-error/lab-error.component';
import { Lab2Component } from './labs/lab2/lab2.component';
import { WordErrorComponent } from './labs/shared/word-error/word-error.component';
import { WordErrorService } from './labs/shared/word-error/word-error.service';
import { Lab3Component } from './labs/lab3/lab3.component';

const ROUTES: Routes = [
  { redirectTo: 'lab1', path: '', pathMatch: 'full' },
  { component: Lab1Component, path: 'lab1' },
  { component: WordErrorComponent, path: 'word-error' },
  { component: Lab2Component, path: 'lab2' },
  { component: Lab3Component, path: 'lab3' }
]

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    Lab1Component,
    Lab2Component,
    Lab3Component,
    WordErrorComponent,
    LabErrorComponent,
    LabErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    environment.ENV_PROVIDERS,
    LabErrorDisplayService,
    WordErrorService
  ]
})
export class AppModule {}
