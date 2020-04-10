import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGZContainerChipsComponent } from './chips.component';
import { NGZChipComponent } from './chip/chip.component';

@NgModule({
  declarations: [
    NGZContainerChipsComponent,
    NGZChipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NGZContainerChipsComponent,
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
