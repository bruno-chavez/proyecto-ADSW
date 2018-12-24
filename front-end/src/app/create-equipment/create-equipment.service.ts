import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateEquipmentService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:3000/equipment',{withCredentials: true})
  }

  getSession(){
    return this.http.get('http://localhost:3000/session',{withCredentials: true})
  }

  postEquipment(equipment){
      return this.http.post('http://localhost:3000/create', equipment,{withCredentials: true})
  }
}

