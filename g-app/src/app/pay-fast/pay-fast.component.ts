import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { GetArticlesService } from './../articles/get-articles/get-articles.service';
import { Article } from 'src/app/models/Article';
import { Subscription } from 'rxjs/internal/Subscription';
import { ICartItemWithProduct } from './../interfaces/ICartItemWithProduct';
import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/shared/user-data.service';

@Component({
  selector: 'app-pay-fast',
  templateUrl: './pay-fast.component.html',
  styleUrls: ['./pay-fast.component.css']
})
export class PayFastComponent implements OnInit {
  public cart: Observable<ShoppingCart>;
  public cartItems : ICartItemWithProduct[];
  private articles: Article[];
  itemCount : number
  private cartSubscription: Subscription;
  user : any

  //PayFast requisite 
  amount : number
  firstName: any
  lastName:any
  emailAddress:any

  constructor(
    private userDataService: UserDataService,
    private getAllArticlesService: GetArticlesService, 
    private shoppingCartService: ShoppingCartService,
    private router:Router
  ) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
    if(!this.user){
      this.router.navigate(['Un-Authorized']);
    }
    else{
      this.emailAddress = this.user.Email;
      this.firstName = this.user.FirstName;
      this.lastName = this.user.Surname;      
    } 
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
              
            this.amount = (cart.Total * 12.45);
      }); 
    
    }); 
   
  }
  total : number
  private TotalOrderAmount(cartItems: ICartItemWithProduct[]): number{
    
    for(let i =0;i <this.cartItems.length; i++){
      let cart = this.cartItems[i].article;
      if(cart.Price!==undefined){
        this.amount = cart.Price;
      }   
    }    
    return this.total;
  }

}
