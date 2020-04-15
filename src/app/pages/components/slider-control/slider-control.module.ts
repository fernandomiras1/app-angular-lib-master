import { NgModule } from '@angular/core';

import { SliderControlRoutingModule } from './slider-control.routing';
import { CommonModule } from '@angular/common';
import { MyZumoModule } from 'projects/my-zumo/src/public-api';
import { FormsModule } from '@angular/forms';
import { SliderControlComponent } from './slider-control.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SliderControlRoutingModule,
        MyZumoModule
    ],
    declarations: [SliderControlComponent],
    entryComponents: [SliderControlComponent],
    exports: [SliderControlComponent]
})
export class SliderControlModule { }
