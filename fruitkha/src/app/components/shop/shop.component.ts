import { Component, OnInit } from '@angular/core';
import { FruitsService } from 'src/app/services/fruits.service';
interface productList{
  prodImage: string;
  prodName: string;
  prodPrice:string
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  constructor(private fruitlist: FruitsService){}
  productList: productList[] = []
  ngOnInit(): void {
    this.productList = this.fruitlist.getFruitsList()
  }
    searchText: string = '';
    onSearchTextEntered(searchValue: string){
      this.searchText = searchValue;
      console.log(this.searchText)
    }
}
