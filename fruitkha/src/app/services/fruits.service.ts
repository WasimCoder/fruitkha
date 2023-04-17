import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { links } from '../environments/fruitkha.model';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor( private route: Router, private http: HttpClient) { }
  link_url:string = '/assets/files/links.json';
  getLinks():Observable<links[]>{
    return this.http.get<links[]>(this.link_url)
  }
  getFruits(){
    return[
      {
        prodImage: '/assets/images/strawberry.jpg',
        prodName: 'Strawberry',
        prodPrice: '70$',
      },
      {
        prodImage: '/assets/images/grapes.jpg',
        prodName: 'Grapes',
        prodPrice: '50$',
      },
      {
        prodImage: '/assets/images/lemon.jpg',
        prodName: 'Lemon',
        prodPrice: '60$',
      },
      ]
  }
  getFruitsList(){
    return [
    {
      prodImage: '/assets/images/strawberry.jpg',
      prodName: 'Strawberry',
      prodPrice: '70$',
    },
    {
      prodImage: '/assets/images/grapes.jpg',
      prodName: 'Grapes',
      prodPrice: '50$',
    },
    {
      prodImage: '/assets/images/lemon.jpg',
      prodName: 'Lemon',
      prodPrice: '60$',
    },
    {
      prodImage: '/assets/images/kiwi.jpg',
      prodName: 'kiwi',
      prodPrice: '80$',
    },
    {
      prodImage: '/assets/images/apple.jpg',
      prodName: 'Green Apple',
      prodPrice: '60$',
    },
    {
      prodImage: '/assets/images/raspberry.jpg',
      prodName: 'Raspberry',
      prodPrice: '60$',
    },
    ]
  }
  getNews(){
    return [
      {
      newsImg: '/assets/images/news1.jpg',
      newsTopic: 'You will vainly look for fruit on it in autumn.',
      newsAuthor: 'Admin',
      newsDate: '10/02/2022',
      newsContent: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
      },
      {
        newsImg: '/assets/images/news2.jpg',
        newsTopic: "A man's worth has its season, like tomato.",
        newsAuthor: 'Admin',
        newsDate: '10/02/2022',
        newsContent: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
        },
        {
          newsImg: '/assets/images/news3.jpg',
          newsTopic: 'Good thoughts bear good fresh juicy fruit.',
          newsAuthor: 'Admin',
          newsDate: '10/02/2022',
          newsContent: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
          }
    ]
  }
  getLogoList(){
    return [ 
      {img:"/assets/images/logo1.png",src:"logos"} ,
      {img:"/assets/images/logo2.png",src:"logos"} ,
      {img:"/assets/images/logo3.png",src:"logos"} ,
      {img:"/assets/images/logo4.png",src:"logos"} , 
      {img:"/assets/images/logo5.png",src:"logos"}  
    ]
  }
  getReviewContent(){
    return [{
      image:'/assets/images/review1.png',
      name: 'Michael',
      work: 'software Developer',
      content: 'Hello i am Michael and i am a software developer'
    
    },{
      image:'/assets/images/review2.png',
      name: 'Sally',
      work: 'Model Designer',
      content: 'Hello i am Sally and i am a Model Designer'
    },{
      image:'/assets/images/review3.png',
      name: 'Peter',
      work: 'Marine Architect',
      content: 'Hello i am Peter and i am a Marine Architect'
    },
    ]
  }
  getNewsList(){
    return [
      {
      newsImg: '/assets/images/news1.jpg',
      newsTopic: 'You will vainly look for fruit on it in autumn.',
      newsAuthor: 'Admin',
      newsDate: '10/02/2022',
      newsContent: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
      },
      {
        newsImg: '/assets/images/news2.jpg',
        newsTopic: "A man's worth has its season, like tomato.",
        newsAuthor: 'Admin',
        newsDate: '10/02/2022',
        newsContent: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
        },
        {
          newsImg: '/assets/images/news3.jpg',
          newsTopic: 'Good thoughts bear good fresh juicy fruit.',
          newsAuthor: 'Admin',
          newsDate: '10/02/2022',
          newsContent: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
          },
          {
            newsImg: '/assets/images/news1.jpg',
            newsTopic: 'You will vainly look for fruit on it in autumn.',
            newsAuthor: 'Admin',
            newsDate: '10/02/2022',
            newsContent: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
            },
            {
              newsImg: '/assets/images/news2.jpg',
              newsTopic: "A man's worth has its season, like tomato.",
              newsAuthor: 'Admin',
              newsDate: '10/02/2022',
              newsContent: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
              },
              {
                newsImg: '/assets/images/news3.jpg',
                newsTopic: 'Good thoughts bear good fresh juicy fruit.',
                newsAuthor: 'Admin',
                newsDate: '10/02/2022',
                newsContent: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
                }
    ]
  }
}
