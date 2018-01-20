import { Capital } from './Capital';
import { Edificio } from './Edificio';
import { TipoEdificio } from './Edificio';
import { Extractor } from './Extractor';
import { Productor } from './Productor';
import { Almacen } from './Almacen';
import { Dispatcher } from './Dispatcher';
import { Punto } from './Punto';
import { ORO } from './Recurso';
import { POBLACION } from './Recurso';

class Palacio extends Edificio {
  private recaudador: Extractor;
  private crecimientoDemografico: Extractor;

  private impuestos: Productor;
  private alojamientos: Productor;

  protected almacen: Almacen;
  protected poblacion: Almacen;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.PALACIO, capital.getPosicion(), 0, 0);

    this.capital.setPalacio(this);

    let cantidadInicial = 2;
    this.impuestos = new Productor ( null, ORO, 10, 10, 0);
    this.almacen = new Almacen ( 66, 'Deposito de oro', ORO, capital.getPosicion(), Number.MAX_VALUE.valueOf());
    this.almacen.addCantidad(2000);
    this.recaudador = new Extractor (this.impuestos, this.almacen, cantidadInicial);
    this.disp.addTareaRepetitiva(this, 'recaudaImpuestos', 1);

    cantidadInicial = 50; const cantidadMaxima = 1000;
    this.alojamientos = new Productor ( null, POBLACION, cantidadInicial, cantidadMaxima, 0);
    this.poblacion = new Almacen ( 67, 'Población', POBLACION, capital.getPosicion(), cantidadMaxima);
    this.crecimientoDemografico = new Extractor (this.alojamientos, this.poblacion, cantidadInicial);
    this.disp.addTareaRepetitiva(this, 'realizaCenso', 1);
  }

  // public setPalacio() { super.setPalacio(this); }

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

  public gastaOro(cantidad: number) {
    const cantidadActual = this.almacen.getCantidad();
    if ( cantidadActual < cantidad ) {cantidad = cantidadActual; }
    this.almacen.restaCantidad(cantidad);
    return cantidad;
  }

  public entraOro(cantidad: number) {
    this.almacen.addCantidad (cantidad);
  }
}

export { Palacio };
