import { Observable } from 'rxjs/internal/Observable';
import { User } from './../../models/User';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserDataService } from 'src/app/shared/user-data.service';
import { Component, OnInit } from '@angular/core';
import { NavBar } from 'src/app/models/NavBar';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  
  user: any
  username:any
  constructor(
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
    this.username = this.user.Email;
   }
}
