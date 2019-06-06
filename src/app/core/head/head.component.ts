import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  title: string;
  logo: string;

  constructor() { }

  ngOnInit() {
    this.title = 'KeepCoding';
    this.logo = '../../../assets/logo-angular.svg';
  }

}
