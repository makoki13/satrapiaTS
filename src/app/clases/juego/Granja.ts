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
  public static costeConstruccion = Parametros.Granja_Construccion_Coste;
  public static tiempoContruccion = Parametros.Granja_Construccion_Tiempo;
  public static cantidadInicial = Parametros.Granja_Productor_CantidadInicial;
  public static cantidadMaxima = Parametros.Granja_Productor_CantidadMaxima;
  public static ratio = Parametros.Granja_Productor_Ratio;
  public static capacidadAlmacen = Parametros.Granja_Almacen_Capacidad;
  public static tamanyoCosecha = Parametros.Granja_Cosecha_Tamanyo;
  public static cosechaFrecuencia = Parametros.Granja_Cosecha_Frecuencia;
  public static maximoItems = Parametros.Granja_Num_Total;

  private granjeros: Extractor;
  private filon: Productor;
  private almacen: Almacen;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.GRANJA, capital.getPosicion(), Granja.costeConstruccion, Granja.tiempoContruccion);

    this.capital.addGranja(this);

    this.filon = new Productor ( null, COMIDA, Parametros.Granja_Productor_CantidadInicial,
      Parametros.Granja_Productor_CantidadMaxima, Parametros.Granja_Productor_Ratio);
    this.almacen = new Almacen ( 67, 'Silo de comida', COMIDA, this.capital.getPosicion(), Parametros.Granja_Almacen_Capacidad);
    this.granjeros = new Extractor (this.filon, this.almacen, Parametros.Granja_Cosecha_Tamanyo);

    this.disp.addTareaRepetitiva(this, 'extrae', Granja.cosechaFrecuencia);

    this.setStatus ('Sin envios actuales');
  }

  extrae() {
    const cantidad = this.granjeros.getCantidad();
    // console.log ('granja cantidad actual: ', cantidad);
    this.almacen.addCantidad (cantidad);

    /* Si el almacen alcanza el tope enviar un transporte de comida a palacio */
    // console.log ('granja cantidad actual bis: ', this.almacen.getCantidad(), this.almacen.getMaxCantidad());
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
    this.disp.addTareaRepetitiva(transporteDeComida, 'envia', Parametros.Transporte_Tiempo_Recalculo_Ruta);
  }

  public getComidaActual() { return this.almacen.getCantidad(); }
  public getMaxAlmacen() { return this.almacen.getMaxCantidad(); }

  public getStatus() { return this.status; }
  public setStatus( mensaje: string ) { super.setStatus(mensaje); }

  public estaActiva() { return (this.filon.getStock() > Parametros.Filon_Vacio); }
}

export { Granja };
