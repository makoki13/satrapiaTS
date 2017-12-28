import { UnidadMilitar } from './Recurso';
import { Punto } from './Punto';
import { Localidad } from './Imperio';

import { Dispatcher } from './Dispatcher';

class Ejercito {
  constructor (id: number, nombre: string, private posicion: Punto, ciudad: Localidad, disp: Dispatcher) {

  }

  public getPosicion() { return this.posicion; }
}
