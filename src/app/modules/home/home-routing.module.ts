import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AbmComponent } from './pages/abm/abm.component';
import { PuntoDeVentaComponent } from './pages/punto-de-venta/punto-de-venta.component';

const routes: Routes = [
  {
    path: 'abm',
    loadChildren: () => import('@modules/abm/abm.module').then(m => m.AbmModule)
  },
  {
    path: 'pdv',
    loadChildren: () => import('@modules/pdv/pdv.module').then(m => m.PdvModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
