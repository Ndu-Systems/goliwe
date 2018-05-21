import { UserDataService } from './../../shared/user-data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/account/user-registration/user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
//User Registration Fields
Email: any;
Password: any;
ConfirmPassword: any;
FirstName: any;
Surname: any;
isValid: boolean;
message: any;
  constructor(private userRegistrationService: UserRegistrationService, private router: Router, private userDataService: UserDataService) { }

  ngOnInit() {
  }
  SignUp(){
    this.isValid = true;
    if (this.FirstName === undefined || this.Surname === "" || this.FirstName === "" || this.Surname === undefined) {
      this.isValid = false;
      this.message = "Personal Information is a Required Field";
      return;
    }
    if (this.Email === undefined || this.Email === "") {
      this.isValid = false;
      this.message = "Email Address is a Required Field";
      return;
    }
    if (this.Password !== this.ConfirmPassword) {
      this.isValid = false;
      this.message = "Password does not match!";
      return;
    }
    let data ={
      Email: this.Email,
      FirstName: this.FirstName,
      Surname: this.Surname,
      Password: this.Password
    };
    debugger
    this.userRegistrationService.registerUser(data).subscribe(response =>{
      if(response===1){
        alert("user saved!");
      }
      else{
        this.message = response;
      }
    })
    
     
}
}
