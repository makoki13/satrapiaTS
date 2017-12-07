import { Jugador } from './Jugador';
import { Almacen } from './Almacen';
import { Punto } from './Punto';
import { Productor } from './Productor';

class Imperio {
  constructor (private id: number, private nombre: string, private lider: Jugador, private tribu: boolean) {

  }
}

class Provincia extends Imperio {
  constructor (id: number, nombre: string, lider: Jugador, tribu: boolean, esSatrapia: boolean) {
    super (id, nombre, lider, tribu);
  }
}

class Localidad {
  private demografia: Productor;
  private poblacion: Almacen;

  constructor (private id: number, private nombre: string, private esCapital: boolean, private provincia: Provincia,
    private numeroDeHabitantes: number, private posicion: Punto) {

  }

  public getPosicion() { return this.posicion; }
}

export { Localidad };
