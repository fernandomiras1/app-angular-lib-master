import { NgModule } from '@angular/core';
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
export class NGZCardModule {}
