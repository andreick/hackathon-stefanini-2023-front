import { NgModule } from '@angular/core';

import { StefamonRoutingModule } from './stefamon-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StefamonComponent } from './stefamon/stefamon.component';
import { StefamonListComponent } from './stefamon-list/stefamon-list.component';

@NgModule({
  declarations: [StefamonComponent, StefamonListComponent],
  imports: [
    SharedModule,
    StefamonRoutingModule
  ],
  exports: [StefamonComponent]
})
export class StefamonModule { }
