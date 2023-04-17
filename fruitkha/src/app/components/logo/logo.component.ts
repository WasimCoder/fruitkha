import { Component, Input } from '@angular/core';
import { logoBox } from 'src/app/environments/fruitkha.model';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  @Input() logoContent: logoBox[] = [];
}
