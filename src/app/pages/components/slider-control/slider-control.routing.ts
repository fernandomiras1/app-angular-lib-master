import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderControlComponent } from './slider-control.component';


const routes: Routes = [
    {
        path: '',
        component: SliderControlComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SliderControlRoutingModule { }
