import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './components/header/header.component';
import { InputValidationComponent } from './components/input-validation/input-validation.component';

@NgModule({
  declarations: [HeaderComponent, InputValidationComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    MenubarModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    HeaderComponent,
    InputValidationComponent
  ],
})
export class SharedModule { }
