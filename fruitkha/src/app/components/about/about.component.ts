import { Component, OnInit } from '@angular/core';
import { contentlist, logoBox } from 'src/app/environments/fruitkha.model';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private contents: FruitsService){}
  content: contentlist[]= []
  logoContent: logoBox[] = []
  ngOnInit(): void {
    this.content = this.contents.getReviewContent();
    this.logoContent = this.contents.getLogoList();
  }
}
