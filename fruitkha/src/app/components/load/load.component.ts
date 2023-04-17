import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit{
  public loaded:boolean = false;
  constructor(private eref: ElementRef){}
  ngOnInit(){
    setTimeout(() => {
      
      this.loaded=true;
    }, 1000);
  }
  @HostListener ('load') onLoad(): void{

  }
}
