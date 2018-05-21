import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/account/user-login/user-login.service';
import { UserDataService } from 'src/app/shared/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  lEmail : any;
  lPassword: any;
  message: any;
  
  constructor(
    private loginService: UserLoginService,
    private userDataService: UserDataService,
      private router: Router)
       { }

  ngOnInit() {
  }
  
  SignIn(){
    this.loginService.loginUser(this.lEmail, this.lPassword)
    .subscribe((response)=>{
      if(response){
        this.userDataService.saveUser(response.data);
        let user = response.data[0];
        if(user.Role === "Admin"){
          this.router.navigate(['Admin-Dashboard']);
        }else if(user.Role === "Customer"){
          this.router.navigate(['User-Dashboard']);
        }
        else{
          this.router.navigate(['Login']);
        }
        
      }
      else {
        this.message = "Invalid Email/ Password";
      }
    });
  }

 
}
