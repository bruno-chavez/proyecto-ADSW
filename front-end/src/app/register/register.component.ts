import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { RegisterService } from "./register.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService) { }

  ngOnInit() {
  }
  registerUser(user){
    user.preventDefault();
    var username=user.target.elements[0].value;
    var email=user.target.elements[1].value;
    var password= user.target.elements[2].value;
    var cpassword= user.target.elements[3].value;
    var serial= user.target.elements[4].value;
    /*Registro invalido */
    let userp=new User(username,email,password,false,0,false)
    this.registerService.validateEmail(userp).subscribe(
      data=>{
      console.log(data,'Usuario Enviado')
      alert('Usuario')
    });
    if(password!=cpassword){
      alert('Password dont much');
    }
    /*Registro Valido */
    else{
      if(serial.length>0){
        /*Registrar Propietario */
        let userr=new User(username,email,password,false,serial,true)
      }
      else{
        /*Registrar Usuario */
        this.registerService.postRegister(userp).subscribe(
          data=>{
          console.log(data,'Usuario Enviado')
          alert('Usuario')
        });
        
      }
    }
  }
}
