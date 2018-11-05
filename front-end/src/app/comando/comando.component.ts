import { Component, OnInit } from '@angular/core';
import { Comando } from './comando';

@Component({
  selector: 'app-comando',
  templateUrl: './comando.component.html',
  styleUrls: ['./comando.component.css']
})
export class ComandoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  registercomando(comando){
    var dispositivo =comando.target.elements[0].value;
    var funcion =comando.target.elements[1].value;
    var valor =comando.target.elements[2].value;
    var valor_s = valor.toString();
    var unidad =comando.target.elements[3].value;
    //console.log(valor);
    if(valor_s.split('.').length <= 2){
      //console.log(1);
      if((Math.abs(valor) <= 100)){
        //console.log(2);
        if((valor_s.split('.').length == 2 && valor_s.split('.')[1].length < 3) || valor_s.split('.').length == 1){
            /*begin stuff*/
            console.log('Ingreso Valido');
            //let modelo= new comando(dispositivo,funcion,valor,unidad);
            console.log(dispositivo);
            console.log(funcion);
            console.log(valor);
            console.log(unidad);
            console.log('------------');
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
    /*console.log(dispositivo);
    console.log(funcion);
    console.log(valor);
    console.log(unidad);*/
  }
}
