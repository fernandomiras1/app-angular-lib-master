
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZPipesModule } from '@my-zumo/core/pipes';
import { ZBrowserDirective } from './browser/browser.directive';
import { ZErrorFeedbackDirective } from './error-feedback/error-feedback.directive';
import { ZHoverDirective } from './hover/hover.directive';
import { ZOuterClickDirective } from './outerclick/outerclick.directive';
import { ZRippleEffectDirective } from './ripple-effect/ripple-effect.directive';
import { ZServicesModule } from '@my-zumo/core/services';
import { StickyHeaderDirective } from './sticky-header/sticky-header.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ZPipesModule.forRoot(),
    ZServicesModule.forRoot()
  ],
  declarations: [
    ZRippleEffectDirective,
    ZHoverDirective,
    ZOuterClickDirective,
    ZBrowserDirective,
    ZErrorFeedbackDirective,
    StickyHeaderDirective
  ],
  exports: [
    ZRippleEffectDirective,
    ZHoverDirective,
    ZOuterClickDirective,
    ZBrowserDirective,
    ZErrorFeedbackDirective,
    StickyHeaderDirective,
    ZServicesModule
  ]
})
export class ZDirectiveModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ZDirectiveModule
    };
  }
}
