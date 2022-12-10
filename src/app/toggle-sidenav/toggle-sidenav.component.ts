import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-sidenav',
  templateUrl: './toggle-sidenav.component.html',
  styleUrls: ['./toggle-sidenav.component.css']
})
export class ToggleSidenavComponent {
  @Input() direction: boolean = false;


}
