import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private http: HttpClient) { }

  postCommand(command){
    console.log("command service!", command);
    return this.http.post('http://localhost:3000/command', command)
  }

}

