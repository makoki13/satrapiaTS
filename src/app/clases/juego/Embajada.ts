import { Edificio, TipoEdificio } from './Edificio';
import { Capital } from './Capital';
import { Dispatcher } from './Dispatcher';
import { Imperio } from './Imperio';

class Embajada extends Edificio {
  public imperios: Array < Imperio >;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.EMBAJADA, capital.getPosicion(), 0, 0);
    this.capital.setEmbajada(this);

    this.imperios = new Array < Imperio > ();
  }

  public addImperio ( nuevoImperio: Imperio) {
      this.imperios.push ( nuevoImperio );
  }

  public getLista() {
    return this.imperios;
  }
}

export { Embajada };
