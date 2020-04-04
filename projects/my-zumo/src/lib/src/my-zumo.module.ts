import { NgModule } from '@angular/core';
import { NGZButtonModule } from './components/button';
import { NGZAccordionModule } from './components/accordion';
import { ZUtilsModule } from './utils/utils.module';

@NgModule({
  imports: [ 
    ZUtilsModule,
    NGZButtonModule,
    NGZAccordionModule
  ],
  exports: [
    NGZButtonModule,
    NGZAccordionModule
  ]
})
export class MyZumoModule { }
