import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StefamonModule } from '../stefamons/stefamon.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, SignupComponent, JogadorFormComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    StefamonModule
  ]
})
export class HomeModule { }
