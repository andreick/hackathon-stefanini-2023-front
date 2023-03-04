import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StefamonListComponent } from './stefamon-list/stefamon-list.component';

const routes: Routes = [
  { path: '', component: StefamonListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StefamonRoutingModule { }
