import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGZLoadingComponent } from './loading.component';

@NgModule({
  declarations: [
    NGZLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NGZLoadingComponent
  ]
})
export class NGZLoadingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NGZLoadingModule
    };
  }
}
