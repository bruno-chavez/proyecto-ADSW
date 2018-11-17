import { Component, OnInit } from '@angular/core';
import { Comando } from './comando';
import {CommandService} from "../command.service";

@Component({
  selector: 'app-comando',
  templateUrl: './comando.component.html',
  styleUrls: ['./comando.component.css']
})
export class ComandoComponent implements OnInit {
  constructor(private commandService: CommandService) { }

  ngOnInit() {
  }
  registercomando(comando){
    let dispositivo = comando.target.elements[0].value;
    let funcion = comando.target.elements[1].value;
    let valor = comando.target.elements[2].value;
    let valor_s = valor.toString();
    let unidad = comando.target.elements[3].value;
    //console.log(valor);
    if(valor_s.split('.').length <= 2){
      //console.log(1);
      if((Math.abs(valor) <= 100)){
        //console.log(2);
        if((valor_s.split('.').length == 2 && valor_s.split('.')[1].length < 3) || valor_s.split('.').length == 1){
            /*begin stuff*/
            console.log('Ingreso Valido');
            //let modelo = new Comando(dispositivo,funcion,valor,unidad);
            console.log(comando, "commando!");
            console.log(dispositivo, "dispositivo");
            console.log(funcion, "funcion");
            console.log(valor, "valor");
            console.log(unidad, "unidad");
        }
        else{
          alert('Valor Ingresado Invalido')
        }
      } 
      else{
        alert('Valor Fuera de Rango')
      }
    }
    else{
      alert("Valor Ingresado Invalido");
    }
    console.log('holi');
    let modelo = new Comando(dispositivo,funcion,valor,unidad);
    this.commandService.postCommand(modelo).subscribe(
      data => {
        console.log(data, "objeto enviado");
        alert('Commando Logueado');
        // this.router.navigate(['/']);
      });
    /*console.log(dispositivo);
    console.log(funcion);
    console.log(valor);
    console.log(unidad);*/
  }
}
