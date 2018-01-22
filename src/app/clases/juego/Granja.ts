import { Edificio, TipoEdificio } from './Edificio';
import { Extractor } from './Extractor';
import { Productor } from './Productor';
import { Almacen } from './Almacen';
import { Capital } from './Capital';
import { Dispatcher } from './Dispatcher';
import { COMIDA } from './Recurso';
import { Transporte } from './Transporte';
import {Parametros} from './Parametros';

class Granja extends Edificio {
  public static costeConstruccion = Parametros.Granja_costeContruccionGranja;
  static tiempoContruccion = Parametros.Granja_tiempoContruccion;

  private granjeros: Extractor;
  private filon: Productor;
  private almacen: Almacen;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.GRANJA, capital.getPosicion(), Granja.costeConstruccion, Granja.tiempoContruccion);

    this.capital.addGranja(this);

    this.filon = new Productor ( null, COMIDA, 30, 30, 0);
    this.almacen = new Almacen ( 67, 'Silo de comida', COMIDA, this.capital.getPosicion(), 5);
    const cantidadInicial = 1;
    this.granjeros = new Extractor (this.filon, this.almacen, cantidadInicial);

    this.disp.addTareaRepetitiva(this, 'extrae', 1);

    this.setStatus ('Sin envios actuales');
  }

  extrae() {
    const cantidad = this.granjeros.getCantidad();
    this.almacen.addCantidad (cantidad);

    /* Si el almacen alcanza el tope enviar un transporte de comida a palacio */
    if (this.almacen.getCantidad() >= this.almacen.getMaxCantidad()) {
      if (this.hayEnvioEnMarcha === false) {
        this.hayEnvioEnMarcha = true;
        this.enviaComidaHaciaCiudad();
      }
    }
  }

  enviaComidaHaciaCiudad() {
    const cantidad = this.almacen.restaCantidad(this.almacen.getCantidad());
    const transporteDeComida = new Transporte (this.almacen, this.capital.getSilos().getAlmacenComida(), COMIDA, cantidad, this );

    transporteDeComida.calculaViaje();
    this.setStatus ('Enviando comida...');
    this.disp.addTareaRepetitiva(transporteDeComida, 'envia', 1);
  }

  public getComidaActual() { return this.almacen.getCantidad(); }
  public getMaxAlmacen() { return this.almacen.getMaxCantidad(); }

  public getStatus() { return this.status; }
  public setStatus( mensaje: string ) { super.setStatus(mensaje); }

  public estaActiva() { return (this.filon.getStock() > 0); }
}

export { Granja };
