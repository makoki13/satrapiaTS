"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Imperio = /** @class */ (function () {
    function Imperio(id, nombre, lider, tribu) {
        this.id = id;
        this.nombre = nombre;
        this.lider = lider;
        this.tribu = tribu;
    }
    return Imperio;
}());
var Provincia = /** @class */ (function (_super) {
    __extends(Provincia, _super);
    function Provincia(id, nombre, lider, tribu, esSatrapia) {
        return _super.call(this, id, nombre, lider, tribu) || this;
    }
    return Provincia;
}(Imperio));
var Localidad = /** @class */ (function () {
    function Localidad(id, nombre, esCapital, provincia, numeroDeHabitantes, posicion) {
        this.id = id;
        this.nombre = nombre;
        this.esCapital = esCapital;
        this.provincia = provincia;
        this.numeroDeHabitantes = numeroDeHabitantes;
        this.posicion = posicion;
    }
    Localidad.prototype.getPosicion = function () { return this.posicion; };
    return Localidad;
}());
exports.Localidad = Localidad;
