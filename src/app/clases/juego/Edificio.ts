import { Localidad } from './Imperio';
import { Extractor } from './Extractor';
import { Productor } from './Productor';
import { Almacen } from './Almacen';
import { Punto } from './Punto';
import { ORO } from './Recurso';
import { UnidadMilitar } from './Recurso';

enum TipoEdificio { PALACIO = 1, SILOS = 2, CUARTEL = 3, MERCADO = 4, EMBAJADA = 5, TABERNA = 6, EJERCITO = 1000}

class Edificio {

  constructor ( private id: number, private nombre: string, private tipo: TipoEdificio) {

  }
}

class Palacio extends Edificio {
  private recaudador: Extractor;
  private impuestos: Productor;
  private almacen: Almacen;

  constructor (id: number, nombre: string) {
    super (id, nombre, 1);

    this.impuestos = new Productor ( null, ORO, 0, Number.MAX_SAFE_INTEGER, 0);
    this.almacen = new Almacen ( 66, 'Deposito de oro', [ORO], null);
    this.recaudador = new Extractor (this.impuestos, this.almacen, 0);
  }
}

class Silos extends Edificio {
  private almacenes: Array < Almacen >;

  constructor (id: number, nombre: string) {
    super (id, nombre, 2);
  }

  public addAlmacen ( nuevoAlmacen: Almacen) {
      this.almacenes.push ( nuevoAlmacen );
  }
}

class Cuartel extends Edificio {
  private unidades: Array < UnidadMilitar >;

  constructor (id: number, nombre: string) {
    super (id, nombre, 3);
  }
}

export { Cuartel };
