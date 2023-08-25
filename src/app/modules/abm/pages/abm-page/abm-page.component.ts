import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AbmService } from '@modules/abm/services/abm.service';
import { fromEvent } from 'rxjs';
import {NgForOf, NgIf} from "@angular/common";
import {SharedModule} from "@shared/shared.module";
import { Client } from 'src/app/core/models/client.model';
import {Item} from "../../../../core/models/item.model";
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-abm-page',
  standalone: true,
  imports: [NgbNavModule, NgIf, SharedModule, NgForOf],
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
    this.abmService.getAllClients$(this.recurso).toPromise()
      .then( response => {
        console.log(response);
      })
      .catch( err => {
        console.log(err);
      });
  }

  clientHeaders: string[] = ["Nombre", "CUIT", "Email", "Domicilio", "Teléfono"];
  itemHeaders: string[] = ["Nombre", "Codigo"];
  productHeaders: string[] = ["Nombre", "Codigo", "Precio", "Rubro"];

  clientsArray: Client[] = [];
  itemsArray: Item[] = [];
  productsArray: Product[] = []

  onClientsClick() {
    this.clientsArray = []
    this.itemsArray = [];
    this.productsArray = [];

    if (this.active == 1) {
      this.recurso = 'clientes';
      this.abmService.getAllClients$(this.recurso).subscribe(data => {
        for (let i=0; i < data.data.length; i++) {
          let client: Client = {
            id: data.data[i].id,
            cuit: data.data[i].cuit,
            nombre: data.data[i].nombre,
            email: data.data[i].email,
            telefono: data.data[i].telefono,
            domicilio: data.data[i].domicilio,
            created_at: data.data[i].created_at,
            updated_at: data.data[i].updated_at,
            cuit_formateado: data.data[i].cuit_formateado,
          }
          this.clientsArray.push(client);
        }
        console.log('client array ', this.clientsArray);
      })
    } else if (this.active == 2) {
      this.recurso = 'rubros';
      this.abmService.getAllClients$(this.recurso).subscribe(data => {
        for (let i=0; i < data.data.length; i++) {
          let item: Item = {
            id: data.data[i].id,
            codigo: data.data[i].codigo,
            nombre: data.data[i].nombre,
            created_at: data.data[i].created_at,
            updated_at: data.data[i].updated_at,
            deleted_at: data.data[i].deleted_at,
            numero: data.data[i].numero
          }
          this.itemsArray.push(item);
        }
        console.log('client array ', this.itemsArray);
      })
    } else if (this.active == 3) {
      this.recurso = 'productos';
      this.abmService.getAllClients$(this.recurso).subscribe(data => {
        for (let i=0; i < data.data.length; i++) {
          let product: Product = {
            id: data.data[i].id,
            rubro_id: data.data[i].rubro_id,
            nombre: data.data[i].nombre,
            codigo: data.data[i].codigo,
            precio: data.data[i].precio,
            created_at: data.data[i].created_at,
            updated_at: data.data[i].updated_at,
            deleted_at: data.data[i].deleted_at,
            numero: data.data[i].numero,
            rubro: data.data[i].rubro
          }
          this.productsArray.push(product);
        }
        console.log('client array ', this.productsArray);
      })
    }
  }
}
