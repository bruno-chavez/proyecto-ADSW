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
    var email=user.target.elements[0].value;
    var password= user.target.elements[1].value;
    let model= this.loginService.LoginUser(email,password).subscribe(
      data=>{
      console.log(data,'Usuario Enviado');
      alert('Usuario')
    });
    /*  Accion Si Login es Correcto */
    
    
    
  }
}
