import { Component, OnInit } from '@angular/core';
import { AdminService} from "./admin.service";
import {User} from "../user/user";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userList: Object;

  constructor(private adminService: AdminService) { }
  ngOnInit() {
    this.getData();
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
    console.log(email)
    this.adminService.acceptUser(objeto).subscribe(
      data => {
        console.log(data, "user");
      });
  }

  rejectUser(userID){
    let id = userID.target.elements[0].value;
    this.adminService.rejectUser(id).subscribe(
      data => {
        console.log(data, "user");
      });
  }




}

