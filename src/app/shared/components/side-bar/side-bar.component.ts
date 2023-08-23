import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'; // esto
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  imports: [NgbNavModule, NgbNavModule], // esto
  standalone: true, // estp
})
export class SideBarComponent {
  
  active = 'top'; // esto

}


// @Component({
// 	selector: 'ngbd-nav-vertical',
// 	templateUrl: './nav-vertical.html',
// })
// export class NgbdNavVertical {
// }
