import { TipoRecurso } from './Recurso';
import { Punto } from './Punto';

class Productor {
  constructor (posicion: Punto, recurso: TipoRecurso, cantidadInicial: number, cantidadMaxima: number, ratioProduccion: number) {
    if (cantidadInicial > cantidadMaxima) { cantidadInicial = cantidadMaxima; }
  }
}

export { Productor };
