import { Edificio } from './Edificio';
import { TipoEdificio} from './Edificio';
import { Capital } from './Capital';
import { Punto } from './Punto';

import { Dispatcher } from './Dispatcher';

class TipoInvestigacion {
  public listaDeSubinvestigaciones: Array < TipoSubInvestigacion >;

  constructor (private id: number, private nombre: string) {
    this.listaDeSubinvestigaciones = new Array < TipoSubInvestigacion > ();
  }

  addSubinvestigacion(subinvestigacion: TipoSubInvestigacion) {
    this.listaDeSubinvestigaciones.push(subinvestigacion);
  }

  getID() { return this.id; }
  getNombre() { return this.nombre; }
}

class TipoSubInvestigacion {
  public listaDeItems: Array < TipoItemInvestigacion >;

  constructor (private id: number, private nombre: string) {
    this.listaDeItems = new Array < TipoItemInvestigacion > ();
  }

  addIteminvestigacion(item: TipoItemInvestigacion) {
    this.listaDeItems.push(item);
  }

  getID() { return this.id; }
  getNombre() { return this.nombre; }
}

class TipoItemInvestigacion {
  constructor (private id: number, private nombre: string, private precio: number, private tiempo: number, private conseguido: boolean) {

  }

  getID() { return this.id; }
  getNombre() { return this.nombre; }
  getPrecio() { return this.precio; }
  getTiempo() { return this.tiempo; }

  setconseguido() {
    this.conseguido = true;
    console.log ( ' Comprada la investigación: ' + this.nombre);
  }

  getConseguido() { return this.conseguido; }
}

class CentroDeInvestigacion extends Edificio {

  private listaInvestigaciones: Array < TipoInvestigacion >;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.CENTRO_DE_INVESTIGACION, capital.getPosicion());

    this.capital.setCentroDeInvestigacion(this);

    this.listaInvestigaciones = new Array < TipoInvestigacion > ();

    let investigacion = new TipoInvestigacion(1, 'RECURSOS NATURALES');
      let subinvestigacion = new TipoSubInvestigacion(1, 'AGRICULTURA');
        let itemInvestigacion = new TipoItemInvestigacion (1, 'Cultivar frutales', 100, 10, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        itemInvestigacion = new TipoItemInvestigacion (2, 'Cultivar algodon', 150, 15, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);

      subinvestigacion = new TipoSubInvestigacion(2, 'GANADERIA');
        itemInvestigacion = new TipoItemInvestigacion (1, 'Criar cabras', 50, 5, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        itemInvestigacion = new TipoItemInvestigacion (2, 'Criar gusanos de seda', 80, 8, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);

      subinvestigacion = new TipoSubInvestigacion(3, 'MADERA');
        itemInvestigacion = new TipoItemInvestigacion (1, 'Mejorar producción un 5%', 50, 5, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);

      subinvestigacion = new TipoSubInvestigacion(4, 'EXTRACCION DE ORO');
        itemInvestigacion = new TipoItemInvestigacion (1, 'Mejorar producción un 5%', 50, 5, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);

      subinvestigacion = new TipoSubInvestigacion(5, 'EXTRACCION DE PIEDRA');
        itemInvestigacion = new TipoItemInvestigacion (1, 'Mejorar producción un 5%', 50, 5, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);

      subinvestigacion = new TipoSubInvestigacion(6, 'EXTRACCION DE METALES');
        itemInvestigacion = new TipoItemInvestigacion (1, 'Obtener hierro', 50, 5, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);
    this.listaInvestigaciones.push(investigacion);

    investigacion = new TipoInvestigacion(2, 'EJERCITO');
      subinvestigacion = new TipoSubInvestigacion(1, 'INFANTERIA');
        itemInvestigacion = new TipoItemInvestigacion (1, 'Civil con hondas', 10, 5, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);
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

  getLista() { return this.listaInvestigaciones; }

  getListaConseguidos() {
    return this.listaInvestigaciones.filter( function( investigacion ) {
      let valor = false;
      const listaSubInvestigaciones = investigacion.listaDeSubinvestigaciones;
      listaSubInvestigaciones.forEach ( function ( subInvestigacion ) {
        const listaItems = subInvestigacion.listaDeItems;
        listaItems.forEach ( function ( item ) {
          if (item.getConseguido() === true ) { valor = true; }
        });
      });
      return valor;
    });
  }

  getListaJSON() { return JSON.stringify(this.listaInvestigaciones); }

  private getItem (idTipo, idSubtipo, idItem): TipoItemInvestigacion  {
    const investigacion =  this.listaInvestigaciones.filter( x => x.getID() === idTipo);
    const subinvestigacion = investigacion[0].listaDeSubinvestigaciones.filter( x => x.getID() === idSubtipo);
    const item = subinvestigacion[0].listaDeItems.filter( x => x.getID() === idItem);
    return item[0];
  }

  iniciaInvestigacion(idTipo, idSubtipo, idItem) {
    const item = this.getItem (idTipo, idSubtipo, idItem);
    this.disp.addTareaRepetitiva(this, 'compraInvestigacion', item.getTiempo(), Array < any > (idTipo, idSubtipo, idItem));
  }

  compraInvestigacion(v: Array < any >) {
    const idTipo = v[0]; const idSubtipo = v[1]; const idItem = v[2];
    const item = this.getItem (idTipo, idSubtipo, idItem);
    item.setconseguido();
    return -1; // Finalizar tarea
  }

  cancelaInvestigacion() {
    // para la 2.0 :-D
  }

  estaComprada(idTipo, idSubtipo, idItem) {
    const item = this.getItem (idTipo, idSubtipo, idItem);
    return item.getConseguido();
  }
}

export { CentroDeInvestigacion };

