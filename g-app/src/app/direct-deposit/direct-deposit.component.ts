import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../shared/email.service';
import { UserDataService } from '../shared/user-data.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { GetArticlesService } from '../articles/get-articles/get-articles.service';

@Component({
  selector: 'app-direct-deposit',
  templateUrl: './direct-deposit.component.html',
  styleUrls: ['./direct-deposit.component.css']
})
export class DirectDepositComponent implements OnInit {

  user: any
  constructor(
    private getAllArticlesService: GetArticlesService,
    private shoppingCartService: ShoppingCartService,
    private userDataService: UserDataService,
    private emailService: EmailService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
    if (!this.user) {
      //this.router.navigate(['Un-Authorized']);      
    }
 
      this.shoppingCartService.empty();
      alert("Shopping Cart Cleared")
 
  }

}
