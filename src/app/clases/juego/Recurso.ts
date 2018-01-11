class Recurso {
  private nombre;
  constructor (public id: number, nombre: string, private tipo: TipoRecurso) {
    this.nombre = nombre;
  }

  getNombre() { return this.nombre; }
}

enum TipoRecurso { NATURAL = 1, FABRICADO = 2, MILITAR = 3 }

const ORO: Recurso = new Recurso (1, 'ORO', 1);
const POBLACION: Recurso = new Recurso (2, 'POBLACION', 3);
const COMIDA: Recurso = new Recurso (3, 'COMIDA', 1);

class UnidadMilitar extends Recurso {
  private dañoRecibido = 0;

  constructor (id: number, nombre: string, private vidaInicial: number, private dañoInflingido: number,
    private fuerza: number, private moral: number, private costeUnitario: number, protected maxUnidadesEnEntrenamiento = 1) {
    super (id, nombre, 3);
  }

  public getID() { return super.id; }
  getNombre() { return super.getNombre(); }
  getCosteUnitario() { return this.costeUnitario; }
  public getMaxUnidadesEnEntrenamiento() { return this.maxUnidadesEnEntrenamiento; }
}

class CivilConHonda extends UnidadMilitar {
  constructor (vidaInicial: number, dañoInflingido: number, fuerza: number, moral: number) {
    super ( 1001, 'Civil con honda', vidaInicial, dañoInflingido, fuerza, moral, 1, 10);
  }

  getID () { console.log(this.id); return this.id; }
}

class Arquero extends UnidadMilitar {
  constructor (vidaInicial: number, dañoInflingido: number, fuerza: number, moral: number) {
    super ( 1002, 'Arquero', vidaInicial, dañoInflingido, fuerza, moral, 5, 10);
  }
}

export { Recurso };
export { ORO };
export { COMIDA };
export { POBLACION };
export { UnidadMilitar };

export { CivilConHonda };

