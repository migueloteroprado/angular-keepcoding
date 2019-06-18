import { Grupo } from './grupo.model';
import { Sector } from './sector.model';
import { Aficion } from './aficion.model';

export const GRUPOS: Array<Grupo> = [
  { id: 1, nombre: 'Familia', descripcion: 'Familia' },
  { id: 2, nombre: 'Amigos', descripcion: 'Amigos' },
  { id: 3, nombre: 'Negocios', descripcion: 'Negocios' },
  { id: 4, nombre: 'Trabajo', descripcion: 'Trabajo' },
  { id: 5, nombre: 'Otros', descripcion: 'Otros' }
];

export const SECTORES: Array<Sector> = [
  { id: 1, nombre: 'Técnico', descripcion: 'Técnico' },
  { id: 2, nombre: 'Creativo', descripcion: 'Creativo' },
  { id: 3, nombre: 'Comercial', descripcion: 'Comercial' },
  { id: 4, nombre: 'Otros', descripcion: 'Otros' }
];

export const AFICIONES: Array<Aficion> = [
  { id: 1, nombre: 'Lectura', descripcion: 'Lectura' },
  { id: 2, nombre: 'Música', descripcion: 'Música' },
  { id: 3, nombre: 'Deporte', descripcion: 'Deporte' },
  { id: 4, nombre: 'Viajar', descripcion: 'Viajar' }
];
