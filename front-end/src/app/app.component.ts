import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-ADSW';
  constructor(private httpClient:HttpClient){}
  //On
  postCommand(){
    this.httpClient.post('http://localhost:3000/command', {'value': 42, 'type': 'tipo' })
  }
}
