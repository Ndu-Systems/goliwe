import { HomeNavComponent } from './home/home-nav/home-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
const appRoutes = [
  { path: "", component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  
    HomeNavComponent  
   
],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
