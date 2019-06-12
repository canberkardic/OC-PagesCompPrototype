import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login-component/login.component';
import { SuccessComponent } from '../success-component/success.component';
import { ForgotComponent } from '../forgot-component/forgot.component';
import { FailComponent } from '../fail-component/fail.component';

const routes: Routes = [
  { path: '', redirectTo: 'LoginComponent', pathMatch: 'full' },
  {
    path: '',
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
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}