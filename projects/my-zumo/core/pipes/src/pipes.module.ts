import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZDatePipe } from './date.pipes';
import { ZSafePipe } from './safe.pipes';
import { ZIterateKeys } from './iterate-keys.pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ZDatePipe,
    ZSafePipe,
    ZIterateKeys
  ],
  exports: [
    ZDatePipe,
    ZSafePipe,
    ZIterateKeys
  ]
})
export class ZPipesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ZPipesModule
    };
  }
}
