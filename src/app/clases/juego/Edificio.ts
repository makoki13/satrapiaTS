import { Localidad } from './Imperio';
import { Extractor } from './Extractor';
import { Productor } from './Productor';
import { Almacen } from './Almacen';
import { Punto } from './Punto';
import { ORO } from './Recurso';
import { UnidadMilitar } from './Recurso';

import { Dispatcher } from './Dispatcher';

enum TipoEdificio {
  PALACIO = 1, SILOS = 2, CUARTEL = 3, MERCADO = 4, EMBAJADA = 5, TABERNA = 6,
  GRANJA  = 101, MINA_DE_ORO = 102,
  EJERCITO = 1000}

class Edificio {

  constructor ( private id: number, private nombre: string, private tipo: TipoEdificio) {

  }
}

class Palacio extends Edificio {
  private recaudador: Extractor;
  private impuestos: Productor;
  private almacen: Almacen;

  constructor (id: number, nombre: string, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.PALACIO);

    this.impuestos = new Productor ( null, ORO, 10, 10, 0);
    this.almacen = new Almacen ( 66, 'Deposito de oro', [ORO], null);
    const cantidadInicial = 2;
    this.recaudador = new Extractor (this.impuestos, this.almacen, cantidadInicial);
    this.disp.addTarea(this, 'recaudaImpuestos', 5);
  }

  public recaudaImpuestos ( ) {
    const cantidad = this.recaudador.getCantidad();
    this.almacen.addCantidad (cantidad);
    console.log ( 'Almacen del palacio tiene ' + this.getOroActual() );
   }

  public getOroActual() { return this.almacen.getCantidad(); }
}

class Silos extends Edificio {
  private almacenes: Array < Almacen >;

  constructor (id: number, nombre: string) {
    super (id, nombre, TipoEdificio.SILOS);
  }

  public addAlmacen ( nuevoAlmacen: Almacen) {
      this.almacenes.push ( nuevoAlmacen );
  }
}

class Cuartel extends Edificio {
  private unidades: Array < UnidadMilitar >;

  constructor (id: number, nombre: string) {
    super (id, nombre, TipoEdificio.CUARTEL);
  }
}

class MinaDeOro extends Edificio {
  private mineros: Extractor;
  private filon: Productor;
  private almacen: Almacen;

  constructor (id: number, nombre: string, private posicion: Punto, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.MINA_DE_ORO);

    this.filon = new Productor ( null, ORO, 30, 30, 0);
    this.almacen = new Almacen ( 66, 'Filón de oro', [ORO], null);
    const cantidadInicial = 1;
    this.mineros = new Extractor (this.filon, this.almacen, cantidadInicial);

    this.disp.addTarea(this, 'extrae', 7);
  }

  extrae() {
    const cantidad = this.mineros.getCantidad();
    this.almacen.addCantidad (cantidad);
    console.log ( 'Almacen de la mina de oro tiene ' + this.getOroActual() );
  }

  public getOroActual() { return this.almacen.getCantidad(); }
}

export { Cuartel };
export { Palacio };
export { MinaDeOro };
