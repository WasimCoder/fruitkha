import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { links } from 'src/app/environments/fruitkha.model';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  nav:links[]=[];
  constructor(private route: Router, private links: FruitsService){}
  ngOnInit():void{
this.links.getLinks().subscribe( (data)=>{
  this.nav = data;
  console.log(data);
  
})
  }
  public header_variable:boolean = false;
  @HostListener('document:scroll') onScroll(){
    if(document.body.scrollTop>5 || document.documentElement.scrollTop>5){
      this.header_variable = true;
    }
    else{
      this.header_variable = false;
    }
  }
}
