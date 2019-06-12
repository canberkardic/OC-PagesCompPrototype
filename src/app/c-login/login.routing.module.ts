import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-component/login.component';
import { SuccessComponent } from './success-component/success.component';
import { ForgotComponent } from './forgot-component/forgot.component';
import { FailComponent } from './fail-component/fail.component';

export const LoginRotalari: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'success',
        component: SuccessComponent
      },
      {
        path: 'fail',
        component: FailComponent
      },
      {
        path: 'forgot',
        component: ForgotComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(LoginRotalari)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }