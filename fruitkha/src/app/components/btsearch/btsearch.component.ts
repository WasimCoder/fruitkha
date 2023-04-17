import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btsearch',
  templateUrl: './btsearch.component.html',
  styleUrls: ['./btsearch.component.css']
})
export class BtsearchComponent {

    enteredSearchValue:string ='';
    @Output()
    searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
    value(value:string){
      this.enteredSearchValue= value;
    }
    onSearchTextChanged(){
      this.searchTextChanged.emit(this.enteredSearchValue)
    }
}
