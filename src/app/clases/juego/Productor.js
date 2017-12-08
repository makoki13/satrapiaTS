"use strict";
exports.__esModule = true;
var Productor = /** @class */ (function () {
    function Productor(posicion, recurso, cantidadInicial, cantidadMaxima, ratioProduccion) {
        this.posicion = posicion;
        this.recurso = recurso;
        this.cantidadInicial = cantidadInicial;
        this.cantidadMaxima = cantidadMaxima;
        this.ratioProduccion = ratioProduccion;
        if (cantidadInicial > cantidadMaxima) {
            cantidadInicial = cantidadMaxima;
        }
    }
    Productor.prototype.extrae = function (cantidad) {
        if (cantidad > this.cantidadInicial) {
            cantidad = this.cantidadInicial;
            this.cantidadInicial = 0;
        }
        else {
            this.cantidadInicial -= cantidad;
        }
        // console.log ( ' el productor de ' + this.recurso.getNombre() + ' tiene un stock de ' + this.cantidadInicial);
        return cantidad;
    };
    return Productor;
}());
exports.Productor = Productor;
