import { Recurso } from './Recurso';
import { Punto } from './Punto';

class Productor {
  constructor (posicion: Punto, recurso: Recurso, cantidadInicial: number, cantidadMaxima: number, ratioProduccion: number) {
    if (cantidadInicial > cantidadMaxima) { cantidadInicial = cantidadMaxima; }
  }
}

export { Productor };
