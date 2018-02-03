import { Localidad } from './Imperio';
import { Capital } from './Capital';
import { Extractor } from './Extractor';
import { Productor } from './Productor';
import { Almacen } from './Almacen';
import { Punto } from './Punto';
import { Recurso, ORO, COMIDA, MADERA, Soldado, PIEDRA, HIERRO } from './Recurso';
import { POBLACION } from './Recurso';
import { UnidadMilitar } from './Recurso';
import { Transporte } from './Transporte';

import { CivilConHonda } from './Recurso';

import { Dispatcher } from './Dispatcher';

import { CentroDeInvestigacion, TipoItemInvestigacion } from './CentroDeInvestigacion';
// import { TipoInvestigacion, TipoItemInvestigacion, TipoSubInvestigacion } from './CentroDeInvestigacion';
// import { TipoItemInvestigacion } from './CentroDeInvestigacion';
import { noUndefined } from '@angular/compiler/src/util';

/******************************************************************************************/
/** CLASE EDIFICIO */
enum TipoEdificio {
  PALACIO = 1, SILOS = 2, CUARTEL = 3, MERCADO = 4, EMBAJADA = 5, TABERNA = 6, CENTRO_DE_INVESTIGACION = 7,
  GRANJA  = 101, MINA_DE_ORO = 102, SERRERIA = 103, MINA_DE_HIERRO = 104, CANTERA_DE_PIEDRA = 105,
  EJERCITO = 1000}


class Edificio {
  public status = 'Sin actividad';
  public hayEnvioEnMarcha = false;

  // Los dos ultimos parametros del constructor hay que quitarlos.
  constructor ( private id: number, private nombre: string, private tipo: TipoEdificio, private posicion: Punto,
    private costeConstruccion: number, private tiempoConstruccion: number) {

  }

  /* Es posible que no se usen */
  public setCosteConstruccion(cantidad: number) { this.costeConstruccion = cantidad; }
  public setTiempoConstruccion(cantidad: number) { this.tiempoConstruccion = cantidad; }
  public getCosteConstruccion() { return this.costeConstruccion; }
  public getTiempoConstruccion() { return this.tiempoConstruccion; }

  public getID() { return this.id; }
  public getTipo() { return this.tipo; }
  public getPosicion() { return this.posicion; }
  public setStatus( mensaje ) { this.status = mensaje; }
  public getNombre() { return this.nombre; }
  public getStatus() { return this.status; }
}

/******************************************************************************************/
/** CLASE SILOS */
class Silos extends Edificio {
  public almacenes: Array < Almacen >;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.SILOS, capital.getPosicion(), 0, 0);
    this.capital.setSilos(this);

    this.almacenes = new Array < Almacen > ();
  }

  public addAlmacen ( nuevoAlmacen: Almacen) {
      this.almacenes.push ( nuevoAlmacen );
  }

  public getLista() {
    return this.almacenes;
  }

  public getAlmacenComida() {
    let indiceElemento = -1;
    this.almacenes.forEach( (x, indice) => {
      if (x.getTipoRecurso() === COMIDA) {indiceElemento = indice; }
    });
    if ( indiceElemento !== -1) { return this.almacenes[indiceElemento]; } else {return null; }
  }

  public getAlmacenMadera() {
    let indiceElemento = -1;
    this.almacenes.forEach( (x, indice) => {
      if (x.getTipoRecurso() === MADERA) {indiceElemento = indice; }
    });
    if ( indiceElemento !== -1) { return this.almacenes[indiceElemento]; } else {return null; }
  }

  public getAlmacenPiedra() {
    let indiceElemento = -1;
    this.almacenes.forEach( (x, indice) => {
      if (x.getTipoRecurso() === PIEDRA) {indiceElemento = indice; }
    });
    if ( indiceElemento !== -1) {
      console.log('se obtiene elem de almacen de piedra');
      return this.almacenes[indiceElemento];
    } else {
      console.log('Fail en elem de almacen de piedra');
      return null;
    }
  }

  public getAlmacenHierro() {
    let indiceElemento = -1;
    this.almacenes.forEach( (x, indice) => {
      if (x.getTipoRecurso() === HIERRO) {indiceElemento = indice; }
    });
    if ( indiceElemento !== -1) {
      console.log('se obtiene elem de almacen de hierro');
      return this.almacenes[indiceElemento];
    } else {
      console.log('Fail en elem de almacen de hierro');
      return null;
    }
  }
}

/******************************************************************************************/
/** CLASE CUARTEL */
interface Unidades {
  unidad: UnidadMilitar;
  cantidad: number;
  investigacion: TipoItemInvestigacion;
}

