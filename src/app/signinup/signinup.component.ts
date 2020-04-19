import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-signinup',
  templateUrl: './signinup.component.html',
  styleUrls: ['./signinup.component.css']
})
export class SigninupComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle( "Connection" );
  }

  ngOnInit() {
  }

}