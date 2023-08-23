import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmRoutingModule } from './abm-routing.module';
import { AbmPageComponent } from './pages/abm-page/abm-page.component';


@NgModule({
  declarations: [
    AbmPageComponent
  ],
  imports: [
    CommonModule,
    AbmRoutingModule
  ]
})
export class AbmModule { }
