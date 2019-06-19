import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto.model';
import { GRUPOS, SECTORES, AFICIONES } from '../../models/maestro.datos';
import { Grupo } from '../../models/grupo.model';
import { Sector } from '../../models/sector.model';
import { Aficion } from 'src/app/models/aficion.model';

@Component({
  selector: 'kc-form-vd',
  templateUrl: './form-vd.component.html',
  styleUrls: ['./form-vd.component.scss']
})
export class FormVdComponent implements OnInit {

  aGrupos: Array<Grupo>;
  aSectores: Array<Sector>;
  aAficiones: Array<Aficion>;
  contacto: Contacto;

  constructor() {
  }

  ngOnInit() {
    this.aGrupos = GRUPOS;
    this.aSectores = SECTORES;
    this.aAficiones = AFICIONES;
    this.contacto = new Contacto();
  }

  changeAficiones(ev) {
    const afi = parseInt(ev.target.id.substr(3), 10);
    console.log(afi);
    if (ev.target.checked) {
      console.log(afi);
      this.contacto.aficiones.push(this.aAficiones.filter(af => af.id === afi)[0]);
    } else {
      this.contacto.aficiones = this.contacto.aficiones.filter(af => af.id !== afi);
    }
    /*
    if (ev.target.checked) {
      this.contacto.aficiones.push(ev.target.id);
    } else {
      this.contacto.aficiones.splice(this.contacto.aficiones.indexOf(ev.target.id), 1);
    }*/
  }

  btnBorrar() {
    this.contacto.aficiones = [];
    this.contacto.sector = null;
  }

  enviar() {
    console.log('Datos enviados');
  }

}
