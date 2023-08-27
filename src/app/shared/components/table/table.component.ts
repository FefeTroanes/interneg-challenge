import {Component, Input} from '@angular/core';
import {DecimalPipe, NgFor} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgbPaginationModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import { AbmService } from "@modules/abm/services/abm.service";

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

  recurso: string = 'clientes';

  // page = 1;
  // pageSize = 4;
  // collectionSize = this.dataArray.length;
  countries: any[] | undefined;

  constructor(private abmService: AbmService) {
    // this.refreshCountries();
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
