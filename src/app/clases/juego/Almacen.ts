import { Recurso } from './Recurso';
import { Punto } from './Punto';

class Almacen {
  private cantidad: number;

  constructor (id: number, nombre: string, tipo: Array<Recurso>, private posicion: Punto, private maxCantidad: number) {
    this.cantidad = 0;
  }

  public addCantidad (cantidad: number) {
    // console.log (this.cantidad) ;
    this.cantidad = this.cantidad + Number(cantidad).valueOf();
    // console.log( ' almacen del palacio ti ' + this.cantidad);
  }

  public restaCantidad ( cantidad: number) {
    if (cantidad > this.cantidad) {
      cantidad = this.cantidad;
      this.cantidad = 0;
    } else {
      this.cantidad -= cantidad;
    }
    return cantidad;
  }

  public getCantidad () { return this.cantidad; }

  public getPosicion() { return this.posicion; }

  public getMaxCantidad() { return this.maxCantidad; }
}

export { Almacen };
