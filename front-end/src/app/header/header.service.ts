import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }

  getUser(){
    return null
    //this.http.get('http://localhost:3000/session', {withCredentials: true})
  }
}
