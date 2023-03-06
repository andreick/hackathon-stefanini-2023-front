import { NgModule } from '@angular/core';
import { JogadorPageComponent } from './jogador-page/jogador-page.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { StefamonModule } from '../stefamons/stefamon.module';
import { JogadorRoutingModule } from './jogador-routing.module';

@NgModule({
  declarations: [JogadorPageComponent],
  imports: [
    SharedModule,
    JogadorRoutingModule,
    StefamonModule
  ]
})
export class JogadorModule { }
