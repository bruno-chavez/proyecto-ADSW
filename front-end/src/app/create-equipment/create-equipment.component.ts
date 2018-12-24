import { Component, OnInit } from '@angular/core';
import { CreateEquipmentService} from "./create-equipment.service";
import {Router} from "@angular/router";
import {Equip} from "./equip";

@Component({
  selector: 'app-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent implements OnInit {

  userList: Object;

  constructor(private equipmentService: CreateEquipmentService,
              private router: Router) { }

  ngOnInit() {
    this.getData();
    this.equipmentService.getSession().subscribe(session =>{
      console.log(session);
      // @ts-ignore
      if ((session === null) ||(session.access !== 'admin')) {
        this.router.navigate(['/adminlogin']);
      }
    })
  }

  getData() {
    this.equipmentService.getUsers()
      .subscribe(
        res =>
          this.userList = res);
  }

  registerEquipment(body){
    let name = body.target.elements[0].value;
    let size = body.target.elements[1].value;
    let email = body.target.elements[2].value;
    /*Registro invalido */
    let equip=new Equip(name,size,email);
    /*let modelo = this.registerService.validateEmail(userp).subscribe(
      data=>{
      console.log(data,'Usuario Enviado');
      alert('Usuario')
    });*/
    /*console.log(modelo, 'modelo');*/
    if(name == ""){
      alert('Team must have a name')
    }
    else if(size == ""){
      alert('Size must be input')
    }
    else if(email == ""){
      alert('Team must have an Owner')
    }
    else{
        /*Registrar Usuario */
        this.equipmentService.postEquipment(equip).subscribe(
          data=>{
            if (typeof data != "string"){
              console.log(data,'Usuario Enviado');
              this.router.navigate(['/admin']);
            } else {
              console.log(data,'error');
              alert(data)
            }
          });

      }

    }

}
