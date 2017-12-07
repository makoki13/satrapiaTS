import { Punto } from './Punto';

class Mapa {
  public puntos: Array < Punto >;

  public addPunto (punto: Punto) { this.puntos.push( punto ); }
}
