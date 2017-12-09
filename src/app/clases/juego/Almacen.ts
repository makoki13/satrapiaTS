import { Recurso } from './Recurso';
import { Punto } from './Punto';

class Almacen {
  private cantidad: number;

  constructor (id: number, nombre: string, tipo: Array<Recurso>, private posicion: Punto) {
    this.cantidad = 0;
  }

  public addCantidad (cantidad: number) {
    // console.log (this.cantidad) ;
    this.cantidad = this.cantidad + Number(cantidad).valueOf();
    // console.log( ' almacen del palacio ti ' + this.cantidad);
  }

  public getCantidad () { return this.cantidad; }

  public getPosicion() { return this.posicion; }
}

export { Almacen };
