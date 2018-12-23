import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { RegisterService } from "./register.service";
import { Router } from "@angular/router"
import {Location} from "@angular/common";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private registerService:RegisterService,
    private router:Router,
    private location: Location
    ) { }

  ngOnInit() {
    this.registerService.getSession().subscribe(session =>{
      console.log(session);
      if (session !== null) {
        this.router.navigate(['/command']);
      }
    })
  }

  registerUser(user){
    user.preventDefault();
    let username = user.target.elements[0].value;
    let email = user.target.elements[1].value;
    let password = user.target.elements[2].value;
    let cpassword = user.target.elements[3].value;
    let serial = user.target.elements[4].value;
    /*Registro invalido */
    let userp=new User(username,email,password,false,0,false);
    /*let modelo = this.registerService.validateEmail(userp).subscribe(
      data=>{
      console.log(data,'Usuario Enviado');
      alert('Usuario')
    });*/
    /*console.log(modelo, 'modelo');*/
    if(password != cpassword){
      alert('Passwords dont match');
    } else if(username == ""){
      alert('Username cant be empty ')
    }
    else if(email == ""){
      alert('Email cant be empty')
    }
    else if(password == ""){
      alert('Password cant be empty')
    }
    /*Registro Valido */
    else if (email.split('@').length<2){
      alert('Invalid email')
    } else {
      if (serial != 0){
          let serialJSON = {serial : serial};
          this.registerService.getUser(serialJSON).subscribe(data => {
            console.log(data, 'data');
            if (data !== null){
              alert('Serial already in use');
            } else {
              let userJSON = new User(username,email,password,true,serial,true);
              this.registerService.postRegister(userJSON).subscribe(data => {
                  if (typeof data != "string"){
                    console.log(data,'Usuario Enviado');
                    this.router.navigate(['/']);
                  } else {
                    console.log(data,'error');
                    alert(data)
                  }
              });
            }
          })
        } else{
        /*Registrar Usuario */
        this.registerService.postRegister(userp).subscribe(
          data=>{
            if (typeof data != "string"){
              console.log(data,'Usuario Enviado');
              this.router.navigate(['/']);
            } else {
              console.log(data,'error');
              alert(data)
            }
          });
        /*
        console.log('hoi');
        let userr = new User(username,email,password,false,serial,true);
        this.registerService.postRegister(userr).subscribe(
          data=>{
            if (typeof data != "string"){
              console.log(data,'Usuario Enviado');
              this.router.navigate(['/']);
            } else {
              console.log(data,'error');
              alert(data)
            }
        });
         */
      }
    }
  }
}
