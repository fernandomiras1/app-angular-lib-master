import { NgModule } from '@angular/core';

import { NGZButtonComponent } from './components/button/button.component';
import { NGZAccordionComponent } from './components/accordion/accordion.component';
import { NGZCardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NGZAccordionComponent,
    NGZButtonComponent,
    NGZCardComponent,
    HeaderComponent
  ],
  exports: [
    NGZAccordionComponent,
    NGZButtonComponent,
    NGZCardComponent,
    HeaderComponent
  ]
})
export class MyZumoModule { }
