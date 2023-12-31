import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmRoutingModule } from './abm-routing.module';
import { AbmPageComponent } from './pages/abm-page/abm-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AbmRoutingModule,
    AbmPageComponent,
    SharedModule
  ],
  exports: [
    AbmPageComponent
  ]
})
export class AbmModule { }
