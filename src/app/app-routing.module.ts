import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/authentication/auth.guard';
import { LoginGuard } from './core/guards/login/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((module) => module.HomeModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'stefamons',
    loadChildren: () => import('./modules/stefamons/stefamon.module').then((module) => module.StefamonModule),
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
