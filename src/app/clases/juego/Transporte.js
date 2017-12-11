"use strict";
exports.__esModule = true;
var TomTom_1 = require("./TomTom");
var Transporte = /** @class */ (function () {
    function Transporte(almacenOrigen, almacenDestino, recurso, cantidad) {
        this.almacenDestino = almacenDestino;
        this.cantidad = cantidad;
        this.posicionActual = almacenOrigen.getPosicion();
        this.posicionFinal = almacenDestino.getPosicion();
    }
    Transporte.prototype.calculaViaje = function () {
        this.ruta = TomTom_1.TomTom.calculaViaje(this.posicionActual, this.posicionFinal);
    };
    Transporte.prototype.envia = function () {
        this.modificaPosicionActual();
        if ((this.ruta.length === 0) && (this.posicionActual === this.posicionFinal)) {
            this.almacenDestino.addCantidad(this.cantidad);
            this.muere();
        }
    };
    Transporte.prototype.modificaPosicionActual = function () {
        this.posicionActual = this.ruta.pop();
    };
    Transporte.prototype.muere = function () {
    };
    return Transporte;
}());
exports.Transporte = Transporte;
