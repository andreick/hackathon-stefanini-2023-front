import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StefamonComponent } from './stefamon.component';

const routes: Routes = [
  { path: '', component: StefamonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StefamonRoutingModule { }
