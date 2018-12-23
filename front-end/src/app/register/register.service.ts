import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  postRegister(user){
    return this.http.post('http://localhost:3000/register', user)
  }

  getUser(serial){
    return this.http.post('http://localhost:3000/user', serial, {withCredentials: true})
  }

  getSession(){
    return this.http.get('http://localhost:3000/session',{withCredentials: true})
  }
}
