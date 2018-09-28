import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginUser(user){
    user.preventDefault();
    var email=user.target.elements[0].value;
    var password= user.target.elements[1].value;
    if (email.split('@')[1] == 'empresa.com'){
      console.log('Email Autorizado');
    }
    else {
      alert('Este Correo No Esta Autorizado Para Hacer Login');
    }
    
    return false;
  }
}
