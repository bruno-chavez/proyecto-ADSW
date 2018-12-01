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
    let modelo = {email: email, password: password};
    this.loginService.LoginUser(modelo).subscribe(
      data=>{
       if (typeof data != "string"){ //Login Correcto
         //this.router.navigate(['/user']);
         console.log(data);
         let user =new User(data[0],data[2],'notview',data[4],data[5],data[6]);
         console.log(user);
       }
       else{ //Login Incorrecto
         alert('Datos Incorrectos');
       }
    });
   
    
    
    
  }
}
