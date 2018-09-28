import { Component, OnInit } from '@angular/core';

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
    if (email.split('@')[1] == 'empresa.com'){
      console.log('Email Autorizado');
    }
    else {
      alert('Este Correo No Esta Autorizado Para Hacer Login');
    }
       
  }
}
