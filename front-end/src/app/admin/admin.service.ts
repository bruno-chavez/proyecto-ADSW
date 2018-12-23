import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:3000/admin',{withCredentials: true})
  }

  acceptUser(email){
    return this.http.post('http://localhost:3000/admin', email,{withCredentials: true})
  }

  rejectUser(id){
    return this.http.delete('http://localhost:3000/admin/'+id,{withCredentials: true})
  }

  getSession(){
    return this.http.get('http://localhost:3000/session',{withCredentials: true})
  }
}
