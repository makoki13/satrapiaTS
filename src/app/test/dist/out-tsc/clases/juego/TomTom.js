import { Punto } from './Punto';
export class TomTom {
    static calculaViaje(origen, destino) {
        let ruta = [];
        let x_actual = origen.getX();
        let y_actual = origen.getY();
        const x_destino = destino.getX();
        const y_destino = destino.getY();
        let seguirCalculando = true;
        while (seguirCalculando) {
            if (x_actual > x_destino) {
                x_actual--;
            }
            else {
                if (x_actual < x_destino) {
                    x_actual++;
                }
            }
            if (y_actual > y_destino) {
                y_actual--;
            }
            else {
                if (y_actual < y_destino) {
                    y_actual++;
                }
            }
            const nuevoPunto = new Punto(x_actual, y_actual);
            ruta.push(nuevoPunto);
            if ((x_actual === x_destino) && (y_actual === y_destino)) {
                seguirCalculando = false;
            }
        }
        ruta = ruta.reverse();
        return ruta;
    }
}
//# sourceMappingURL=TomTom.js.map