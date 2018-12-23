import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }
  LoginUser(modelo){
    console.log('http://localhost:3000/login/');
    return this.http.post('http://localhost:3000/login', modelo, {withCredentials: true});
  }

  getSession(){
    return this.http.get('http://localhost:3000/session',{withCredentials: true})
  }
}
