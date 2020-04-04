import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZHoverDirective } from './hover/hover.directive';
import { ZOuterClickDirective } from './outerclick/outerclick.directive';
import { ZBrowserDirective } from './browser/browser.directive';
import { ZRippleEffectDirective } from './ripple-effect/ripple-effect.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ZRippleEffectDirective,
    ZHoverDirective,
    ZOuterClickDirective,
    ZBrowserDirective
  ],
  exports: [
    ZRippleEffectDirective,
    ZHoverDirective,
    ZOuterClickDirective,
    ZBrowserDirective
  ]
})
export class ZDirectiveModule {}
