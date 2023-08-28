import {Component, Input} from '@angular/core';
import { Subscription } from "rxjs";
import { Client } from "../../../core/models/client.model";
import { AbmService } from "@modules/abm/services/abm.service";

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {
  // @Output() onAddTask: EventEmitter<Task> = new EventEmitter
  // @Input() nombre!: string;
  // @Input() cuit!: string;
  // @Input() email!: string;
  // @Input() domicilio!: string;
  // @Input() telefono!: string;

  @Input() editClient?: Client;

  nombre: string = this.editClient ? this.editClient.nombre : '';
  cuit: string = this.editClient ? this.editClient.cuit : '';
  email: string = this.editClient ? this.editClient.email : '';
  domicilio: string = this.editClient ? this.editClient.domicilio : '';
  telefono: string = this.editClient ? this.editClient.telefono : '';

  constructor(private abmService: AbmService ) {}
  // subscription: Subscription;

  // constructor(private uiService: UiService) {
  //   this.subscription = this.uiService.onToggle().subscribe(value => (this.showAddTask = value))
  // }

  onSubmit() {
    if(!this.nombre) {
      alert('Por favor ingrese un nombre');
      return;
    }
    if(!this.cuit) {
      alert('Por favor ingrese el cuit');
      return;
    }
    if(!this.email) {
      alert('Por favor ingrese el email');
      return;
    }
    if(!this.domicilio) {
      alert('Por favor ingrese el domicilio');
      return;
    }
    if(!this.telefono) {
      alert('Por favor ingrese el telefono');
      return;
    }


    const newClient: Client = {
      nombre: this.nombre,
      cuit: this.cuit,
      email: this.email,
      domicilio: this.domicilio,
      telefono: this.telefono,
    }

    // this.onAddTask.emit(newTask);
    console.log(newClient);
    this.abmService.createClient$(newClient);

    this.nombre = '';
    this.cuit ='';
    this.email = '';
    this.domicilio = '';
    this.telefono = '';
  }
}
