import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGZHeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NGZHeaderComponent
  ],
  exports: [
    NGZHeaderComponent
  ]
})
export class NGZHeaderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NGZHeaderModule
    };
  }
}
