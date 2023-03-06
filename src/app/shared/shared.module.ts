import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from "@angular/platform-browser";

import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { BlockUIModule } from 'primeng/blockui';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { HeaderComponent } from './components/header/header.component';
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { BlockSpinnerComponent } from './components/block-spinner/block-spinner.component';
import { CustomConfirmDialogComponent } from './components/custom-confirm-dialog/custom-confirm-dialog.component';
import { GlobalToastComponent } from './components/global-toast/global-toast.component';

@NgModule({
  declarations: [HeaderComponent, InputValidationComponent, BlockSpinnerComponent, CustomConfirmDialogComponent, GlobalToastComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    CardModule,
    ToastModule,
    ButtonModule,
    BlockUIModule,
    MenubarModule,
    InputTextModule,
    ConfirmDialogModule,
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
    BlockSpinnerComponent,
    CustomConfirmDialogComponent,
    GlobalToastComponent
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
