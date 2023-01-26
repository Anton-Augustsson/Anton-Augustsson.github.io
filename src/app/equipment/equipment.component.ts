import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {
  @Input() title: String = "";
  @Input() url: String = "";
  @Input() image: String = "";
  @Input() desc: String = "";
  @Input() imageOnLeft: Boolean = true;
}
