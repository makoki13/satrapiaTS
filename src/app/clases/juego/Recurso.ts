class Recurso {
  private nombre;
  constructor (id: number, nombre: string, private tipo: TipoRecurso) {
    this.nombre = nombre;
  }

  getNombre() { return this.nombre; }
}

enum TipoRecurso { NATURAL = 1, FABRICADO = 2, MILITAR = 3 }

const ORO: Recurso = new Recurso (1, 'ORO', 1);

class UnidadMilitar extends Recurso {
  private dañoRecibido = 0;

  constructor (id: number, nombre: string, private vidaInicial: number, private dañoInflingido: number,
    private fuerza: number, private moral: number) {
    super (id, nombre, 3);
  }
}

class Arquero extends UnidadMilitar {
  constructor (vidaInicial: number, dañoInflingido: number, fuerza: number, moral: number) {
    super ( 1001, 'Arquero', vidaInicial, dañoInflingido, fuerza, moral);
  }
}


export { Recurso };
export { ORO };
export { UnidadMilitar };

