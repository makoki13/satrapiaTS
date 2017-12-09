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
        if ( (this.ruta.length === 1) && (this.posicionActual === this.posicionFinal) ) {
            this.almacenDestino.addCantidad(this.cantidad);
            this.muere();
        }
    }

    private modificaPosicionActual() {
        this.posicionActual = this.ruta.pop();
    }

    private muere() {

    }
}
