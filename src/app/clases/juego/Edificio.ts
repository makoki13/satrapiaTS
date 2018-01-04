import { Localidad } from './Imperio';
import { Capital } from './Capital';
import { Extractor } from './Extractor';
import { Productor } from './Productor';
import { Almacen } from './Almacen';
import { Punto } from './Punto';
import { ORO, COMIDA } from './Recurso';
import { POBLACION } from './Recurso';
import { UnidadMilitar } from './Recurso';
import { Transporte } from './Transporte';

import { CivilConHonda } from './Recurso';

import { Dispatcher } from './Dispatcher';
import { CentroDeInvestigacion } from './CentroDeInvestigacion';
import { noUndefined } from '@angular/compiler/src/util';

/******************************************************************************************/
/** CLASE EDIFICIO */
enum TipoEdificio {
  PALACIO = 1, SILOS = 2, CUARTEL = 3, MERCADO = 4, EMBAJADA = 5, TABERNA = 6, CENTRO_DE_INVESTIGACION = 7,
  GRANJA  = 101, MINA_DE_ORO = 102,
  EJERCITO = 1000}


class Edificio {
  public status = 'Sin actividad';
  public hayEnvioEnMarcha = false;

  constructor ( private id: number, private nombre: string, private tipo: TipoEdificio, private posicion: Punto) {

  }

  public getPosicion() { return this.posicion; }
  public setStatus( mensaje ) { this.status = mensaje; }
  public getNombre() { return this.nombre; }
}

/******************************************************************************************/
/** CLASE SILOS */
class Silos extends Edificio {
  public almacenes: Array < Almacen >;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.SILOS, capital.getPosicion());
    this.capital.setSilos(this);

    this.almacenes = new Array < Almacen > ();
  }

  public addAlmacen ( nuevoAlmacen: Almacen) {
      const almacenTest = new Almacen (1, 'TTTT', [COMIDA], this.capital.getPosicion(), 1000);
      this.almacenes.push ( almacenTest );
  }

  public getLista() {
    return this.almacenes;
  }
}

/******************************************************************************************/
/** CLASE CUARTEL */
interface Unidades {
  unidad: UnidadMilitar;
  cantidad: number;
}

class Cuartel extends Edificio {
  private unidades: Array < Unidades >;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.CUARTEL, capital.getPosicion());

    this.capital.setCuartel(this);
    this.unidades = new Array < Unidades > ();
  }

  getTropas() { return this.unidades; }
  getTropasJSON() { return JSON.stringify(this.unidades); }

  getStatus() { return this.status; }
  setStatus( mensaje: string ) { super.setStatus(mensaje); }

  addUnidades (v: Array < any >) {
    const tipo: UnidadMilitar = v[0]; const cantidad: number = v[1];
    let indiceElemento = -1;
    this.unidades.forEach( (x, indice) => {
      if (x.unidad.getID() === tipo.getID()) {indiceElemento = indice; }
    });

    //  .findIndex(x => x.id === idTipo);
    if ( indiceElemento === -1) {
      const nuevaUnidad: Unidades = {unidad: tipo, cantidad: cantidad};
      this.unidades.push (nuevaUnidad);
    } else {
      this.unidades[indiceElemento].cantidad += cantidad;
    }

    console.log (this.getTropas());

    this.setStatus ('Sin actividad');

    return -1;
  }

  entrenaCivilesConHonda(cantidad: number = 0) {
    if (cantidad === 0) { cantidad = CivilConHonda.maxUnidadesEnEntrenamiento(); }
    if (cantidad > CivilConHonda.maxUnidadesEnEntrenamiento()) { cantidad = CivilConHonda.maxUnidadesEnEntrenamiento(); }
    const myCI = this.capital.getCentroDeInvestigacion();
    if (myCI.estaComprada(2, 1, 1)) {
      console.log(' Se inicia reclutamiento de unidades de infanteria: "Civiles con honda".');
      this.setStatus ('Entrenando ' + cantidad + ' civiles con honda');
      this.disp.addTareaRepetitiva(this, 'addUnidades', 5, Array < any > ( new CivilConHonda(100, 1, 1, 100), cantidad ));
    } else {
      console.log(' No se puede entrenar "Civiles con honda". La investigación no está realizada.');
    }
  }
}

/******************************************************************************************/
/** CLASE MINA DE ORO */
class MinaDeOro extends Edificio {
  private mineros: Extractor;
  private filon: Productor;
  private almacen: Almacen;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.MINA_DE_ORO, capital.getPosicion());

    this.capital.addMinaDeOro(this);

    this.filon = new Productor ( null, ORO, 30, 30, 0);
    this.almacen = new Almacen ( 67, 'Filón de oro', [ORO], this.capital.getPosicion(), 5);
    const cantidadInicial = 1;
    this.mineros = new Extractor (this.filon, this.almacen, cantidadInicial);

    this.disp.addTareaRepetitiva(this, 'extrae', 1);

    this.setStatus ('Sin envios actuales');
  }

  extrae() {
    const cantidad = this.mineros.getCantidad();
    // if (cantidad === 0) {this.setStatus ('Mina de oro agotada'); return -1; }
    this.almacen.addCantidad (cantidad);
    console.log ( 'Almacen de la mina de oro tiene ' + this.getOroActual() + ' Capacidad máx: ' + this.almacen.getMaxCantidad() );

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
    const transporteDeOro = new Transporte (this.almacen, this.capital.getPalacio().getAlmacen(), ORO, cantidad, this );

    transporteDeOro.calculaViaje();
    this.setStatus ('Enviando oro...');
    this.disp.addTareaRepetitiva(transporteDeOro, 'envia', 1);
  }

  public getOroActual() { return this.almacen.getCantidad(); }
  public getMaxAlmacen() { return this.almacen.getMaxCantidad(); }

  public getStatus() { return this.status; }
  public setStatus( mensaje: string ) { super.setStatus(mensaje); }

  public estaActiva() { return (this.filon.getStock() > 0); }
}

export { Cuartel };
export { MinaDeOro };
export { Edificio };
export { TipoEdificio };
export { Silos };
