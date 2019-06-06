interface Autor {
  autorNombre: string;
  autorApellidos: string;

  mostrar2(): void;
}

class Libro implements Autor {

  autorNombre;
  autorApellidos;
  private titulo: string;

  constructor(autorNombre, autorApellidos, titulo) {
    this.autorNombre = autorNombre;
    this.autorApellidos = autorApellidos;
    this.titulo = titulo;
  }

  mostrar2() {
    console.log(this);
  }
}

class LibroTecnico extends Libro {

  categoria: string;

  constructor(autorNombre, autorApellidos, titulo, categoria) {
    super(autorNombre, autorApellidos, titulo);
    this.categoria = categoria;
  }

  mostrar() {
    super.mostrar2();
    console.log('Este es un libro técnico');
    console.log(this.categoria);
  }
}


let libro = new LibroTecnico('Juan', 'Pérez', 'Aprende Angular', 'FrontEnd');
libro.mostrar();
