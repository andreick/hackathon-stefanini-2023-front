import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from "@angular/platform-browser";

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
    MatIconModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    HeaderComponent,
    InputValidationComponent
  ],
})
export class SharedModule {
  constructor(
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'swords',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/swords.svg')
    );
    this.iconRegistry.addSvgIcon(
      'fast',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/fast.svg')
    );
  }
}
