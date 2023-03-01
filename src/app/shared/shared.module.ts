import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

import { HeaderComponent } from './components/header/header.component';
import { InputValidationComponent } from './components/input-validation/input-validation.component';

@NgModule({
  declarations: [HeaderComponent, InputValidationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    HeaderComponent,
    InputValidationComponent
  ],
})
export class SharedModule { }
