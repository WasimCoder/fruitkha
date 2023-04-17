import { Component, OnInit } from '@angular/core';
import { logoBox, newsList } from 'src/app/environments/fruitkha.model';
import { FruitsService } from 'src/app/services/fruits.service';

@Component({
  selector: 'app-tabnews',
  templateUrl: './tabnews.component.html',
  styleUrls: ['./tabnews.component.css']
})
export class TabnewsComponent implements OnInit {
  constructor(private news: FruitsService){}
  newsDetails: newsList[]=[]
  logoContent: logoBox[] =[]
  ngOnInit(): void {
    this.newsDetails= this.news.getNewsList();
    this.logoContent= this.news.getLogoList();
  }

  
}
