import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  validateEmail(user){
    let modelo = this.http.get('http://localhost:3000/user/' + user.email);
    return modelo;
  }
  postRegister(user){
    console.log("command service!", user);
    return this.http.post('http://localhost:3000/user', user)
  }
}
