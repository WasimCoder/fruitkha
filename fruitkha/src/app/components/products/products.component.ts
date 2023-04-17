import { Component , OnInit} from '@angular/core';
import { productList } from 'src/app/environments/fruitkha.model';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor( private fruits:FruitsService){}
  public productList: productList[] = []
  ngOnInit(): void {
    this.productList= this.fruits.getFruits();
  }
  

}
