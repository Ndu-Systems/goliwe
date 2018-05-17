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
 
const appRoutes = [
  { path: "", component: HomeComponent },
  { path: "Top-Paid", component: TopPaidArticlesComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  
    HomeNavComponent,
    GetArticlesComponent,
    TopPaidArticlesComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) ,
  ],
  providers: [
    GetArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
