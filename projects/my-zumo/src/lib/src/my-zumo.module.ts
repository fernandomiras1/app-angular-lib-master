import { NgModule } from '@angular/core';
import { NGZAccordionModule } from './components/accordion/accordion.module';
import { CommonModule } from '@angular/common';
import { NGZButtonModule } from './components/button';
import { NGZCardModule } from './components/card/card.module';
import { NGZHeaderModule } from './components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    NGZAccordionModule,
    NGZButtonModule,
    NGZCardModule,
    NGZHeaderModule
  ],
  exports: [
    NGZAccordionModule,
    NGZButtonModule,
    NGZCardModule,
    NGZHeaderModule
  ]
})
export class MyZumoModule {}
