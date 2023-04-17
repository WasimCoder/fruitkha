import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private route: Router){}
  ngOnInit(): void {
    
  }
  title = 'fruitkha';
  // public about(){
  //   this.route.navigate(['/about'])
  // }
  // public home(){
  //   this.route.navigate(['/home'])
  // }
  // public news(){
  //   this.route.navigate(['/news'])
  // }
  // public contact(){
  //   this.route.navigate(['/contact'])
  // }
  // public cart(){
  //   this.route.navigate(['/cart'])
  // }
  // public shop(){
  //   this.route.navigate(['/shop'])
  // }
  // public links:object = {
  //   "home": this.home(),
  //   "about": this.about(),
  //   "news": this.news(),
  //   "contact": this.contact(),
  //   "shop": this.shop(),
  //   "cart": this.cart(),
  // }
}
