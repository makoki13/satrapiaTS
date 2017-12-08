"use strict";
exports.__esModule = true;
var Extractor = /** @class */ (function () {
    function Extractor(productor, almacen, cantidad) {
        this.productor = productor;
        this.almacen = almacen;
        this.cantidad = cantidad;
    }
    Extractor.prototype.getCantidad = function () {
        var cantidadExtraida = this.productor.extrae(this.cantidad);
        return cantidadExtraida;
    };
    return Extractor;
}());
exports.Extractor = Extractor;
