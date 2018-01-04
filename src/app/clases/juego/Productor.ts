import { Recurso } from './Recurso';
import { Punto } from './Punto';

class Productor {
  constructor (private posicion: Punto, private recurso: Recurso, private cantidadInicial: number,
    private cantidadMaxima: number, private ratioProduccion: number) {
    if (cantidadInicial > cantidadMaxima) { cantidadInicial = cantidadMaxima; }
  }

  extrae ( cantidad: number )  {
    if (cantidad > this.cantidadInicial ) {
      cantidad = this.cantidadInicial;
      this.cantidadInicial = 0;
    } else {
      this.cantidadInicial -= cantidad;
    }
    // console.log ( ' el productor de ' + this.recurso.getNombre() + ' tiene un stock de ' + this.cantidadInicial);
    return cantidad;
  }

  public getStock() { return this.cantidadInicial; }
}

export { Productor };
