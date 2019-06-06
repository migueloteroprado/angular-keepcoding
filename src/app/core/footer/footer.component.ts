import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  autor: string;
  empresa: string;

  constructor() { }

  ngOnInit() {
    this.autor = 'Miguelitri';
    this.empresa = 'KeepCoding';
  }

}
