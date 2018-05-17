import { GetArticlesService } from './get-articles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-articles',
  templateUrl: './get-articles.component.html',
  styleUrls: ['./get-articles.component.css']
})
export class GetArticlesComponent implements OnInit {
  articles = []
  message :any
  constructor(
    private GetArticlesService: GetArticlesService
  ) { }

  ngOnInit() {
    this.GetArticlesService.getAllArticles().subscribe(response =>
    {
      if(response){
        this.articles = response.data
      }
      else{
        this.message =response;
      }
    });
  }

}
