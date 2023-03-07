import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/authentication/auth.guard';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: LoginComponent, canActivate: [AuthGuard] },
      { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
