import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGZHeaderComponent } from './header.component';
import { ZDirectiveModule } from '../../utils/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ZDirectiveModule
  ],
  declarations: [
    NGZHeaderComponent
  ],
  exports: [
    NGZHeaderComponent
  ]
})
export class NGZHeaderModule {}
