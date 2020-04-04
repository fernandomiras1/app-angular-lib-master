import { NgModule } from '@angular/core';
import { NGZButtonModule } from './components/button';
import { NGZAccordionModule } from './components/accordion';
import { ZUtilsModule } from './utils/utils.module';
import { NGZCardModule } from './components/card/card.module';

@NgModule({
  imports: [
    ZUtilsModule,
    NGZButtonModule,
    NGZAccordionModule,
    NGZCardModule
  ],
  exports: [
    NGZButtonModule,
    NGZAccordionModule,
    NGZCardModule
  ],
  declarations: []
})
export class MyZumoModule { }
