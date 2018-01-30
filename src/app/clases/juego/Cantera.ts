import { Edificio, TipoEdificio } from './Edificio';
import { Extractor } from './Extractor';
import { Productor } from './Productor';
import { Almacen } from './Almacen';
import { Capital } from './Capital';
import { Dispatcher } from './Dispatcher';
import { PIEDRA } from './Recurso';
import { Transporte } from './Transporte';
import {Parametros} from './Parametros';

export class Cantera extends Edificio {
  public static costeConstruccion = Parametros.Cantera_Construccion_Coste;
  public static tiempoContruccion = Parametros.Cantera_Construccion_Tiempo;
  public static cantidadInicial = Parametros.Cantera_Productor_CantidadInicial;
  public static cantidadMaxima = Parametros.Cantera_Productor_CantidadMaxima;

  private canteros: Extractor;
  private filon: Productor;
  private almacen: Almacen;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.CANTERA_DE_PIEDRA, capital.getPosicion(), Cantera.costeConstruccion, Cantera.tiempoContruccion);

    this.capital.addCantera(this);

    this.filon = new Productor ( null, PIEDRA, Cantera.cantidadInicial, Cantera.cantidadMaxima, Parametros.Cantera_Productor_Ratio);
    this.almacen = new Almacen ( 68, 'Cantera de piedra', PIEDRA, this.capital.getPosicion(), Parametros.Cantera_Almacen_Capacidad);
    const cantidadInicial = 1;
    this.canteros = new Extractor (this.filon, this.almacen, Parametros.Cantera_Cosecha_Tamanyo);

    this.disp.addTareaRepetitiva(this, 'extrae', Parametros.Cantera_Cosecha_Tamanyo);

    this.setStatus ('Sin envios actuales');
  }

  extrae() {
    const cantidad = this.canteros.getCantidad();
    this.almacen.addCantidad (cantidad);

    /* Si el almacen alcanza el tope enviar un transporte de piedra a palacio */
    if (this.almacen.getCantidad() >= this.almacen.getMaxCantidad()) {
      if (this.hayEnvioEnMarcha === false) {
        this.hayEnvioEnMarcha = true;
        this.enviaPiedraHaciaCiudad();
      }
    }
  }

  enviaPiedraHaciaCiudad() {
    const cantidad = this.almacen.restaCantidad(this.almacen.getCantidad());
    const transporteDePiedra = new Transporte (this.almacen, this.capital.getSilos().getAlmacenPiedra(), PIEDRA, cantidad, this );

    transporteDePiedra.calculaViaje();
    this.setStatus ('Enviando piedra...');
    this.disp.addTareaRepetitiva(transporteDePiedra, 'envia', Parametros.Transporte_Tiempo_Recalculo_Ruta);
  }

  public getPiedraActual() { return this.almacen.getCantidad(); }
  public getMaxAlmacen() { return this.almacen.getMaxCantidad(); }

  public getStatus() { return this.status; }
  public setStatus( mensaje: string ) { super.setStatus(mensaje); }

  public estaActiva() { return (this.filon.getStock() > Parametros.Filon_Vacio); }
}
