import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login-component/login.component';
import { SuccessComponent } from './success-component/success.component';
import { ForgotComponent } from './forgot-component/forgot.component';
import { FailComponent } from './fail-component/fail.component';

import { LoginRoutingModule } from './login.routing.module';

@NgModule({
    imports: [
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent,
        SuccessComponent,
        ForgotComponent,
        FailComponent,
    ],
    exports: [RouterModule]
})
export class LoginModule { }