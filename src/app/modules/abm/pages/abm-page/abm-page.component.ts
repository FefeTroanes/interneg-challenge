import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AbmService } from '@modules/abm/services/abm.service';
import { fromEvent } from 'rxjs';
import {NgIf} from "@angular/common";
import {SharedModule} from "@shared/shared.module";

@Component({
  selector: 'app-abm-page',
  standalone: true,
  imports: [NgbNavModule, NgIf, SharedModule],
  templateUrl: './abm-page.component.html',
  styleUrls: ['./abm-page.component.css']
})
export class AbmPageComponent {

  active = 1;

  recurso: string = 'clientes';
  // recurso: string = 'rubros';
  // recurso: string = 'productos';

  constructor(private abmService: AbmService) {}

  ngOnInit(): void {
    // enum Recurso {
    //   Clientes = 1,
    //   Rubros = 2,
    //   Productos = 3
    // }
    // this.recurso = Recurso[this.active];




    this.abmService.getAllClients$(this.recurso).toPromise()
      .then( response => {
        console.log(response);
      })
      .catch( err => {
        console.log(err);
      });
  }

  keysArray: string[] = ["nombre", "cuit", "email", "domicilio", "telefono"];
  // clientsArray: 

  onClientsClick() {
    this.abmService.getAllClients$(this.recurso).toPromise()
    .then( response => {
      // this.keysArray = Object.keys(response.data[0]);
      // console.log('estee ', this.keysArray);
      console.log(response.data[0].nombre);

      // for (let i=0; i < response.data.length; i++) {
      //   console.log('estooo ', response.data[i]);
      // }


      // console.log(response);
      // console.log(response.data[0].id);
      // console.log(response.data[1]);
    })
    .catch( err => {
      console.log(err);
    });
  }
}
