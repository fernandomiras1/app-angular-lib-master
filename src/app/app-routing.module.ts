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
    data: {title: 'Buttin'},
    loadChildren: () => import('./pages/components/button/button.module').then(m => m.ButtonModule)
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

