import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MYLoadingComponent } from './loading.component';

@NgModule({
  declarations: [
    MYLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MYLoadingComponent
  ]
})
export class NGZLoadingModule {}
