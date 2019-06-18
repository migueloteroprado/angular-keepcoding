import { Grupo } from './grupo.model';
import { Sector } from './sector.model';
import { Aficion } from './aficion.model';

export class Contacto {

  name: string;
  lastname: string;
  eMail: string;
  phoneNumber: string;
  grupo: Grupo;
  sector: Sector;
  aficiones: Array<Aficion>;

  constructor() {
    this.aficiones = [];
  }

}

