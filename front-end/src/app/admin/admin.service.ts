import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getCommand(){
    console.log("usuarios necesitados :o 124");
    return this.http.get('http://localhost:3000/admin')
  }
}
