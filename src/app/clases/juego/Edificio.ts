import { Localidad } from './Imperio';
import { Extractor } from './Extractor';
import { Productor } from './Productor';
import { Almacen } from './Almacen';
import { Punto } from './Punto';
import { ORO } from './Recurso';
import { UnidadMilitar } from './Recurso';
import { Transporte } from './Transporte';

import { Dispatcher } from './Dispatcher';
import { CentroDeInvestigacion } from './CentroDeInvestigacion';

enum TipoEdificio {
  PALACIO = 1, SILOS = 2, CUARTEL = 3, MERCADO = 4, EMBAJADA = 5, TABERNA = 6, CENTRO_DE_INVESTIGACION = 7,
  GRANJA  = 101, MINA_DE_ORO = 102,
  EJERCITO = 1000}

class Edificio {

  protected centroDeInvestigacion: CentroDeInvestigacion;

  constructor ( private id: number, private nombre: string, private tipo: TipoEdificio, private posicion: Punto,
    protected palacio: Palacio) {

  }

  public getPosicion() { return this.posicion; }

  public setPalacio (p: Palacio) { this.palacio = p; }

  protected getAlmacenPalacio () { return this.palacio.getAlmacen(); }

  public setCentroDeInvestigacionPalacio (ci: CentroDeInvestigacion) { this.palacio.centroDeInvestigacion = ci; }
  protected getCentroInvestigacionPalacio () { return this.palacio.centroDeInvestigacion; }
}

class Palacio extends Edificio {
  private recaudador: Extractor;
  private impuestos: Productor;
  protected almacen: Almacen;

  constructor (id: number, nombre: string, private disp: Dispatcher, posicion: Punto) {
    super (id, nombre, TipoEdificio.PALACIO, posicion, null);

    this.impuestos = new Productor ( null, ORO, 10, 10, 0);
    this.almacen = new Almacen ( 66, 'Deposito de oro', [ORO], posicion, Number.MAX_VALUE.valueOf());
    const cantidadInicial = 2;
    this.recaudador = new Extractor (this.impuestos, this.almacen, cantidadInicial);
    this.disp.addTareaRepetitiva(this, 'recaudaImpuestos', 15);
  }

  public setPalacio() { super.setPalacio(this); }

  public recaudaImpuestos ( ) {
    const cantidad = this.recaudador.getCantidad();
    this.almacen.addCantidad (cantidad);
    // console.log ( 'Almacen del palacio tiene ' + this.getOroActual() );
   }

  public getOroActual() { return this.almacen.getCantidad(); }

  public getAlmacen ()  { return this.almacen; }
}

class Silos extends Edificio {
  private almacenes: Array < Almacen >;

  constructor (id: number, nombre: string, private disp: Dispatcher, posicion: Punto, palacio: Palacio) {
    super (id, nombre, TipoEdificio.SILOS, posicion, palacio);
  }

  public addAlmacen ( nuevoAlmacen: Almacen) {
      this.almacenes.push ( nuevoAlmacen );
  }
}

class Cuartel extends Edificio {
  private unidades: Array < UnidadMilitar >;

  constructor (id: number, nombre: string, private disp: Dispatcher, posicion: Punto, palacio: Palacio) {
    super (id, nombre, TipoEdificio.CUARTEL, posicion, palacio);
  }

  getTropas() { return JSON.stringify(this.unidades); }

  entrenaCivilesConHonda() {
    const myCI = super.getCentroInvestigacionPalacio();
    if (myCI.estaComprada(2, 1, 1)) {
      console.log(' Se inicia reclutamiento de unidades de infanteria: "Civiles con honda".');
    } else {
      console.log(' No se puede entrenar "Civiles con honda". La investigación no está realizada.');
    }
  }
}

class MinaDeOro extends Edificio {
  private mineros: Extractor;
  private filon: Productor;
  private almacen: Almacen;

  private hayEnvioEnMarcha = false;

  constructor (id: number, nombre: string, private disp: Dispatcher, posicion: Punto, palacio: Palacio) {
    super (id, nombre, TipoEdificio.MINA_DE_ORO, posicion, palacio);

    this.filon = new Productor ( null, ORO, 30, 30, 0);
    this.almacen = new Almacen ( 67, 'Filón de oro', [ORO], posicion, 5);
    const cantidadInicial = 1;
    this.mineros = new Extractor (this.filon, this.almacen, cantidadInicial);

    this.disp.addTareaRepetitiva(this, 'extrae', 1);
  }

  extrae() {
    const cantidad = this.mineros.getCantidad();
    this.almacen.addCantidad (cantidad);
    // console.log ( 'Almacen de la mina de oro tiene ' + this.getOroActual() + ' Capacidad máx: ' + this.almacen.getMaxCantidad() );

    /* Si el almacen alcanza el tope enviar un transporte de oro a palacio */
    if (this.almacen.getCantidad() >= this.almacen.getMaxCantidad()) {
      if (this.hayEnvioEnMarcha === false) {
        this.hayEnvioEnMarcha = true;
        this.enviaOroHaciaPalacio();
      }
    }
  }

  enviaOroHaciaPalacio() {
    const cantidad = this.almacen.restaCantidad(this.almacen.getCantidad());
    const transporteDeOro = new Transporte (this.almacen, super.getAlmacenPalacio(), ORO, cantidad );

    transporteDeOro.calculaViaje();
    this.disp.addTareaRepetitiva(transporteDeOro, 'envia', 1);
  }

  public getOroActual() { return this.almacen.getCantidad(); }
}

export { Cuartel };
export { Palacio };
export { MinaDeOro };
export { Edificio };
export { TipoEdificio };
