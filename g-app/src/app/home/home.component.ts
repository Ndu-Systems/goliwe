import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/shared/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  constructor(private userDataService : UserDataService) { }
  ngOnInit() {
    this.user = this.userDataService.getUser();
    if(this.user){}
  }

}
