import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }

  getSession(){
    return this.http.get('http://localhost:3000/session',{withCredentials: true})
  }

  getUsers(){
    return this.http.get('http://localhost:3000/equipment',{withCredentials: true})
  }

  postUser(user){
    return this.http.post('http://localhost:3000/equipment', user,{withCredentials: true})
  }

  getEquipmentUsers(){
    return this.http.get('http://localhost:3000/moderator',{withCredentials: true})
  }

  getEquipmentInfo(){
    return this.http.get('http://localhost:3000/equipmentinfo',{withCredentials: true})
  }
  postNewMod(newMod){
    return this.http.post('http://localhost:3000/moderator', newMod, {withCredentials: true})
  }
}
