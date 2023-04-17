import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  constructor(private route: Router){}
  public header_variable:boolean = false;
  @HostListener('document:scroll') onScroll(){
    if(document.body.scrollTop>0 || document.documentElement.scrollTop>0){
      this.header_variable = true;
    }
    else{
      this.header_variable = false;
    }
  }
  shop(){
    this.route.navigate(['/shop'])
  }
  contact(){
    this.route.navigate(['/contact'])
  }

}
