import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyHeaderDirective } from './sticky-header.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StickyHeaderDirective
  ],
  exports: [
    StickyHeaderDirective
  ]
})
export class ZDirectiveModule {}
