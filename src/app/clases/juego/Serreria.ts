import { Edificio, TipoEdificio } from './Edificio';
import { Extractor } from './Extractor';
import { Productor } from './Productor';
import { Almacen } from './Almacen';
import { Capital } from './Capital';
import { Dispatcher } from './Dispatcher';
import { MADERA } from './Recurso';
import { Transporte } from './Transporte';
import {Parametros} from './Parametros';

class Serreria extends Edificio {
  public static costeConstruccion = Parametros.Serreria_Construccion_Coste;
  public static tiempoContruccion = Parametros.Serreria_Construccion_Tiempo;
  public static cantidadInicial = Parametros.Serreria_Productor_CantidadInicial;
  public static cantidadMaxima = Parametros.Serreria_Productor_CantidadMaxima;
  public static maximoItems = Parametros.Serreria_Num_Total;

  private leñadores: Extractor;
  private filon: Productor;
  private almacen: Almacen;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.SERRERIA, capital.getPosicion(), Serreria.costeConstruccion, Serreria.tiempoContruccion);

    this.capital.addSerreria(this);

    this.filon = new Productor ( null, MADERA, Serreria.cantidadInicial, Serreria.cantidadMaxima, Parametros.Serreria_Productor_Ratio);
    this.almacen = new Almacen ( 67, 'Silo de madera', MADERA, this.capital.getPosicion(), Parametros.Serreria_Almacen_Capacidad);
    const cantidadInicial = 1;
    this.leñadores = new Extractor (this.filon, this.almacen, Parametros.Serreria_Cosecha_Tamanyo);

    this.disp.addTareaRepetitiva(this, 'extrae', Parametros.Serreria_Cosecha_Tamanyo);

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
    this.disp.addTareaRepetitiva(transporteDeMadera, 'envia', Parametros.Transporte_Tiempo_Recalculo_Ruta);
  }

  public getMaderaActual() { return this.almacen.getCantidad(); }
  public getMaxAlmacen() { return this.almacen.getMaxCantidad(); }

  public getStatus() { return this.status; }
  public setStatus( mensaje: string ) { super.setStatus(mensaje); }

  public estaActiva() { return (this.filon.getStock() > Parametros.Filon_Vacio); }
}

export { Serreria };
