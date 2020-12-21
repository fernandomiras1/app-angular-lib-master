import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MYContainerChipsComponent } from './chips.component';
import { NGZChipComponent } from './chip/chip.component';

@NgModule({
  declarations: [
    MYContainerChipsComponent,
    NGZChipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MYContainerChipsComponent,
    NGZChipComponent
  ]
})
export class NGZChipsModule {
  constructor() {}
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NGZChipsModule
    };
  }
}
