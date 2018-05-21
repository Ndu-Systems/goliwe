import { ResetUserService } from './shared/reset-user.service';
import { UserLogoutComponent } from './account/user-logout/user-logout.component';
import { AdminNavComponent } from './dash-board/admin-nav/admin-nav.component';
import { AdminDashboardComponent } from './dash-board/admin-dashboard/admin-dashboard.component';
import { UserLoginService } from './account/user-login/user-login.service';
import { UserDataService } from './shared/user-data.service';
import { CachingService } from './shared/caching.service';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { ViewArticleComponent } from './articles/view-article/view-article.component';
import { GetArticlesService } from './articles/get-articles/get-articles.service';
import { GetArticlesComponent } from './articles/get-articles/get-articles.component';
import { HomeNavComponent } from './home/home-nav/home-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopPaidArticlesComponent } from 'src/app/articles/top-paid-articles/top-paid-articles.component';
import { ViewArticleService } from 'src/app/articles/view-article/view-article.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LocalStorageServie, StorageService } from 'src/app/shared/Storage.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserLoginComponent } from 'src/app/account/user-login/user-login.component';
import { UserDashboardComponent } from 'src/app/dash-board/user-dashboard/user-dashboard.component';
import { UserNavComponent } from 'src/app/dash-board/user-nav/user-nav.component';
import { UserRegistrationService } from 'src/app/account/user-registration/user-registration.service';
import { UserRegistrationComponent } from 'src/app/account/user-registration/user-registration.component';
import { PayFastComponent } from './pay-fast/pay-fast.component';
  
const appRoutes = [
  { path: "", component: HomeComponent },
  { path: "Top-Paid", component: TopPaidArticlesComponent },
  { path: "Article/:ArticleId", component: ViewArticleComponent },
  { path: "Checkout",component: CheckoutComponent},
  { path: "Login", component: UserLoginComponent}, 
  { path: "User-Dashboard", component: UserDashboardComponent}, 
  { path: "Admin-Dashboard", component: AdminDashboardComponent},
  { path: "Logout", component: UserLogoutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  
    HomeNavComponent,
    GetArticlesComponent,
    TopPaidArticlesComponent,
    ViewArticleComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    UserLoginComponent,
    UserDashboardComponent, 
    UserNavComponent, 
    AdminDashboardComponent,
    AdminNavComponent,
    UserLogoutComponent ,
    UserRegistrationComponent,
    PayFastComponent,
    PayFastComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) ,
  ],
  providers: [
    GetArticlesService,
    ViewArticleService,
    LocalStorageServie,
    {provide: StorageService, useClass: LocalStorageServie},
    {
      deps: [StorageService, GetArticlesService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    },
    UserDataService,
    UserLoginService,
    UserRegistrationService,
    ResetUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
