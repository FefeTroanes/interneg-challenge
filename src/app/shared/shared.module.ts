import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [
  
  
    NavComponent
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
    NavComponent
  ]
})
export class SharedModule { }
