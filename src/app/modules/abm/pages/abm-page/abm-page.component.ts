import { Component } from '@angular/core';
import { NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AbmService } from '@modules/abm/services/abm.service';
import { NgForOf, NgIf } from "@angular/common";
import { SharedModule } from "@shared/shared.module";
import { Client } from 'src/app/core/models/client.model';
import { Item } from "../../../../core/models/item.model";
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

  constructor(private abmService: AbmService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.onClientsClick(this.active);
  }

  // Table Data
  clientHeaders: string[] = ["Nombre", "CUIT", "Email", "Domicilio", "Teléfono"];
  itemHeaders: string[] = ["Nombre", "Codigo"];
  productHeaders: string[] = ["Nombre", "Codigo", "Precio", "Rubro"];

  clientsArray: Client[] = [];
  itemsArray: Item[] = [];
  productsArray: Product[] = [];

  // Pagination data
  totalResults: number = 0;
  actualPage: number = 0;
  resultPerPage: number = 0;
  tempClient: Client | undefined;


  onClientsClick(active: number) {
    this.clientsArray = [];
    this.itemsArray = [];
    this.productsArray = [];

    switch (active) {
      case 1:
        this.recurso = 'clientes';
        break;
      case 2:
        this.recurso = 'rubros';
        break;
      case 3:
        this.recurso = 'productos';
        break;
    }

    this.abmService.getAllClients$(this.recurso).subscribe(data => {
      for (let i = 0; i < data.data.length; i++) {
        if (this.active == 1) {
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
        } else if (this.active == 2) {
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
        } else if (this.active == 3) {
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
      }
      console.log('data', data);
      console.log('cantidad,', data.pagination.resultPerPage);
      this.totalResults = data.pagination.totalResults;
      this.actualPage = data.pagination.actualPage;
      this.resultPerPage = data.pagination.resultPerPage;


    });
  }

  // openVerticallyCentered(content: Client) {
  //   this.modalService.open(content, { centered: true });
  // }

  viewClient(client: Client | undefined) {
    this.tempClient = client;
    this.modalService.open(client, { centered: true });
    console.log('esteee', this.tempClient);
  }
}
