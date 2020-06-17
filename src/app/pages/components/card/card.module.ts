import { NgModule } from '@angular/core';

import { CardRoutingModule } from './card.routing';
import { CommonModule } from '@angular/common';
import { MyZumoModule } from 'my-zumo';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CardRoutingModule,
        MyZumoModule
    ],
    declarations: [CardComponent],
    entryComponents: [CardComponent],
    exports: [CardComponent]
})
export class CardModule { }
