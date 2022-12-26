import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './views/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './views/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './views/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './views/page-sign-up/page-sign-up.component';

const routes: Routes = [
  
  // La route localhost:4200/sign-in affiche le component PageSignInComponent
  { path: 'sign-in', component: PageSignInComponent },
  // La route localhost:4200/sign-up affiche le component PageSignUpComponent
  { path: 'sign-up', component: PageSignUpComponent },
  // La route localhost:4200/reset affiche le component PageResetPasswordComponent
  { path: 'reset', component: PageResetPasswordComponent },
  // La route localhost:4200/forgot affiche le component PageForgotPasswordComponent
  { path: 'forgot', component: PageForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
