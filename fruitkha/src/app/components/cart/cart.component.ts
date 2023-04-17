import { Component } from '@angular/core';
import { logoBox } from 'src/app/environments/fruitkha.model';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private contents: FruitsService){}
  logoContent: logoBox[] = []
  ngOnInit(): void {
    this.logoContent = this.contents.getLogoList();
  }
}
