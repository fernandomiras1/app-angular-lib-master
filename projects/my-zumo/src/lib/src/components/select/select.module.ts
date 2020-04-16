import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGZSelectComponent } from './select.component';
import { NGZSelectResultsComponent } from './select-results/select-results.component';
import { ZUtilsModule } from '../../utils/utils.module';

@NgModule({
  declarations: [
    NGZSelectComponent,
    NGZSelectResultsComponent
  ],
  imports: [
    CommonModule,
    ZUtilsModule
  ],
  exports: [
    NGZSelectComponent,
    NGZSelectResultsComponent
  ],
  entryComponents: [NGZSelectResultsComponent]
})
export class NGZSelectModule {
  constructor() {}
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NGZSelectModule
    };
  }
}
