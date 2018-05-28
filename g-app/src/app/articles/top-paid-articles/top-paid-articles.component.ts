import { UserDataService } from 'src/app/shared/user-data.service';
import { GetArticlesService } from './../get-articles/get-articles.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-paid-articles',
  templateUrl: './top-paid-articles.component.html',
  styleUrls: ['./top-paid-articles.component.css']
})
export class TopPaidArticlesComponent implements OnInit {
  user:any
  articles = []
  message: any
  name : any
  constructor(
    private GetArticlesService: GetArticlesService,
    private router: Router,
    private userDataService:UserDataService
  ) { }  

  ngOnInit() {
      this.GetArticlesService.getAllArticles().subscribe(response =>{
        if(response){
          this.articles = response.data
        }
        else{
          this.message = response;
        }
      });
    
     this.user = this.userDataService.getUser();
     
     this.name = this.user.Email;
      
  }

  SelectedArticle(item){
    this.router.navigate(['/Article',  item.ArticleId ]);
  }

}
