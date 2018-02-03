import { Recurso } from './Recurso';
import { Punto } from './Punto';

class Almacen {
  private cantidad: number;

  constructor (private id: number, private nombre: string, private tipo: Recurso, private posicion: Punto, private maxCantidad: number) {
    this.cantidad = 0;
  }

  public addCantidad (cantidad: number) {
    console.log ('Recepcion de ' + cantidad + ' en ' + this.nombre);
    this.cantidad = this.cantidad + Number(cantidad).valueOf();
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

  public getTipoRecurso() { return this.tipo; }

  public getCantidad () { return this.cantidad; }

  public getPosicion() { return this.posicion; }

  public getMaxCantidad() { return this.maxCantidad; }
}

export { Almacen };
