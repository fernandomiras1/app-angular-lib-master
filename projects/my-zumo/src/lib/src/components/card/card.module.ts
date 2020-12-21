import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MYCardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MYCardComponent
  ],
  exports: [
    MYCardComponent
  ]
})
export class NGZCardModule {}
