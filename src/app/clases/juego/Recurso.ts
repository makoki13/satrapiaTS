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
  static unidadesEnCuartel: number;

  private dañoRecibido = 0;

  constructor (id: number, nombre: string, private vidaInicial: number, private dañoInflingido: number,
    private fuerza: number, private moral: number, maxUnidadesEnCuartel = 1) {
    super (id, nombre, 3);

    UnidadMilitar.unidadesEnCuartel = maxUnidadesEnCuartel;
  }
}

class CivilConHonda extends UnidadMilitar {
  constructor (vidaInicial: number, dañoInflingido: number, fuerza: number, moral: number) {
    super ( 1001, 'Civil con honda', vidaInicial, dañoInflingido, fuerza, moral, 10);
  }

  static maxUnidadesEnEntrenamiento() { return 10; }
}

class Arquero extends UnidadMilitar {
  constructor (vidaInicial: number, dañoInflingido: number, fuerza: number, moral: number) {
    super ( 1002, 'Arquero', vidaInicial, dañoInflingido, fuerza, moral, 10);
  }

  static maxUnidadesEnEntrenamiento() { return 10; }
}


export { Recurso };
export { ORO };
export { UnidadMilitar };

export { CivilConHonda };

