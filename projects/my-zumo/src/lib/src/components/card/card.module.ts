import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGZCardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NGZCardComponent
  ],
  exports: [
    NGZCardComponent
  ]
})
export class NGZCardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NGZCardModule
    };
  }
}
