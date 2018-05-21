import { UserDataService } from 'src/app/shared/user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {

  user: any;
  constructor(private userDataService : UserDataService) { }
  ngOnInit() {
    debugger
    this.user = this.userDataService.getUser();
  }

}
