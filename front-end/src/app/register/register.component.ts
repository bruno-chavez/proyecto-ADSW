import { Component, OnInit } from '@angular/core';
import { User } from '../user/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

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
        let userr=new User(username,email,password,true,0,true)
      }
    }
  }
}
