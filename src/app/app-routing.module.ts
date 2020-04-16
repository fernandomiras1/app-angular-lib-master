import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'card',
    data: {title: 'Card'},
    loadChildren: () => import('./pages/components/card/card.module').then(m => m.CardModule)
  },
  {
    path: 'button',
    data: {title: 'Button'},
    loadChildren: () => import('./pages/components/button/button.module').then(m => m.ButtonModule)
  },
  {
    path: 'chips',
    data: {title: 'Chips'},
    loadChildren: () => import('./pages/components/chips/chips.module').then(m => m.ChipsModule)
  },
  {
    path: 'slider-control',
    data: {title: 'Slider Control'},
    loadChildren: () => import('./pages/components/slider-control/slider-control.module').then(m => m.SliderControlModule)
  },
  {
    path: 'loading',
    data: {title: 'Loading'},
    loadChildren: () => import('./pages/components/loading/loading.module').then(m => m.LoadingModule)
  },
  {
    path: 'select',
    data: {title: 'select'},
    loadChildren: () => import('./pages/components/select/select.module').then(m => m.SelectModule)
  },
  {
    path: 'home',
    data: {title: 'Home'},
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

