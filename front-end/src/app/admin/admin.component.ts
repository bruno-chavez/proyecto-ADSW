import { Component, OnInit } from '@angular/core';
import { AdminService} from "./admin.service";
import { Router} from "@angular/router";
import {User} from "../user/user";
import {Location} from "@angular/common";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userList: Object;

  constructor(private adminService: AdminService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.getData();
    this.adminService.getSession().subscribe(session =>{
      console.log(session);
      // @ts-ignore
      if ((session === null) ||(session.access === 'admin')) {
        this.location.back();
      }
    })
  }

  getData() {
    this.adminService.getUsers()
      .subscribe(
        res =>
          this.userList = res);
  }

  acceptUser(userID){
    let email = userID.target.elements[0].value;
    let objeto = {email: email};
    console.log(email);
    this.adminService.acceptUser(objeto).subscribe(
      data => {
        console.log(data, "user");
      });
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  rejectUser(userID){
    let id = userID.target.elements[0].value;
    this.adminService.rejectUser(id).subscribe(
      data => {
        console.log(data, "user");
      });
  }
}

