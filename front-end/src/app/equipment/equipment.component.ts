import { Component, OnInit } from '@angular/core';
import {EquipmentService} from "./equipment.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  protected users: any;
  protected isMod: boolean;
  protected equipmentList: any;
  protected equipment: any;

  constructor(private equipmentService: EquipmentService,
              private router:Router) { }

  ngOnInit() {
    this.equipmentService.getUsers().subscribe(users =>{
      this.users = users;
    });
    this.equipmentService.getSession().subscribe(session => {
      // @ts-ignore
      this.isMod = session.access === 'mod';

      // @ts-ignore
      if ((session === null) || (session.access === 'admin')) {
        this.router.navigate(['/']);
      }

      this.equipmentService.getEquipmentUsers().subscribe(equipment => {
        this.equipmentList = equipment;
        console.log(this.equipmentList, '?');
      });

      this.equipmentService.getEquipmentInfo().subscribe(equipment =>{
        this.equipment = equipment;
      })
    });
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
