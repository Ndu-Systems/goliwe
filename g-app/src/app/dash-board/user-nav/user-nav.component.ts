import { NavBar } from './../../models/NavBar';
import { Component, OnInit,Input } from '@angular/core';
 
@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
 @Input() Navbar : NavBar;
  constructor() { }

  ngOnInit() {
  }

}
