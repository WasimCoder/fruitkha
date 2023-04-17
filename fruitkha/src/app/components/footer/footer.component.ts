import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { links } from 'src/app/environments/fruitkha.model';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  constructor(private route: Router, private links: FruitsService){}
nav:links[]=[];
  ngOnInit():void{
    this.links.getLinks().subscribe((data)=>{
      this.nav = data;
    })
  }
}
