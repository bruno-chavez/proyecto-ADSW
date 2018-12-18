import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HeaderService} from "./header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user= this.headerService.getUser();
  constructor(private router:Router,
              private headerService:HeaderService) { }

  ngOnInit() {
    console.log(this.user);
  }
  showLogin(){
    this.router.navigate(['/']);
  }

}
