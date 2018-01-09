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

  getSubinvestigacionesConseguidos() {
    return this.listaDeSubinvestigaciones.filter( function( subInvestigacion ) {
      let valor = false;
      const listaItems = subInvestigacion.listaDeItems;
        listaItems.forEach ( function ( item ) {
          if (item.getConseguido() === true ) { valor = true; }
        });
        return valor;
      });
  }

  getLista() { return this.listaDeSubinvestigaciones; }
}

class TipoSubInvestigacion {
  public listaDeItems: Array < TipoItemInvestigacion >;

  constructor (private id: number, private nombre: string, private investigacion: TipoInvestigacion) {
    this.listaDeItems = new Array < TipoItemInvestigacion > ();
  }

  addIteminvestigacion(item: TipoItemInvestigacion) {
    this.listaDeItems.push(item);
  }

  getID() { return this.id; }
  getNombre() { return this.nombre; }

  getTipo() { return this.investigacion; }

  getItemsConseguidos() {
    return this.listaDeItems.filter( function( item ) {
      let valor = false;
      if (item.getConseguido() === true ) { valor = true; }
      return valor;
    });
  }

  getLista() { return this.listaDeItems; }

  estaInvestigada (indice: number) { return this.listaDeItems[indice].getConseguido(); }
}

class TipoItemInvestigacion {
  private siendoInvestigada = false;

  constructor (private id: number, private nombre: string, private precio: number, private tiempo: number, private conseguido: boolean,
    private subtipo: TipoSubInvestigacion) {

  }

  getID() { return this.id; }
  getNombre() { return this.nombre; }
  getPrecio() { return this.precio; }
  getTiempo() { return this.tiempo; }

  getSubTipo() { return this.subtipo; }

  setInvestigada( investigada: boolean) { this.siendoInvestigada = investigada; }

  estaSiendoInvestigada() { return this.siendoInvestigada; }

  setconseguido() {
    this.conseguido = true;
    this.siendoInvestigada = false;
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
      let subinvestigacion = new TipoSubInvestigacion(1, 'AGRICULTURA', investigacion);
        let itemInvestigacion = new TipoItemInvestigacion (1, 'Cultivar frutales', 10, 10, false, subinvestigacion);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        itemInvestigacion = new TipoItemInvestigacion (2, 'Cultivar algodon', 15, 15, false, subinvestigacion);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);

      subinvestigacion = new TipoSubInvestigacion(2, 'GANADERIA', investigacion);
        itemInvestigacion = new TipoItemInvestigacion (1, 'Criar cabras', 25, 5, false, subinvestigacion);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        itemInvestigacion = new TipoItemInvestigacion (2, 'Criar gusanos de seda', 80, 8, false, subinvestigacion);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);

      subinvestigacion = new TipoSubInvestigacion(3, 'MADERA', investigacion);
        itemInvestigacion = new TipoItemInvestigacion (1, 'Mejorar producción un 5%', 30, 5, false, subinvestigacion);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);

      subinvestigacion = new TipoSubInvestigacion(4, 'EXTRACCION DE ORO', investigacion);
        itemInvestigacion = new TipoItemInvestigacion (1, 'Mejorar producción un 5%', 30, 5, false, subinvestigacion);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);

      subinvestigacion = new TipoSubInvestigacion(5, 'EXTRACCION DE PIEDRA', investigacion);
        itemInvestigacion = new TipoItemInvestigacion (1, 'Mejorar producción un 5%', 30, 5, false, subinvestigacion);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);

      subinvestigacion = new TipoSubInvestigacion(6, 'EXTRACCION DE METALES', investigacion);
        itemInvestigacion = new TipoItemInvestigacion (1, 'Obtener hierro', 50, 5, false, subinvestigacion);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);
    this.listaInvestigaciones.push(investigacion);

    investigacion = new TipoInvestigacion(2, 'EJERCITO');
      subinvestigacion = new TipoSubInvestigacion(1, 'INFANTERIA', investigacion);
        itemInvestigacion = new TipoItemInvestigacion (1, 'Civil con hondas', 10, 5, false, subinvestigacion);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
      investigacion.addSubinvestigacion(subinvestigacion);
      subinvestigacion = new TipoSubInvestigacion(2, 'CABALLERIA', investigacion); investigacion.addSubinvestigacion(subinvestigacion);
      subinvestigacion = new TipoSubInvestigacion(3, 'CARROS', investigacion); investigacion.addSubinvestigacion(subinvestigacion);
      subinvestigacion = new TipoSubInvestigacion(4, 'ASALTO', investigacion); investigacion.addSubinvestigacion(subinvestigacion);
      subinvestigacion = new TipoSubInvestigacion(5, 'OFICIALES', investigacion); investigacion.addSubinvestigacion(subinvestigacion);
    this.listaInvestigaciones.push(investigacion);

    investigacion = new TipoInvestigacion(3, 'COMERCIO');
    subinvestigacion = new TipoSubInvestigacion(1, 'ELEMENTOS DE TRANSPORTE', investigacion);
      investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(2, 'CARRETERAS', investigacion);
      investigacion.addSubinvestigacion(subinvestigacion);
    this.listaInvestigaciones.push(investigacion);

    investigacion = new TipoInvestigacion(4, 'DIPLOMACIA');
    subinvestigacion = new TipoSubInvestigacion(1, 'EMBAJADAS', investigacion); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(2, 'ESPIAS', investigacion); investigacion.addSubinvestigacion(subinvestigacion);
    this.listaInvestigaciones.push(investigacion);

    investigacion = new TipoInvestigacion(5, 'INDUSTRIA');
    subinvestigacion = new TipoSubInvestigacion(1, 'ARMAS', investigacion); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(2, 'INVESTIGACION', investigacion); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(3, 'CONSTRUCCIÓN', investigacion); investigacion.addSubinvestigacion(subinvestigacion);
    subinvestigacion = new TipoSubInvestigacion(4, 'OCIO', investigacion); investigacion.addSubinvestigacion(subinvestigacion);
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

  getListaConseguidosInvestigacion( investigacion: TipoInvestigacion) {
    return investigacion.listaDeSubinvestigaciones.filter( function( subInvestigacion ) {
      let valor = false;
      const listaItems = subInvestigacion.listaDeItems;
        listaItems.forEach ( function ( item ) {
          if (item.getConseguido() === true ) { valor = true; }
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

    const precio = item.getPrecio();
    const cantidadObtenida = this.capital.getPalacio().gastaOro(precio);
    if (cantidadObtenida < precio ) {
      this.capital.getPalacio().entraOro(cantidadObtenida);
      this.setStatus (' Se aborta la investigación ' + item.getNombre() + ': Oro insuficiente');
      return false;
    }

    item.setInvestigada (true);
    this.disp.addTareaRepetitiva(this, 'compraInvestigacion', item.getTiempo(), Array < any > (idTipo, idSubtipo, idItem));
    this.setStatus (' Investigando ' + item.getNombre());
  }

  compraInvestigacion(v: Array < any >) {
    const idTipo = v[0]; const idSubtipo = v[1]; const idItem = v[2];
    const item = this.getItem (idTipo, idSubtipo, idItem);
    item.setconseguido();
    this.setStatus (' Se terminó de investigar ' + item.getNombre());
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
export { TipoInvestigacion };
export { TipoItemInvestigacion };

