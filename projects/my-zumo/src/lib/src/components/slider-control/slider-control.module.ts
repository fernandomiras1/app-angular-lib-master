import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGZSliderControlComponent } from './slider-control.component';
import { ZUtilsModule } from '../../utils/utils.module';

@NgModule({
  declarations: [
    NGZSliderControlComponent
  ],
  imports: [
    CommonModule,
    ZUtilsModule
  ],
  exports: [
    NGZSliderControlComponent
  ]
})
export class NGZSliderControlModule {}
