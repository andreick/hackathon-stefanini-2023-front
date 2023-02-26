import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    MenubarModule
  ],
  exports: [
    CommonModule,
    CardModule,
    ButtonModule,
    MenubarModule,
  ]
})
export class SharedModule { }
