import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[screenmouse]'
})
export class StyleDirective {
  constructor(private eref: ElementRef) { }
  @HostListener('mouseover') onMouseOver(){
    setTimeout( ()=>{
      this.eref.nativeElement.display = "none";  
      this.eref.nativeElement.opacity = "0";  
    },4000)
    
  }
 
}
