import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import {Location} from "@angular/common";
import {AdminLoginService} from "./admin-login.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  constructor(
    private adminloginService:AdminLoginService,
    private router:Router,
    private location:Location,) {}

  ngOnInit() {
    this.adminloginService.getSession().subscribe(session =>{
      if (session !== null) {
        this.router.navigate(['/user']);
      }
    })
  }

  loginAdmin(admin){
    admin.preventDefault();
    let email = admin.target.elements[0].value;
    let password = admin.target.elements[1].value;
    let AdminObject = {email: email, password: password};

    this.adminloginService.login(AdminObject).subscribe(response => {
      if (typeof response != "string"){
        //Login Correcto
        this.router.navigate(['/admin']);
      } else{ //Login Incorrecto
        alert(response);
      }
    })
  }
}
