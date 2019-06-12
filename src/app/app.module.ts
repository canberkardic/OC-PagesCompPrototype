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
import { AppRoutingModule} from './router/app-routing.module';

import{BarChartModule} from '../../projects/c-energy-bar-chart/src/lib/barchart.module';
import { ForgotComponent } from './forgot-component/forgot.component';
import { LoginComponent } from './login-component/login.component';
import { SuccessComponent } from './success-component/success.component';
import { FailComponent } from './fail-component/fail.component';
import { LayoutComponent } from './router/layout.component';


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
    BarChartModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, ForgotComponent,LoginComponent, FailComponent, SuccessComponent, LayoutComponent],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
