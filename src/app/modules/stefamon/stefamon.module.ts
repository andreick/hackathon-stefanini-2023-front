import { NgModule } from '@angular/core';

import { StefamonRoutingModule } from './stefamon-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StefamonComponent } from './stefamon.component';

@NgModule({
  declarations: [StefamonComponent],
  imports: [
    SharedModule,
    StefamonRoutingModule
  ]
})
export class StefamonModule { }
