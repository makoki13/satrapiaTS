import { Punto } from './Punto';

export class TomTom {
    public static calculaViaje (origen: Punto, destino: Punto) {
        const ruta: Array < Punto > = [];

        const nuevoPunto = new Punto (5, 5);
        ruta.push ( nuevoPunto );

        return ruta;
    }
}
