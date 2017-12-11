"use strict";
exports.__esModule = true;
var Almacen = /** @class */ (function () {
    function Almacen(id, nombre, tipo, posicion, maxCantidad) {
        this.posicion = posicion;
        this.maxCantidad = maxCantidad;
        this.cantidad = 0;
    }
    Almacen.prototype.addCantidad = function (cantidad) {
        // console.log (this.cantidad) ;
        this.cantidad = this.cantidad + Number(cantidad).valueOf();
        // console.log( ' almacen del palacio ti ' + this.cantidad);
    };
    Almacen.prototype.restaCantidad = function (cantidad) {
        if (cantidad > this.cantidad) {
            cantidad = this.cantidad;
            this.cantidad = 0;
        }
        else {
            this.cantidad -= cantidad;
        }
        return cantidad;
    };
    Almacen.prototype.getCantidad = function () { return this.cantidad; };
    Almacen.prototype.getPosicion = function () { return this.posicion; };
    Almacen.prototype.getMaxCantidad = function () { return this.maxCantidad; };
    return Almacen;
}());
exports.Almacen = Almacen;
