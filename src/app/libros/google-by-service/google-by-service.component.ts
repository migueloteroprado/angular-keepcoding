import { Component, OnInit } from '@angular/core';
import { GbooksService } from 'src/app/services/gbooks.service';

@Component({
  selector: 'kc-google-by-service',
  templateUrl: './google-by-service.component.html',
  styleUrls: ['./google-by-service.component.scss']
})
export class GoogleByServiceComponent implements OnInit {

  clave: string;
  aLibros: Array<string>;

  constructor(public gbooks: GbooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  btnBuscar() {
    this.aLibros = [];
    this.gbooks.getLibros(this.clave).subscribe(response => {
      this.aLibros = response;
    });
    this.clave = '';
  }

}
