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
 
const appRoutes = [
  { path: "", component: HomeComponent },
  { path: "Top-Paid", component: TopPaidArticlesComponent },
  { path: "Article/:ArticleId", component: ViewArticleComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  
    HomeNavComponent,
    GetArticlesComponent,
    TopPaidArticlesComponent,
    ViewArticleComponent,
    ShoppingCartComponent
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
