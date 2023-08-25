import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    NavComponent,
    TableComponent
  ],
  imports: [
    HeaderComponent,
    SideBarComponent,
    CommonModule,
    RouterModule,
    NgbCollapseModule
  ],
  exports: [
    SideBarComponent,
    HeaderComponent,
    NavComponent,
    TableComponent
  ]
})
export class SharedModule { }
