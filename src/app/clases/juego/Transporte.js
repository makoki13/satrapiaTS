"use strict";
exports.__esModule = true;
var Punto_1 = require("./Punto");
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
        console.log('Pos: ' + this.posicionActual.getX() + ',' + this.posicionActual.getY());
        if ((this.ruta.length === 0) && (Punto_1.Punto.sonIguales(this.posicionActual, this.posicionFinal))) {
            // if ( (this.ruta.length === 0) ) {
            console.log('descarga en palacio');
            this.almacenDestino.addCantidad(this.cantidad);
            return -1; // suicidio
        }
    };
    Transporte.prototype.modificaPosicionActual = function () {
        this.posicionActual = this.ruta.pop();
    };
    return Transporte;
}());
exports.Transporte = Transporte;
