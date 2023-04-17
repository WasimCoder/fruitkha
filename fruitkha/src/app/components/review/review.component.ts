import { Component, Input, OnInit } from '@angular/core';
interface reviewContent{
  image: string;
  name: string;
  work: string;
  content: string;
}
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{
  constructor(){
    setInterval(()=>{
      if(this.selectedIndex<this.content.length-1){
        this.selectedIndex++;
      } else {
        this.selectedIndex-=this.content.length-1;
      }
    },3000)
  }
ngOnInit(): void {
  
}
@Input() content: reviewContent[] =[]; //Declared with interface
@Input() indicators:boolean = false; //Indicating if dots needed or not
@Input() controls:boolean = false; //Indicating if buttons needed or not
selectedIndex = 0;//Default Index

selectImage(index: number){
this.selectedIndex = index;
}
onPrevClick(): void{
if(this.selectedIndex===0){
  this.selectedIndex = this.content.length-1;
} else {
  this.selectedIndex--;
}
}
onNextClick(): void{
if(this.selectedIndex<this.content.length-1){
  this.selectedIndex++;
} else {
  this.selectedIndex-=this.content.length-1;
}
}
autoplay(): void{
}
}
