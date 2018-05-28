import { UserDataService } from './../../shared/user-data.service';
import { GetArticlesService } from './../get-articles/get-articles.service';
 
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer";
import { ViewArticleService } from 'src/app/articles/view-article/view-article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Article } from 'src/app/models/Article';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  ArticleId : number;
  article: any;
  message :any; 
  public articles : Observable<Article[]>;
  user: any;
  name: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ViewArticleService,
    private getAritclesService: GetArticlesService,
    private shoppingCartService: ShoppingCartService,
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.ArticleId = parseInt(this.route.snapshot.paramMap.get("ArticleId"));
    this.viewArticle(this.ArticleId);
    this.user = this.userDataService.getUser();
    
    this.name = this.user.Email;
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

  public addArticleToCart(article: Article){
      this.shoppingCartService.addItem(article,1);
  }
  public removeArticleFromCart(article: Article){
    this.shoppingCartService.addItem(article,-1);
  }

  public articleInCart(article: Article): boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
                      .get()
                      .subscribe((cart) => {
                        obs.next(cart.items.some((i) => i.ArticleId === article.ArticleId));
                        obs.complete();
                      });
      sub.unsubscribe();
    });
  }

}
