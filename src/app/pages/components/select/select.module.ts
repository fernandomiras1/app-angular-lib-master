import { NgModule } from '@angular/core';

import { SelectRoutingModule } from './select.routing';
import { CommonModule } from '@angular/common';
import { MyZumoModule } from 'projects/my-zumo/src/public-api';
import { SelectComponent } from './select.component';
@NgModule({
    imports: [
        CommonModule,
        SelectRoutingModule,
        MyZumoModule
    ],
    declarations: [SelectComponent],
    entryComponents: [SelectComponent],
    exports: [SelectComponent]
})
export class SelectModule { }
