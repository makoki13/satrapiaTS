"use strict";
exports.__esModule = true;
var Almacen = /** @class */ (function () {
    function Almacen(id, nombre, tipo, posicion) {
        this.cantidad = 0;
    }
    Almacen.prototype.addCantidad = function (cantidad) {
        // console.log (this.cantidad) ;
        this.cantidad = this.cantidad + Number(cantidad).valueOf();
        // console.log( ' almacen del palacio ti ' + this.cantidad);
    };
    Almacen.prototype.getCantidad = function () { return this.cantidad; };
    return Almacen;
}());
exports.Almacen = Almacen;
