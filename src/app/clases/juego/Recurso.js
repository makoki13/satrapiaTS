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
var Recurso = /** @class */ (function () {
    function Recurso(id, nombre, tipo) {
        this.tipo = tipo;
        this.nombre = nombre;
    }
    Recurso.prototype.getNombre = function () { return this.nombre; };
    return Recurso;
}());
exports.Recurso = Recurso;
var TipoRecurso;
(function (TipoRecurso) {
    TipoRecurso[TipoRecurso["NATURAL"] = 1] = "NATURAL";
    TipoRecurso[TipoRecurso["FABRICADO"] = 2] = "FABRICADO";
    TipoRecurso[TipoRecurso["MILITAR"] = 3] = "MILITAR";
})(TipoRecurso || (TipoRecurso = {}));
var ORO = new Recurso(1, 'ORO', 1);
exports.ORO = ORO;
var UnidadMilitar = /** @class */ (function (_super) {
    __extends(UnidadMilitar, _super);
    function UnidadMilitar(id, nombre, vidaInicial, dañoInflingido, fuerza, moral, maxUnidadesEnCuartel) {
        if (maxUnidadesEnCuartel === void 0) { maxUnidadesEnCuartel = 1; }
        var _this = _super.call(this, id, nombre, 3) || this;
        _this.vidaInicial = vidaInicial;
        _this.dañoInflingido = dañoInflingido;
        _this.fuerza = fuerza;
        _this.moral = moral;
        _this.dañoRecibido = 0;
        UnidadMilitar.unidadesEnCuartel = maxUnidadesEnCuartel;
        return _this;
    }
    return UnidadMilitar;
}(Recurso));
exports.UnidadMilitar = UnidadMilitar;
var CivilConHonda = /** @class */ (function (_super) {
    __extends(CivilConHonda, _super);
    function CivilConHonda(vidaInicial, dañoInflingido, fuerza, moral) {
        return _super.call(this, 1001, 'Civil con honda', vidaInicial, dañoInflingido, fuerza, moral, 10) || this;
    }
    CivilConHonda.maxUnidadesEnEntrenamiento = function () { return 10; };
    return CivilConHonda;
}(UnidadMilitar));
exports.CivilConHonda = CivilConHonda;
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(vidaInicial, dañoInflingido, fuerza, moral) {
        return _super.call(this, 1002, 'Arquero', vidaInicial, dañoInflingido, fuerza, moral, 10) || this;
    }
    Arquero.maxUnidadesEnEntrenamiento = function () { return 10; };
    return Arquero;
}(UnidadMilitar));
