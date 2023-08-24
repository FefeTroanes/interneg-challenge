import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-abm-page',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './abm-page.component.html',
  styleUrls: ['./abm-page.component.css']
})
export class AbmPageComponent {
  active = 1;

}
