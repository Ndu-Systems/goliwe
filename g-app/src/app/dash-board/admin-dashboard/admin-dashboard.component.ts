import { UserDataService } from 'src/app/shared/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  user: any
  username:any
  constructor(
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.user = this.userDataService.getUser();
   }

}
