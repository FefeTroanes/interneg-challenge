import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdvRoutingModule } from './pdv-routing.module';
import { PdvPageComponent } from './pages/pdv-page/pdv-page.component';


@NgModule({
  declarations: [
    PdvPageComponent
  ],
  imports: [
    CommonModule,
    PdvRoutingModule
  ]
})
export class PdvModule { }
