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
var Extractor_1 = require("./Extractor");
var Productor_1 = require("./Productor");
var Almacen_1 = require("./Almacen");
var Recurso_1 = require("./Recurso");
var Transporte_1 = require("./Transporte");
var TipoEdificio;
(function (TipoEdificio) {
    TipoEdificio[TipoEdificio["PALACIO"] = 1] = "PALACIO";
    TipoEdificio[TipoEdificio["SILOS"] = 2] = "SILOS";
    TipoEdificio[TipoEdificio["CUARTEL"] = 3] = "CUARTEL";
    TipoEdificio[TipoEdificio["MERCADO"] = 4] = "MERCADO";
    TipoEdificio[TipoEdificio["EMBAJADA"] = 5] = "EMBAJADA";
    TipoEdificio[TipoEdificio["TABERNA"] = 6] = "TABERNA";
    TipoEdificio[TipoEdificio["CENTRO_DE_INVESTIGACION"] = 7] = "CENTRO_DE_INVESTIGACION";
    TipoEdificio[TipoEdificio["GRANJA"] = 101] = "GRANJA";
    TipoEdificio[TipoEdificio["MINA_DE_ORO"] = 102] = "MINA_DE_ORO";
    TipoEdificio[TipoEdificio["EJERCITO"] = 1000] = "EJERCITO";
})(TipoEdificio || (TipoEdificio = {}));
exports.TipoEdificio = TipoEdificio;
var Edificio = /** @class */ (function () {
    function Edificio(id, nombre, tipo, posicion, palacio) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.posicion = posicion;
        this.palacio = palacio;
    }
    Edificio.prototype.getPosicion = function () { return this.posicion; };
    Edificio.prototype.getAlmacenPalacio = function () { return this.palacio.getAlmacen(); };
    return Edificio;
}());
exports.Edificio = Edificio;
var Palacio = /** @class */ (function (_super) {
    __extends(Palacio, _super);
    function Palacio(id, nombre, disp, posicion) {
        var _this = _super.call(this, id, nombre, TipoEdificio.PALACIO, posicion, null) || this;
        _this.disp = disp;
        _this.impuestos = new Productor_1.Productor(null, Recurso_1.ORO, 10, 10, 0);
        _this.almacen = new Almacen_1.Almacen(66, 'Deposito de oro', [Recurso_1.ORO], posicion, Number.MAX_VALUE.valueOf());
        var cantidadInicial = 2;
        _this.recaudador = new Extractor_1.Extractor(_this.impuestos, _this.almacen, cantidadInicial);
        _this.disp.addTareaRepetitiva(_this, 'recaudaImpuestos', 15);
        return _this;
    }
    Palacio.prototype.recaudaImpuestos = function () {
        var cantidad = this.recaudador.getCantidad();
        this.almacen.addCantidad(cantidad);
        // console.log ( 'Almacen del palacio tiene ' + this.getOroActual() );
    };
    Palacio.prototype.getOroActual = function () { return this.almacen.getCantidad(); };
    Palacio.prototype.getAlmacen = function () { return this.almacen; };
    return Palacio;
}(Edificio));
exports.Palacio = Palacio;
var Silos = /** @class */ (function (_super) {
    __extends(Silos, _super);
    function Silos(id, nombre, disp, posicion, palacio) {
        var _this = _super.call(this, id, nombre, TipoEdificio.SILOS, posicion, palacio) || this;
        _this.disp = disp;
        return _this;
    }
    Silos.prototype.addAlmacen = function (nuevoAlmacen) {
        this.almacenes.push(nuevoAlmacen);
    };
    return Silos;
}(Edificio));
var Cuartel = /** @class */ (function (_super) {
    __extends(Cuartel, _super);
    function Cuartel(id, nombre, disp, posicion, palacio) {
        var _this = _super.call(this, id, nombre, TipoEdificio.CUARTEL, posicion, palacio) || this;
        _this.disp = disp;
        return _this;
    }
    return Cuartel;
}(Edificio));
exports.Cuartel = Cuartel;
var MinaDeOro = /** @class */ (function (_super) {
    __extends(MinaDeOro, _super);
    function MinaDeOro(id, nombre, disp, posicion, palacio) {
        var _this = _super.call(this, id, nombre, TipoEdificio.MINA_DE_ORO, posicion, palacio) || this;
        _this.disp = disp;
        _this.hayEnvioEnMarcha = false;
        _this.filon = new Productor_1.Productor(null, Recurso_1.ORO, 30, 30, 0);
        _this.almacen = new Almacen_1.Almacen(67, 'Filón de oro', [Recurso_1.ORO], posicion, 5);
        var cantidadInicial = 1;
        _this.mineros = new Extractor_1.Extractor(_this.filon, _this.almacen, cantidadInicial);
        _this.disp.addTareaRepetitiva(_this, 'extrae', 1);
        return _this;
    }
    MinaDeOro.prototype.extrae = function () {
        var cantidad = this.mineros.getCantidad();
        this.almacen.addCantidad(cantidad);
        // console.log ( 'Almacen de la mina de oro tiene ' + this.getOroActual() + ' Capacidad máx: ' + this.almacen.getMaxCantidad() );
        /* Si el almacen alcanza el tope enviar un transporte de oro a palacio */
        if (this.almacen.getCantidad() >= this.almacen.getMaxCantidad()) {
            if (this.hayEnvioEnMarcha === false) {
                this.hayEnvioEnMarcha = true;
                this.enviaOroHaciaPalacio();
            }
        }
    };
    MinaDeOro.prototype.enviaOroHaciaPalacio = function () {
        var cantidad = this.almacen.restaCantidad(this.almacen.getCantidad());
        var transporteDeOro = new Transporte_1.Transporte(this.almacen, _super.prototype.getAlmacenPalacio.call(this), Recurso_1.ORO, cantidad);
        transporteDeOro.calculaViaje();
        this.disp.addTareaRepetitiva(transporteDeOro, 'envia', 1);
    };
    MinaDeOro.prototype.getOroActual = function () { return this.almacen.getCantidad(); };
    return MinaDeOro;
}(Edificio));
exports.MinaDeOro = MinaDeOro;
