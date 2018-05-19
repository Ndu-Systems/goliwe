import { ShoppingCartService } from './shopping-cart.service';
import { GetArticlesService } from './../articles/get-articles/get-articles.service';
import { ShoppingCart } from './../models/shopping-cart';
import {ChangeDetectionStrategy, Component, OnInit,OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Article } from 'src/app/models/Article';
import { Subscription } from 'rxjs/internal/Subscription';
 
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit,OnDestroy {
  public articles : Observable<Article[]>;
  public cart: Observable<ShoppingCart>;
  public itemCount: number;

  private cartSubscription: Subscription;

  public constructor(
    private getArticlesService: GetArticlesService,
    private shoppingCartService: ShoppingCartService
  ) { }

  emptyCart(){
      this.shoppingCartService.empty();
  }

  ngOnInit() {
      this.articles = this.getArticlesService.getAllArticles();
      this.cart = this.shoppingCartService.get();
      this.cartSubscription = this.cart.subscribe((cart)=>{
        this.itemCount = cart.items.map((x)=> x.quantity).reduce((p,n) => p + n ,0);
      });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

}
