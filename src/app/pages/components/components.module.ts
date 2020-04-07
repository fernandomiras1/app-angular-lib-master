import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { ComponentRoutingModule } from './components.routing';
import { CommonModule } from '@angular/common';
import { MyZumoModule } from 'projects/my-zumo/src/public-api';

@NgModule({
    imports: [
        CommonModule,
        ComponentRoutingModule,
        MyZumoModule
    ],
    declarations: [ComponentsComponent],
    entryComponents: [ComponentsComponent],
    exports: [ComponentsComponent]
})
export class ComponentModule { }
