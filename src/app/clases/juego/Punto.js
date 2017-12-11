"use strict";
exports.__esModule = true;
var Punto = /** @class */ (function () {
    function Punto(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Punto.prototype.setAltura = function (z) { this.z = z; };
    Punto.prototype.getX = function () { return this.x; };
    Punto.prototype.getY = function () { return this.y; };
    return Punto;
}());
exports.Punto = Punto;
var TipoTerreno;
(function (TipoTerreno) {
    TipoTerreno[TipoTerreno["Sin_Definir"] = 0] = "Sin_Definir";
    TipoTerreno[TipoTerreno["Prado"] = 1] = "Prado";
    TipoTerreno[TipoTerreno["Bosque"] = 2] = "Bosque";
    TipoTerreno[TipoTerreno["Mar"] = 3] = "Mar";
    TipoTerreno[TipoTerreno["Agua_Poco_Profunda"] = 4] = "Agua_Poco_Profunda";
})(TipoTerreno || (TipoTerreno = {}));
exports.TipoTerreno = TipoTerreno;
