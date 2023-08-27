import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {NgbCollapseModule, NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { ModalComponent } from './components/modal/modal.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NavComponent,
    TableComponent,
    ClientFormComponent,
  ],
  imports: [
    ModalComponent,
    HeaderComponent,
    SideBarComponent,
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    FormsModule,
    NgbPagination
  ],
  exports: [
    SideBarComponent,
    HeaderComponent,
    NavComponent,
    TableComponent,
    ModalComponent,
    ClientFormComponent
  ]
})
export class SharedModule { }
