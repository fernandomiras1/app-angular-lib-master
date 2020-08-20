import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule
  ]
})
export class ZUtilsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ZUtilsModule
    };
  }
}
