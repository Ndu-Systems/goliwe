import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { GetArticlesService } from './../articles/get-articles/get-articles.service';
import { Article } from './../models/Article';
import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { ICartItemWithProduct } from './../interfaces/ICartItemWithProduct';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs/internal/Subscription';
 


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public cart: Observable<ShoppingCart>;
  public cartItems : ICartItemWithProduct[];
  public itemCount : number;

  private articles: Article[];
  private cartSubscription: Subscription;

  public constructor(
    private getAllArticlesService: GetArticlesService, 
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart)=>{
      this.itemCount = cart.items.map((x)=> x.quantity).reduce((p, n) => p + n, 0);
      this.getAllArticlesService.getAllArticles().subscribe((articles)=>{
        this.articles = articles.data;
        this.cartItems = cart.items
                        .map((item)=>{
                          console.log(this.articles);
                          const article = this.articles.find((a) =>a.ArticleId === item.ArticleId);                         
                          return{
                            ...item,
                            article,
                            totalCost: article.Price * item.quantity 
               };
            });
      });
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
        this.cartSubscription.unsubscribe();
    }
  }
}
