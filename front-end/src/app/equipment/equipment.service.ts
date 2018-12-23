import { Injectable } from '@angular/core';
import { Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }


  getUsers(){
    return this.http.get('http://localhost:3000/equipment',{withCredentials: true})
  }

  getSession(){
    return this.http.get('http://localhost:3000/session',{withCredentials: true})
  }

  postEquip(equip){
      return this.http.post('http://localhost:3000/create', equip)


  }
}

