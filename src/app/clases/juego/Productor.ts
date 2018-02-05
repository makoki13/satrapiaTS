import { Recurso, PIEDRA } from './Recurso';
import { Punto } from './Punto';

class Productor {
  constructor (private posicion: Punto, private recurso: Recurso, private cantidadInicial: number,
    private cantidadMaxima: number, private ratioProduccion: number) {
    if (cantidadInicial > cantidadMaxima) { cantidadInicial = cantidadMaxima; }
  }

  extrae ( cantidad: number )  {
    // Los productores con cantidadMaxima = 0 son inagotables.

    cantidad *= this.ratioProduccion; // Para penalizaciones y bonus

    if (this.cantidadMaxima === 0) { return cantidad; }
    if (cantidad > this.cantidadInicial ) {
      // if (this.recurso === PIEDRA ) { console.log ('A: Cantidad 1: ' + cantidad + ' Cantidad maxima: ' + this.cantidadInicial); }
      cantidad = this.cantidadInicial;
      this.cantidadInicial = 0;
    } else {
      // if (this.recurso === PIEDRA ) { console.log ('A: Cantidad B: ' + cantidad + ' Cantidad maxima: ' + this.cantidadInicial); }
      this.cantidadInicial -= cantidad;
    }
    // console.log ( ' el productor de ' + this.recurso.getNombre() + ' tiene un stock de ' + this.cantidadInicial);
    return cantidad;
  }

  public getStock() { return this.cantidadInicial; }
}

export { Productor };
