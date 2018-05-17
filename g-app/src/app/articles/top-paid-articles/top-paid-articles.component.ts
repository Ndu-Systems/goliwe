import { GetArticlesService } from './../get-articles/get-articles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-paid-articles',
  templateUrl: './top-paid-articles.component.html',
  styleUrls: ['./top-paid-articles.component.css']
})
export class TopPaidArticlesComponent implements OnInit {

  articles = []
  message: any
  constructor(
    private GetArticlesService: GetArticlesService
  ) { }

  ngOnInit() {
      this.GetArticlesService.getAllArticles().subscribe(response =>{
        if(response){
          this.articles = response.data
        }
        else{
          this.message = response;
        }
      });
  }

}
