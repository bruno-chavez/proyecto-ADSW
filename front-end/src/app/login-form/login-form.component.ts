import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router }  from '@angular/router';
import { User } from "../user/user"


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor( 
    private loginService:LoginService,
    private router:Router
    ) { }

  ngOnInit() {
  }
  loginUser(user){
    user.preventDefault();
    let email = user.target.elements[0].value;
    let password = user.target.elements[1].value;
    let objeto = {email: email, password: password};

    this.loginService.LoginUser(objeto).subscribe(
      response=>{
       if (typeof response != "string"){ //Login Correcto
         //this.router.navigate(['/user']);
         console.log(response);
         let user = new User(response[0],response[2],'notview',response[4],response[5],response[6]);
         console.log(user);
       }
       else{ //Login Incorrecto
         alert(response);
       }
    });
   
    
    
    
  }
}