class Cuartel extends Edificio {
  private unidades: Array < Unidades >;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.CUARTEL, capital.getPosicion(), 0, 0);

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
      const nuevaUnidad: Unidades = {unidad: tipo, cantidad: cantidad, investigacion: null}; // Ojo....
      this.unidades.push (nuevaUnidad);
    } else {
      this.unidades[indiceElemento].cantidad += cantidad;
    }

    // console.log (this.getTropas());

    this.setStatus ('Sin actividad');

    return -1;
  }

  getTipoUnidadesPermitidas() {
    const lista = new Array < Unidades > ();
    // let unidadItem: UnidadMilitar;
    const myCI = this.capital.getCentroDeInvestigacion();

    const elCuartel = this;

    myCI.getListaUnidadesMilitaresConseguidas().forEach ( function ( item) {
      const indice = item.getID();

      // console.log (elCuartel.unidades);
      let existe = false;
      switch (indice) {
        // case 1: unidadItem = new CivilConHonda ( 100, 1, 100, 100); // Obtenerlo del item de investigacion
        case 1:
          elCuartel.unidades.forEach( (x) => {
            // console.log ('UNIDAD 2:::: ' + x.unidad.getID());
            if (x.unidad.getID() === 1001) {lista.push (x); existe = true; }
          });
          if (existe === false ) {
            const nuevaUnidad: Unidades = {unidad: new CivilConHonda(100, 1, 1, 100) , cantidad: 0, investigacion: item}; // Ojo....
            elCuartel.unidades.push (nuevaUnidad);
            lista.push (nuevaUnidad);
          }
          break;

        case 2:
          elCuartel.unidades.forEach( (x) => {
            if (x.unidad.getID() === 1002) {lista.push (x); existe = true; }
          });
          if (existe === false ) {
            const nuevaUnidad: Unidades = {unidad: new Soldado (100, 1, 100, 100) , cantidad: 0, investigacion: item}; // Ojo....
            elCuartel.unidades.push (nuevaUnidad);
            lista.push (nuevaUnidad);
          }
          break;

        default:
          // console.log ('UNIDAD 0:::: ' + indice);
      }
    });

    return lista;
  }

  entrenaCivilesConHonda(cantidad: number = 0) {
    const tipoUnidad = new CivilConHonda(100, 1, 1, 100);
    const maxUnidadesEnEntrenamiento = tipoUnidad.getMaxUnidadesEnEntrenamiento();
    if (cantidad === 0) { cantidad = maxUnidadesEnEntrenamiento; }
    if (cantidad > maxUnidadesEnEntrenamiento) { cantidad = maxUnidadesEnEntrenamiento; }
    const myCI = this.capital.getCentroDeInvestigacion();
    if (myCI.estaComprada(2, 1, 1)) {
      // console.log(' Se inicia reclutamiento de unidades de infanteria: "Civiles con honda".');
      this.setStatus ('Entrenando');

      this.unidades.forEach( (x) => {
        if (x.unidad.getID() === 1001) {
          const precio = x.unidad.getCosteUnitario();
          const importeTotal = precio * cantidad;
          const cantidadObtenida = this.capital.getPalacio().gastaOro(importeTotal);
          if (cantidadObtenida < importeTotal ) {
            this.capital.getPalacio().entraOro(cantidadObtenida);
            alert (' Se aborta el reclutamiento de ' + cantidad + x.unidad.getNombre() + ': Oro insuficiente');
            return false;
          }
        }
      });

      this.disp.addTareaRepetitiva(this, 'addUnidades', 5,
        Array < any > ( tipoUnidad, cantidad ));

    } else {
      // console.log(' No se puede entrenar "Civiles con honda". La investigación no está realizada.');
    }
  }

  entrenaSoldados(cantidad: number = 0) {
    const tipoUnidad = new Soldado(100, 1, 100, 100);
    const maxUnidadesEnEntrenamiento = tipoUnidad.getMaxUnidadesEnEntrenamiento();
    if (cantidad === 0) { cantidad = maxUnidadesEnEntrenamiento; }
    if (cantidad > maxUnidadesEnEntrenamiento) { cantidad = maxUnidadesEnEntrenamiento; }
    const myCI = this.capital.getCentroDeInvestigacion();
    if (myCI.estaComprada(2, 1, 2)) {
      // console.log(' Se inicia reclutamiento de unidades de infanteria: "Civiles con honda".');
      this.setStatus ('Entrenando');

      this.unidades.forEach( (x) => {
        if (x.unidad.getID() === 1002) {
          const precio = x.unidad.getCosteUnitario();
          const importeTotal = precio * cantidad;
          const cantidadObtenida = this.capital.getPalacio().gastaOro(importeTotal);
          if (cantidadObtenida < importeTotal ) {
            this.capital.getPalacio().entraOro(cantidadObtenida);
            alert (' Se aborta el reclutamiento de ' + cantidad + x.unidad.getNombre() + ': Oro insuficiente');
            return false;
          }
        }
      });

      this.disp.addTareaRepetitiva(this, 'addUnidades', 5,
        Array < any > ( tipoUnidad, cantidad ));

    } else {
      // console.log(' No se puede entrenar "Soldados". La investigación no está realizada.');
    }
  }

  entrena( tipoUnidad: Unidades) {
    // console.log (tipoUnidad.unidad.getID());
    switch (tipoUnidad.unidad.getID()) {
      case 1001:
        // console.log (tipoUnidad.unidad);
        this.entrenaCivilesConHonda();
        break;
      case 1002:
        // console.log (tipoUnidad.unidad);
        this.entrenaSoldados();
        break;
    }
  }
}


export { Cuartel };
export { Unidades };
export { Edificio };
export { TipoEdificio };
export { Silos };
