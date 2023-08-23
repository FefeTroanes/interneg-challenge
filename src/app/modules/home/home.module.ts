import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '@shared/shared.module';
import { AbmComponent } from './pages/abm/abm.component';
import { PuntoDeVentaComponent } from './pages/punto-de-venta/punto-de-venta.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AbmComponent,
    PuntoDeVentaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
