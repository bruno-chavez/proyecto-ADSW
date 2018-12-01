import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor( private loginService:LoginService) { }

  ngOnInit() {
  }
  loginUser(user){
    user.preventDefault();
    let email = user.target.elements[0].value;
    let password = user.target.elements[1].value;
    let modelo = {email: email, password: password};
    this.loginService.LoginUser(modelo).subscribe(
      data=>{
      console.log(data);
      alert(data)
    });
    /*  Accion Si Login es Correcto */
    
    
    
  }
}
