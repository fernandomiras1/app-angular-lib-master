import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MYButtonComponent } from './button.component';
import { NGZLoadingModule } from '../loading/loading.module';
@NgModule({
  imports: [
    CommonModule,
    NGZLoadingModule
  ],
  declarations: [
    MYButtonComponent
  ],
  exports: [
    MYButtonComponent
  ]
})
export class NGZButtonModule {}
