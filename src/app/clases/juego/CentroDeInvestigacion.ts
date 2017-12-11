import { Edificio } from './Edificio';
import { TipoEdificio} from './Edificio';
import { Palacio } from './Edificio';
import { Punto } from './Punto';

import { Dispatcher } from './Dispatcher';

class TipoInvestigacion {
  public listaDeSubinvestigaciones: Array < TipoSubInvestigacion >;

  constructor (private id: number, private nombre: string) {

  }

  addSubinvestigacion(subinvestigacion: TipoSubInvestigacion) {
    this.listaDeSubinvestigaciones.push(subinvestigacion);
  }
}

class TipoSubInvestigacion {
  public listaDeItems: Array < TipoItemInvestigacion >;

  constructor (private id: number, private nombre: string) {

  }

  addIteminvestigacion(item: TipoItemInvestigacion) {
    this.listaDeItems.push(item);
  }
}

class TipoItemInvestigacion {
  constructor (private id: number, private nombre: string, private precio: number, private conseguido: boolean) {

  }

  getPrecio() { return this.precio; }

  setconseguido() { this.conseguido = true; }
  getConseguido() { return this.conseguido; }
}

class CentroDeInvestigacion extends Edificio {

  private listaInvestigaciones: Array < TipoInvestigacion >;

  constructor (id: number, nombre: string, private disp: Dispatcher, posicion: Punto, palacio: Palacio) {
    super (id, nombre, TipoEdificio.CENTRO_DE_INVESTIGACION, posicion, palacio);

    this.listaInvestigaciones = new Array < TipoInvestigacion > ();

    let investigacion = new TipoInvestigacion(1, 'RECURSOS NATURALES');
      let subinvestigacion = new TipoSubInvestigacion(1, 'AGRICULTURA');
        let itemInvestigacion = new TipoItemInvestigacion (1, 'Cultivar frutales', 100, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        itemInvestigacion = new TipoItemInvestigacion (2, 'Cultivar algodon', 150, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);

      subinvestigacion = new TipoSubInvestigacion(2, 'GANADERIA');
        itemInvestigacion = new TipoItemInvestigacion (1, 'Criar cabras', 50, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        itemInvestigacion = new TipoItemInvestigacion (2, 'Criar gusanos de seda', 80, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);

    subinvestigacion = new TipoSubInvestigacion(3, 'MADERA'); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(4, 'EXTRACCION DE ORO'); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(5, 'EXTRACCION DE PIEDRA'); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(6, 'EXTRACCION DE METALES'); investigacion.addSubinvestigacion(subinvestigacion);
    this.listaInvestigaciones.push(investigacion);

    investigacion = new TipoInvestigacion(2, 'EJERCITO');
    subinvestigacion = new TipoSubInvestigacion(1, 'INFANTERIA'); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(2, 'CABALLERIA'); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(3, 'CARROS'); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(4, 'ASALTO'); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(5, 'OFICIALES'); investigacion.addSubinvestigacion(subinvestigacion);
    this.listaInvestigaciones.push(investigacion);

    investigacion = new TipoInvestigacion(3, 'COMERCIO');
    subinvestigacion = new TipoSubInvestigacion(1, 'ELEMENTOS DE TRANSPORTE'); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(2, 'CARRETERAS'); investigacion.addSubinvestigacion(subinvestigacion);
    this.listaInvestigaciones.push(investigacion);

    investigacion = new TipoInvestigacion(4, 'DIPLOMACIA');
    subinvestigacion = new TipoSubInvestigacion(1, 'EMBAJADAS'); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(2, 'ESPIAS'); investigacion.addSubinvestigacion(subinvestigacion);
    this.listaInvestigaciones.push(investigacion);

    investigacion = new TipoInvestigacion(5, 'INDUSTRIA');
    subinvestigacion = new TipoSubInvestigacion(1, 'ARMAS'); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(2, 'INVESTIGACION'); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(3, 'CONSTRUCCIÓN'); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(4, 'OCIO'); investigacion.addSubinvestigacion(subinvestigacion);
    this.listaInvestigaciones.push(investigacion);
  }

  getLista() {

  }

  compraInvestigacion(idTipo, idSubtipo, idItem) {
    this.listaInvestigaciones[idTipo].listaDeSubinvestigaciones[idSubtipo].listaDeItems[idItem].setconseguido();
  }

  cancelaInvestigacion() {
    // para la 2.0 :-D
  }

  estaComprada(idTipo, idSubtipo, idItem) {
    return this.listaInvestigaciones[idTipo].listaDeSubinvestigaciones[idSubtipo].listaDeItems[idItem].getConseguido(); }
}

