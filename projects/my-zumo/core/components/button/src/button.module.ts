import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGZButtonComponent } from './button.component';
import { NGZLoadingModule } from '@my-zumo/core/components/loading';
@NgModule({
  imports: [
    CommonModule,
    NGZLoadingModule
  ],
  declarations: [
    NGZButtonComponent
  ],
  exports: [
    NGZButtonComponent
  ]
})
export class NGZButtonModule {}
