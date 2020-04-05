import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGZAccordionComponent } from './accordion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NGZAccordionComponent
  ],
  exports: [
    NGZAccordionComponent
  ]
})
export class NGZAccordionModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NGZAccordionModule
    };
  }
}
