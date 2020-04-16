import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyHeaderDirective } from './sticky-header.directive';
import { ZHoverDirective } from './hover/hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StickyHeaderDirective,
    ZHoverDirective
  ],
  exports: [
    StickyHeaderDirective,
    ZHoverDirective
  ]
})
export class ZDirectiveModule {}
