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
  MatButtonModule
} from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';

import{BarChartModule} from '../../projects/c-energy-bar-chart/src/lib/barchart.module'

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
    MatNativeDateModule,
    BarChartModule
  ],
  declarations: [AppComponent],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
