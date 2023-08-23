import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdvPageComponent } from './pages/pdv-page/pdv-page.component';

const routes: Routes = [
  {
    path: '',
    component: PdvPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdvRoutingModule { }
