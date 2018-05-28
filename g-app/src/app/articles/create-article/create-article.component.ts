import { User } from "./../../models/User";
import { Router } from "@angular/router";
import { UserDataService } from "src/app/shared/user-data.service";
import { Component, OnInit } from "@angular/core";
import { ResetUserService } from "src/app/shared/reset-user.service";
import { Article } from "src/app/models/Article";
import { CreateArticleService } from "./create-article.service";
import { GetImagePath } from "../../shared/config";

@Component({
  selector: "app-create-article",
  templateUrl: "./create-article.component.html",
  styleUrls: ["./create-article.component.css"]
})
export class CreateArticleComponent implements OnInit {
  articleFile: File;
  coverFile: File;
  message: string;
  Abstract: any;
  ISSN: any;
  Title: any;
  user: User;
  Price = 40;

  constructor(
    private userDataService: UserDataService,
    private router: Router,
    private resetUserService: ResetUserService,
    private createArticleService: CreateArticleService
  ) {}

  ngOnInit() {
    this.user = this.userDataService.getUser();
    if (!this.user) {
       alert("User Not Logged in");
    }
  }

  filesChangedCover(files) {
    console.log(files);
    this.coverFile = <File>files[0];
  }
  filesChangedFile(files) {
    console.log(files);
    this.articleFile = <File>files[0];
  }
  uplaodFiles() {
    // check if cover uploaded
    if (!this.Title) {
      alert("Please enter title to continue!");
      return false;
    }
    if (!this.ISSN) {
      alert("Please enter ISSN to continue!");
      return false;
    }
    if (!this.Price) {
      alert("Please enter price to continue!");
      return false;
    }
    if (!this.Abstract) {
      alert("Please enter abstract to continue!");
      return false;
    }

    if (!this.coverFile) {
      alert("Please select article cover image to continue!");
      return false;
    }

    // check if atricle file uploaded
    if (!this.articleFile) {
      alert("Please select article  to continue!");
      return false;
    }

    this.createArticleService.uploadFile(this.coverFile).subscribe(response => {
      let coverFileUrl = GetImagePath(response.trim());
      alert(coverFileUrl);

      // upload article file
      this.createArticleService
        .uploadFile(this.articleFile)
        .subscribe(response => {
          let articleFileUrl = GetImagePath(response.trim());
          alert(articleFileUrl);

          //save pop to db

          let data = {
            Title: this.Title,
            issn: this.ISSN,
            Price: this.Price,
            Abstract: this.Abstract,
            ImageUrl: coverFileUrl,
            FileUrl : articleFileUrl,
            PublisherID:this.user.UserId
          };
        
          this.createArticleService.addArticle(data)
          .subscribe((response)=>{
            alert(response);
          });
        });
    });
  }
}
