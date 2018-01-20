import { Edificio, TipoEdificio } from './Edificio';
import { Extractor } from './Extractor';
import { Productor } from './Productor';
import { Almacen } from './Almacen';
import { Capital } from './Capital';
import { Dispatcher } from './Dispatcher';
import { MADERA } from './Recurso';
import { Transporte } from './Transporte';

class Serreria extends Edificio {
  static costeConstruccion = 500;
  static tiempoContruccion = 7;

  private leñadores: Extractor;
  private filon: Productor;
  private almacen: Almacen;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.SERRERIA, capital.getPosicion(), 500, 10);

    this.capital.addSerreria(this);

    this.filon = new Productor ( null, MADERA, 30, 30, 0);
    this.almacen = new Almacen ( 67, 'Silo de madera', MADERA, this.capital.getPosicion(), 5);
    const cantidadInicial = 1;
    this.leñadores = new Extractor (this.filon, this.almacen, cantidadInicial);

    this.disp.addTareaRepetitiva(this, 'extrae', 1);

    this.setStatus ('Sin envios actuales');
  }

  extrae() {
    const cantidad = this.leñadores.getCantidad();
    this.almacen.addCantidad (cantidad);

    /* Si el almacen alcanza el tope enviar un transporte de comida a palacio */
    if (this.almacen.getCantidad() >= this.almacen.getMaxCantidad()) {
      if (this.hayEnvioEnMarcha === false) {
        this.hayEnvioEnMarcha = true;
        this.enviaMaderaHaciaCiudad();
      }
    }
  }

  enviaMaderaHaciaCiudad() {
    const cantidad = this.almacen.restaCantidad(this.almacen.getCantidad());
    const transporteDeMadera = new Transporte (this.almacen, this.capital.getSilos().getAlmacenMadera(), MADERA, cantidad, this );

    transporteDeMadera.calculaViaje();
    this.setStatus ('Enviando madera...');
    this.disp.addTareaRepetitiva(transporteDeMadera, 'envia', 1);
  }

  public getMaderaActual() { return this.almacen.getCantidad(); }
  public getMaxAlmacen() { return this.almacen.getMaxCantidad(); }

  public getStatus() { return this.status; }
  public setStatus( mensaje: string ) { super.setStatus(mensaje); }

  public estaActiva() { return (this.filon.getStock() > 0); }
}

export { Serreria };
