import { UnidadMilitar } from './Recurso';
import { Cuartel, Palacio } from './edificio';
import { Punto } from './Punto';

import { Dispatcher } from './Dispatcher';

class Ejercito extends Cuartel {
  private posicionActual: Punto;
  constructor (id: number, nombre: string, posicion: Punto, disp: Dispatcher, palacio: Palacio) {
    super (id, nombre, disp , posicion, palacio);
    this.posicionActual = posicion;
  }
}
