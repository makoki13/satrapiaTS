import { Edificio, TipoEdificio } from './Edificio';
import { Almacen } from './Almacen';
import { Capital } from './Capital';
import { Dispatcher } from './Dispatcher';

class Mercado extends Edificio {
  public almacenes: Array < Almacen >;

  constructor (id: number, nombre: string, private capital: Capital, private disp: Dispatcher) {
    super (id, nombre, TipoEdificio.MERCADO, capital.getPosicion(), 0, 0);
    this.capital.setMercado(this);

    this.almacenes = new Array < Almacen > ();
  }

  public addAlmacen ( nuevoAlmacen: Almacen) {
      this.almacenes.push ( nuevoAlmacen );
  }

  public getLista() {
    return this.almacenes;
  }
}

export { Mercado };
