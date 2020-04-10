import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { ComponentRoutingModule } from './components.routing';
import { CommonModule } from '@angular/common';
import { MyZumoModule } from 'projects/my-zumo/src/public-api';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ComponentRoutingModule,
        MyZumoModule
    ],
    declarations: [ComponentsComponent],
    entryComponents: [ComponentsComponent],
    exports: [ComponentsComponent]
})
export class ComponentModule { }
