import { Component, ElementRef, OnInit } from '@angular/core';
import { contentlist, logoBox } from 'src/app/environments/fruitkha.model';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private eref: ElementRef,private contents: FruitsService){}
  public loaded:boolean = false;
  public content: contentlist[] = [];
  public logoContent: logoBox[] = [];
  ngOnInit(){
    setTimeout(() => {
      this.loaded=true;
    }, 1000);
    this.content= this.contents.getReviewContent();
    this.logoContent = this.contents.getLogoList();
  }
}
