import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DecimalPipe, NgFor} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgbModal, NgbPaginationModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import { AbmService } from "@modules/abm/services/abm.service";
import {Client} from "../../../core/models/client.model";

@Component({
  selector: 'app-table',
  // standalone: true,
  // imports: [DecimalPipe, NgFor, FormsModule, NgbTypeaheadModule, NgbPaginationModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() headersArray: string[] = [];
  @Input() dataArray: any[] = [];
  @Input() active: number = 1;
  @Input() collectionSize: number = 0
  @Input() page: number = 1;
  @Input() pageSize: number = 6;

  @Output() onViewClient: EventEmitter<Client> = new EventEmitter();

  recurso: string = 'clientes';
  tempClient?: Client;

  // page = 1;
  // pageSize = 4;
  // collectionSize = this.dataArray.length;
  countries: any[] | undefined;

  constructor(private abmService: AbmService, private modalService: NgbModal) {
    // this.refreshCountries();
  }

  onView(client: Client) {
    this.onViewClient.emit(client);
    this.tempClient = {
      id:  client.id,
      cuit: client.cuit,
      nombre: client.nombre,
      email: client.email,
      telefono: client.telefono,
      domicilio: client.domicilio
    }
    console.log('tempclient: ', this.tempClient);
    // this.modalService.open(this.tempClient, { centered: true });


  }
  refreshCountries() {
    this.countries = this.dataArray.map((country, i) => ({ id: i + 1, ...country })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
    switch (this.active) {
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
    this.abmService.paginationControl$(this.recurso, this.pageSize, this.page).subscribe(data => {
      this.dataArray = data.data;
    });
  }
}
