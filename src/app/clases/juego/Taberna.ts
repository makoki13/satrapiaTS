import { Edificio, TipoEdificio } from './Edificio';
import { Capital } from './Capital';
import { Dispatcher } from './Dispatcher';
import { Imperio } from './Imperio';
import { Espia } from './Espia';

class Taberna extends Edificio {
  public espias: Array < Espia >;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.TABERNA, capital.getPosicion(), 0, 0);
    this.capital.setTaberna(this);

    this.espias = new Array < Espia > ();
  }

  public addImperio ( nuevoImperio: Imperio) {
      this.espias.push ( nuevoImperio );
  }

  public getLista() {
    return this.espias;
  }
}

export { Taberna };
