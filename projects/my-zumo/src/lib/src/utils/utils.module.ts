import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZDirectiveModule } from './directives/directives.module';
import { ZFormModule } from './forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ZDirectiveModule,
    ZFormModule
  ],
  exports: [
    ReactiveFormsModule,
    ZDirectiveModule,
    ZFormModule
  ]
})
export class ZUtilsModule {}
