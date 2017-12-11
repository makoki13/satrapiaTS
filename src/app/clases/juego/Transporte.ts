import { Almacen } from './Almacen';
import { Recurso } from './Recurso';
import { Punto } from './Punto';
import { TomTom } from './TomTom';

class Transporte {
    private posicionActual: Punto;
    private posicionFinal: Punto;
    private ruta: Array < Punto >;

    constructor (almacenOrigen: Almacen, private almacenDestino: Almacen, recurso: Recurso, private cantidad: number) {
        this.posicionActual = almacenOrigen.getPosicion();
        this.posicionFinal = almacenDestino.getPosicion();
    }

    calculaViaje() {
        this.ruta = TomTom.calculaViaje (this.posicionActual, this.posicionFinal );
    }

    envia() {
        this.modificaPosicionActual();
        console.log ('Pos: ' + this.posicionActual.getX() + ',' + this.posicionActual.getY() );
        if ( (this.ruta.length === 0) && (Punto.sonIguales(this.posicionActual, this.posicionFinal)) ) {
          console.log ('descarga en palacio');
          this.almacenDestino.addCantidad(this.cantidad);
          return -1; // suicidio
        }
    }

    private modificaPosicionActual() {
        this.posicionActual = this.ruta.pop();
    }
}

export { Transporte };
