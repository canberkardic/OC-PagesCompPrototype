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
import { LoginModule } from './c-login/login.module';
/**
 * 1. Login.module > LoginModule, LoginRoutes ([])
 *  a. app.module> children: LoginRoutes (eager loading)
 * 2. Login.module içinde LoginRouteModule içereceği için
 *  a. app.module> loadChildren: LoginModule ?
 *  b. app.module> loadChildren: LoginRoutingModule ?
 */


import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,

    NgxChartsModule,
    RouterModule,
    // ROUTING
    LoginModule,
    RouterModule.forRoot([
      { path: '', component: HelloComponent },
      { path: '**', redirectTo: '' }
    ]),

    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,

    MatDatepickerModule,
    MatNativeDateModule
  ],


  declarations: [
    HelloComponent,
    AppComponent
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
