import { Productor } from './Productor';
import { Almacen } from './Almacen';

class Extractor {
  constructor (private productor: Productor, private almacen: Almacen, private cantidad: number) {

  }

  getCantidad( ) {
    const cantidadExtraida = this.productor.extrae ( this.cantidad );
    // console.log ('Se extrae de ' + this.almacen.getTipoRecurso().getNombre() + ' ' + cantidadExtraida + ' de recurso ');
    return cantidadExtraida;
  }
}

export { Extractor };
