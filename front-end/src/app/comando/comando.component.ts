import { Component, OnInit } from '@angular/core';

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
    if(valor_s.split('.').length <= 2){
      if((Math.abs(valor) <= 100)){
        if((valor_s.split('.').length == 2 && valor_s.split('.')[1] < 3) || valor_s.split('.').length == 1){
            /*begin stuff*/
            console.log('Ingreso Valido');
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
