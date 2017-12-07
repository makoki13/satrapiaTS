import { UnidadMilitar } from './Recurso';
import { Cuartel } from './edificio';
import { Punto } from './Punto';

class Ejercito extends Cuartel {
  constructor (id: number, nombre: string, private posicion: Punto) {
    super (id, nombre);
  }
}
