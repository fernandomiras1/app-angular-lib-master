import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZDirectiveModule } from './directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ZDirectiveModule
  ],
  exports: [
    ZDirectiveModule
  ]
})
export class ZUtilsModule {}
