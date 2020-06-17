import { NgModule } from '@angular/core';

import { LoadingRoutingModule } from './loading.routing';
import { CommonModule } from '@angular/common';
import { MyZumoModule } from 'my-zumo';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoadingRoutingModule,
        MyZumoModule
    ],
    declarations: [LoadingComponent],
    entryComponents: [LoadingComponent],
    exports: [LoadingComponent]
})
export class LoadingModule { }
