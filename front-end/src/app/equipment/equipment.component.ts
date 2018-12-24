import { Component, OnInit } from '@angular/core';
import {EquipmentService} from "./equipment.service";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  protected users:any;

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.equipmentService.getUsers().subscribe(users =>{
      this.users = users;
    })
  }

  addUser(user){
    console.log(user.target.elements[0].value);
    let userJSON = {email : user.target.elements[0].value};
    console.log(userJSON);
    this.equipmentService.postUser(userJSON).subscribe(response =>{
      console.log(response);
      alert(response);
    })
  }
}
