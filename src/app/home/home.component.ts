import { Component, OnInit } from '@angular/core';
import {UserService} from '../_user/user.service'
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title ) {
    this.titleService.setTitle( 'Sport club' );
  }

  username = '' ;

  ngOnInit(): void {
    console.log(this.username);
  }
}
