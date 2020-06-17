import { NgModule } from '@angular/core';

import { ChipsRoutingModule } from './chips.routing';
import { CommonModule } from '@angular/common';
import { MyZumoModule } from 'my-zumo';
import { FormsModule } from '@angular/forms';
import { ChipsComponent } from './chips.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChipsRoutingModule,
        MyZumoModule
    ],
    declarations: [ChipsComponent],
    entryComponents: [ChipsComponent],
    exports: [ChipsComponent]
})
export class ChipsModule { }
