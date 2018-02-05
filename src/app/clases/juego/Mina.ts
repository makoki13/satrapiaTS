import { TipoInvestigacion } from './CentroDeInvestigacion';
import { TipoEdificio, Edificio } from './Edificio';
import { Extractor } from './Extractor';
import { Productor } from './Productor';
import { Almacen } from './Almacen';
import { Capital } from './Capital';
import { Dispatcher } from './Dispatcher';
import { Recurso, ORO, HIERRO } from './Recurso';
import { Transporte } from './Transporte';

class Mina extends Edificio {
  static costeConstruccion = 250;
  static tiempoContruccion = 5;

  protected mineros: Extractor;
  protected filon: Productor;
  protected almacen: Almacen;

  constructor (id: number, nombre: string, protected capital: Capital, protected disp: Dispatcher, tipoEdificio: TipoEdificio,
    private recurso: Recurso, private almacenDestino: Almacen) {
    super (id, nombre, tipoEdificio, capital.getPosicion(), 100, 10);

    this.filon = new Productor ( null, recurso, 20000, 20, 1);
    this.almacen = new Almacen ( 67, 'Filón de ' + recurso.getNombre() , recurso, this.capital.getPosicion(), 100);
    const cantidadInicial = 20;
    this.mineros = new Extractor (this.filon, this.almacen, cantidadInicial);
    this.disp.addTareaRepetitiva(this, 'extrae', 1, almacenDestino);
    this.setStatus ('Sin envios actuales');
  }

  extrae(almacenDestino) {
    const cantidad = this.mineros.getCantidad();
    this.almacen.addCantidad (cantidad);
    // console.log ( 'Almacen de ' + super.getNombre() + ' tiene ' + this.getCantidadAlmacenActual() +
    // ' Capacidad máx: ' + this.almacen.getMaxCantidad() );
    // console.log ( 'GetCantidad = ' , cantidad);
    /* Si el almacen alcanza el tope enviar un transporte de recursos a palacio */
    if (this.almacen.getCantidad() >= this.almacen.getMaxCantidad()) {
      if (this.hayEnvioEnMarcha === false) {
        this.hayEnvioEnMarcha = true;
        this.enviaRecursosHaciaPalacio(almacenDestino);
      }
    }
  }

  enviaRecursosHaciaPalacio(almacenDestino) {
    const cantidad = this.almacen.restaCantidad(this.almacen.getCantidad());
    const transporteDeRecurso = new Transporte (this.almacen, almacenDestino, this.recurso, cantidad, this );

    transporteDeRecurso.calculaViaje();
    this.setStatus ('Enviando ' + this.recurso.getNombre() + '...');
    this.disp.addTareaRepetitiva(transporteDeRecurso, 'envia', 1);
  }

  public getCantidadAlmacenActual() { return this.almacen.getCantidad(); }
  public getMaxAlmacen() { return this.almacen.getMaxCantidad(); }

  public getStatus() { return this.status; }
  public setStatus( mensaje: string ) { super.setStatus(mensaje); }

  public estaActiva() { return (this.filon.getStock() > 0); }
}


/******************************************************************************************/
/** CLASE MINA DE ORO */
export class MinaDeOro extends Mina {
  static costeConstruccion = 250;
  static tiempoContruccion = 5;

  constructor (id: number, nombre: string, capital: Capital, disp: Dispatcher) {
    super (id, nombre, capital, disp, TipoEdificio.MINA_DE_ORO, ORO, capital.getPalacio().getAlmacen());
    this.capital.addMinaDeOro(this);
  }

  public getOroActual() { return this.almacen.getCantidad(); }
  public getMaxAlmacen() { return this.almacen.getMaxCantidad(); }

  // public getStatus() { return this.status; }
  // public setStatus( mensaje: string ) { this.setStatus(mensaje); }

  public estaActiva() { return (this.filon.getStock() > 0); }
}

/******************************************************************************************/
/** CLASE MINA DE HIERRO */
export class MinaDeHierro extends Mina {
  static costeConstruccion = 350;
  static tiempoContruccion = 5;

  constructor (id: number, nombre: string, capital: Capital, disp: Dispatcher) {
    super (id, nombre, capital, disp, TipoEdificio.MINA_DE_HIERRO, HIERRO, capital.getSilos().getAlmacenHierro());
    this.capital.addMinaDeHierro(this);
  }

  public getHierroActual() { return this.almacen.getCantidad(); }
  public getMaxAlmacen() { return this.almacen.getMaxCantidad(); }

  // public getStatus() { return this.status; }
  // public setStatus( mensaje: string ) { this.setStatus(mensaje); }

  public estaActiva() { return (this.filon.getStock() > 0); }
}
