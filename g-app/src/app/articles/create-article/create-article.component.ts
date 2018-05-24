import { User } from './../../models/User';
import { Router } from '@angular/router';
import {  UserDataService } from 'src/app/shared/user-data.service';
import { Component, OnInit } from '@angular/core';
import { ResetUserService } from 'src/app/shared/reset-user.service';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  user : User
  article : Article
  message: any
  isValid: boolean
  Price = 40

  constructor(
      private userDataService: UserDataService
      ,private router: Router
      ,private resetUserService: ResetUserService
  ) { }

  ngOnInit() {
  this.user = this.userDataService.getUser();
    if(!this.user){
        // alert("User Not Logged in");
    }  
  } 

}
