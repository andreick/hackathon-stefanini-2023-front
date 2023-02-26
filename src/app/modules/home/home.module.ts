import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
