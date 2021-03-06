import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-fiture/login.component';
import { RegistrasiComponent } from './registrasi/registrasi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OTPComponent } from './OTP-fitur/otp-fitur.component';
import { UpdateBioComponent } from './dashboard/body/update-bio/update-bio.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrasiComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
      path:'otp',
      component: OTPComponent
  },
  {
    path:'profile',
    component: UpdateBioComponent 
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiturRoutingModule { }
