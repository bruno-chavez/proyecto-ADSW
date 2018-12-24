import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) {}

  getSession(){
    return this.http.get('http://localhost:3000/session',{withCredentials: true})
  }

  logout(){
    return this.http.get('http://localhost:3000/logout',{withCredentials: true})
  }

  getEquipment(){
    return this.http.get('http://localhost:3000/equipment',{withCredentials: true})
  }

}
