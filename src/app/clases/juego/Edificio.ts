import { Localidad } from './Imperio';
import { Extractor } from './Extractor';
import { Productor } from './Productor';
import { Almacen } from './Almacen';
import { Punto } from './Punto';
import { ORO } from './Recurso';
import { POBLACION } from './Recurso';
import { UnidadMilitar } from './Recurso';
import { Transporte } from './Transporte';

import { CivilConHonda } from './Recurso';

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
  private crecimientoDemografico: Extractor;

  private impuestos: Productor;
  private alojamientos: Productor;

  protected almacen: Almacen;
  protected poblacion: Almacen;

  constructor (id: number, nombre: string, private disp: Dispatcher, posicion: Punto) {
    super (id, nombre, TipoEdificio.PALACIO, posicion, null);

    let cantidadInicial = 2;
    this.impuestos = new Productor ( null, ORO, 10, 10, 0);
    this.almacen = new Almacen ( 66, 'Deposito de oro', [ORO], posicion, Number.MAX_VALUE.valueOf());
    this.recaudador = new Extractor (this.impuestos, this.almacen, cantidadInicial);
    this.disp.addTareaRepetitiva(this, 'recaudaImpuestos', 1);

    cantidadInicial = 50; const cantidadMaxima = 1000;
    this.alojamientos = new Productor ( null, POBLACION, cantidadInicial, cantidadMaxima, 0);
    this.poblacion = new Almacen ( 67, 'Población', [POBLACION], posicion, cantidadMaxima);
    this.crecimientoDemografico = new Extractor (this.alojamientos, this.poblacion, cantidadInicial);
    this.disp.addTareaRepetitiva(this, 'realizaCenso', 1);
  }

  public setPalacio() { super.setPalacio(this); }

  public recaudaImpuestos ( ) {
    const cantidad = this.recaudador.getCantidad();
    this.almacen.addCantidad (cantidad);
    // console.log ( 'Almacen del palacio tiene ' + this.getOroActual() );
   }

   public realizaCenso ( ) {
    const cantidad = this.crecimientoDemografico.getCantidad();
    this.poblacion.addCantidad (cantidad);
    // console.log ( 'Almacen del palacio tiene ' + this.getOroActual() );
   }

  public getOroActual() { return this.almacen.getCantidad(); }
  public getPoblacionActual() { return this.poblacion.getCantidad(); }

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

interface Unidades {
  id: number;
  cantidad: number;
}

class Cuartel extends Edificio {
  private unidades: Array < Unidades >;

  constructor (id: number, nombre: string, private disp: Dispatcher, posicion: Punto, palacio: Palacio) {
    super (id, nombre, TipoEdificio.CUARTEL, posicion, palacio);

    this.unidades = new Array < Unidades > ();
  }

  getTropas() { return JSON.stringify(this.unidades); }

  addUnidades (v: Array < any >) {
    const idTipo: number = v[0]; const cantidad: number = v[1];
    let indiceElemento = -1;
    this.unidades.forEach( (x, indice) => {
      if (x.id === idTipo) {indiceElemento = indice; }
    });

    //  .findIndex(x => x.id === idTipo);
    if ( indiceElemento === -1) {
      const nuevaUnidad: Unidades = {id: idTipo, cantidad: cantidad};
      this.unidades.push (nuevaUnidad);
    } else {
      this.unidades[indiceElemento].cantidad += cantidad;
    }

    console.log (this.getTropas());

    return -1;
  }

  entrenaCivilesConHonda(cantidad: number = 0) {
    if (cantidad === 0) { cantidad = CivilConHonda.maxUnidadesEnEntrenamiento(); }
    if (cantidad > CivilConHonda.maxUnidadesEnEntrenamiento()) { cantidad = CivilConHonda.maxUnidadesEnEntrenamiento(); }
    const myCI = super.getCentroInvestigacionPalacio();
    if (myCI.estaComprada(2, 1, 1)) {
      console.log(' Se inicia reclutamiento de unidades de infanteria: "Civiles con honda".');
      this.disp.addTareaRepetitiva(this, 'addUnidades', 5, Array < any > ( 10001, cantidad ));
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
