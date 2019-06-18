import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() aItems: Array<string>;

  @Output() evtBorrar: EventEmitter<number>;

  constructor() {
    this.evtBorrar = new EventEmitter();
  }

  ngOnInit() {
  }

  btnBorrar(i) {
    this.evtBorrar.emit(i);
  }

}
