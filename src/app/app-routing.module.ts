import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'components',
    data: {title: 'Form componentse'},
    loadChildren: './pages/components/components.module#ComponentModule'
    // loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'home',
    data: {title: 'Contacts'},
    loadChildren: './pages/home/home.module#HomeModule'
    // loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: '/components',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

