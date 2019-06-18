import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})

export class SaludoComponent implements OnInit {

  usuario;

  constructor() { }

  ngOnInit() {
    this.usuario = {
      nombre: 'Pepe',
      edad: 46
    };
  }

  btnBorrar(ev) {
    console.log(ev);
    this.usuario.nombre = '';
  }

}
