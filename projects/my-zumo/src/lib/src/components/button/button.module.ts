import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGZButtonComponent } from './button.component';

@NgModule({
  imports: [
    CommonModule,
    // NGZLoadingModule
  ],
  declarations: [
    NGZButtonComponent
  ],
  exports: [
    NGZButtonComponent
  ]
})
export class NGZButtonModule { }
