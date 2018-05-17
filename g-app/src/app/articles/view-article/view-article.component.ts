import { ViewArticleService } from 'src/app/articles/view-article/view-article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {


  ArticleId : number;
  article: any;
  message :any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ViewArticleService
  ) { }

  ngOnInit() {
    this.ArticleId = parseInt(this.route.snapshot.paramMap.get("ArticleId"));
    this.viewArticle(this.ArticleId);
  }
  viewArticle(ArticleId) {
    this.articleService.viewArticle(ArticleId).subscribe(response =>{
      if(response){
        this.article = response.Articles[0]
      }
      else{
        this.message = response;
      }
    })
  }

  topPaid(){
    this.router.navigate(['/Top-Paid']);
  }
}
