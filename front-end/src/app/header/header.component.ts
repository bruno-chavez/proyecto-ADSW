import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HeaderService } from "./header.service";
import { User} from "../user/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    console.log("im on ngoniintit");
    this.GetSession()
  }
  showLogin(){
    this.router.navigate(['/']);
  }

  GetSession(){
    console.log("im getting sessioned");

    let usuario = this.headerService.getSession();
    console.log('usuario!', usuario);
  }
}
