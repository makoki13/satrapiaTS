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

  constructor ( private id: number, private nombre: string, private tipo: TipoEdificio, private posicion: Punto) {

  }
}

class Palacio extends Edificio {
  private recaudador: Extractor;
  private impuestos: Productor;
  private almacen: Almacen;

  constructor (id: number, nombre: string, private disp: Dispatcher, posicion: Punto) {
    super (id, nombre, TipoEdificio.PALACIO, posicion);

    this.impuestos = new Productor ( null, ORO, 10, 10, 0);
    this.almacen = new Almacen ( 66, 'Deposito de oro', [ORO], null);
    const cantidadInicial = 2;
    this.recaudador = new Extractor (this.impuestos, this.almacen, cantidadInicial);
    this.disp.addTareaRepetitiva(this, 'recaudaImpuestos', 5);
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

  constructor (id: number, nombre: string, private disp: Dispatcher, posicion: Punto) {
    super (id, nombre, TipoEdificio.SILOS, posicion);
  }

  public addAlmacen ( nuevoAlmacen: Almacen) {
      this.almacenes.push ( nuevoAlmacen );
  }
}

class Cuartel extends Edificio {
  private unidades: Array < UnidadMilitar >;

  constructor (id: number, nombre: string, private disp: Dispatcher, posicion: Punto) {
    super (id, nombre, TipoEdificio.CUARTEL, posicion);
  }
}

class MinaDeOro extends Edificio {
  private mineros: Extractor;
  private filon: Productor;
  private almacen: Almacen;

  constructor (id: number, nombre: string, private disp: Dispatcher, posicion: Punto) {
    super (id, nombre, TipoEdificio.MINA_DE_ORO, posicion);

    this.filon = new Productor ( null, ORO, 30, 30, 0);
    this.almacen = new Almacen ( 66, 'Filón de oro', [ORO], posicion);
    const cantidadInicial = 1;
    this.mineros = new Extractor (this.filon, this.almacen, cantidadInicial);

    this.disp.addTareaRepetitiva(this, 'extrae', 7);
  }

  extrae() {
    const cantidad = this.mineros.getCantidad();
    this.almacen.addCantidad (cantidad);
    console.log ( 'Almacen de la mina de oro tiene ' + this.getOroActual() );

    /* Pendiente: Si el almacen alcanza el tope enviar un transporte de oro a palacio */
  }

  public getOroActual() { return this.almacen.getCantidad(); }
}

export { Cuartel };
export { Palacio };
export { MinaDeOro };
