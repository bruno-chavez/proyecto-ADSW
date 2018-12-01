import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router }  from '@angular/router'

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
       if (data=='Acceso autorizado'){
         this.router.navigate(['/user']);
       }
    });
    /*  Accion Si Login es Correcto */
    
    
    
  }
}
