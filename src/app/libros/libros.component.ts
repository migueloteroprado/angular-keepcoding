import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-libros',
  template: `
    <div class="row">
      <kc-mock-books class="col-6"></kc-mock-books>
      <kc-google-books class="col-6"></kc-google-books>
    </div>
  `,
  styles: []
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
