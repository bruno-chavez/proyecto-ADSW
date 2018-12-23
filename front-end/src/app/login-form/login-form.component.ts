import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor( 
    private loginService:LoginService) { }

  ngOnInit() {}

  loginUser(user){
    user.preventDefault();
    let email = user.target.elements[0].value;
    let password = user.target.elements[1].value;
    let objeto = {email: email, password: password};

    this.loginService.LoginUser(objeto).subscribe(
      response=>{
       if (typeof response !== "string"){
         //Login Correcto
         // @ts-ignore
         window.location = 'http://localhost:4200/command';
       } else{ //Login Incorrecto
         alert(response);
       }
    });
  }
}
