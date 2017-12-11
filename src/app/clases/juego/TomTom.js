"use strict";
exports.__esModule = true;
var Punto_1 = require("./Punto");
var TomTom = /** @class */ (function () {
    function TomTom() {
    }
    TomTom.calculaViaje = function (origen, destino) {
        var ruta = [];
        var x_actual = origen.getX();
        var y_actual = origen.getY();
        var x_destino = destino.getX();
        var y_destino = destino.getY();
        var seguirCalculando = true;
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
            var nuevoPunto = new Punto_1.Punto(x_actual, y_actual);
            ruta.push(nuevoPunto);
            if ((x_actual === x_destino) && (y_actual === y_destino)) {
                seguirCalculando = false;
            }
        }
        return ruta;
    };
    return TomTom;
}());
exports.TomTom = TomTom;
