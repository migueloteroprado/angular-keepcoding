import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MbooksService {

  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Introducción a Angular',
      'Angular a fondo',
      'Angular avanzado'
    ];
  }

  getLibros(clave: string): Array<string> {
    console.log(clave);
    const result = this.aLibros.filter((libro) => libro.indexOf(clave) >= 0);
    console.log(result);
    return result;
  }

  getLibros$(clave: string): Observable<any> {
    return new Observable(
      (observer) => {
        setTimeout(() => {
          observer.next(this.getLibros(clave));
        }, 2000);
      }
    );
  }

}
