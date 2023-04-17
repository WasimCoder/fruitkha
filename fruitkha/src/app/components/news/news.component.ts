import { Component , OnInit } from '@angular/core';
import { newsList } from 'src/app/environments/fruitkha.model';
import { FruitsService } from 'src/app/services/fruits.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
  newsDetails: newsList[]=[]
constructor(private news: FruitsService){}
  ngOnInit(): void {
    this.newsDetails= this.news.getNews()
  }

}
