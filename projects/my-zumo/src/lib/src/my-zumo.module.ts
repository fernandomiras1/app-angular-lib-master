import { NgModule } from '@angular/core';
import { NGZAccordionModule } from './components/accordion/accordion.module';
import { CommonModule } from '@angular/common';
import { NGZButtonModule } from './components/button';
import { NGZCardModule } from './components/card/card.module';
import { NGZHeaderModule } from './components/header/header.module';
import { NGZSliderControlModule } from './components/slider-control/slider-control.module';
import { NGZLoadingModule } from './components/loading';
import { NGZChipsModule } from './components/chips';
import { NGZSelectModule } from './components/select';

@NgModule({
  imports: [
    CommonModule,
    NGZAccordionModule,
    NGZButtonModule,
    NGZCardModule,
    NGZHeaderModule,
    NGZSliderControlModule,
    NGZLoadingModule,
    NGZChipsModule,
    NGZSelectModule
  ],
  exports: [
    NGZAccordionModule,
    NGZButtonModule,
    NGZCardModule,
    NGZHeaderModule,
    NGZSliderControlModule,
    NGZLoadingModule,
    NGZChipsModule,
    NGZSelectModule
  ]
})
export class MyZumoModule {}
