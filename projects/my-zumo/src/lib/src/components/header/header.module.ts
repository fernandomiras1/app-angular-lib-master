import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MYHeaderComponent } from './header.component';
import { ZDirectiveModule } from '../../utils/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ZDirectiveModule
  ],
  declarations: [
    MYHeaderComponent
  ],
  exports: [
    MYHeaderComponent
  ]
})
export class NGZHeaderModule {}
