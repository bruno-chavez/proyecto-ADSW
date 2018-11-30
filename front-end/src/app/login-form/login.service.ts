import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }
  LoginUser(email,password){
    console.log('http://localhost:3000/login/' +email);
    return this.http.get('http://localhost:3000/login/' + email);
  }
}
