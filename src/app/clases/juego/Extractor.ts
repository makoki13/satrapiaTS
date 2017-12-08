import { Productor } from './Productor';
import { Almacen } from './Almacen';

class Extractor {
  constructor (private productor: Productor, private almacen: Almacen, private cantidad: number) {

  }

  getCantidad( ) {
    const cantidadExtraida = this.productor.extrae ( this.cantidad );
    return cantidadExtraida;
  }
}

export { Extractor };
