import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards/authentication/auth.guard';
import { StefamonListComponent } from './stefamon-list/stefamon-list.component';

const routes: Routes = [
  { path: '', component: StefamonListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StefamonRoutingModule { }
