import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatButtonModule
} from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BarchartComponent } from './barchart/barchart.component';

import { TURKISH_DATE_FORMATS, TurkishDateFormat } from './utils/turkish-date-format';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,

    NgxChartsModule,

    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,

    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [ BarchartComponent],
  providers: [
    { provide: DateAdapter, useClass: TurkishDateFormat },
    { provide: MAT_DATE_FORMATS, useValue: TURKISH_DATE_FORMATS },
  ],
  exports: [BarchartComponent]
})

export class BarChartModule { }
