import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from "@angular/platform-browser";

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BlockUIModule } from 'primeng/blockui';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { HeaderComponent } from './components/header/header.component';
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { BlockSpinnerComponent } from './components/block-spinner/block-spinner.component';

@NgModule({
  declarations: [HeaderComponent, InputValidationComponent, BlockSpinnerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    CardModule,
    ButtonModule,
    BlockUIModule,
    MenubarModule,
    InputTextModule,
    ProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    HeaderComponent,
    InputValidationComponent,
    BlockSpinnerComponent
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
