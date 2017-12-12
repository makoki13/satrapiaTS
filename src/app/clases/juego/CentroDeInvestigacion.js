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
var Edificio_1 = require("./Edificio");
var Edificio_2 = require("./Edificio");
var TipoInvestigacion = /** @class */ (function () {
    function TipoInvestigacion(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.listaDeSubinvestigaciones = new Array();
    }
    TipoInvestigacion.prototype.addSubinvestigacion = function (subinvestigacion) {
        this.listaDeSubinvestigaciones.push(subinvestigacion);
    };
    TipoInvestigacion.prototype.getID = function () { return this.id; };
    TipoInvestigacion.prototype.getNombre = function () { return this.nombre; };
    return TipoInvestigacion;
}());
var TipoSubInvestigacion = /** @class */ (function () {
    function TipoSubInvestigacion(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.listaDeItems = new Array();
    }
    TipoSubInvestigacion.prototype.addIteminvestigacion = function (item) {
        this.listaDeItems.push(item);
    };
    TipoSubInvestigacion.prototype.getID = function () { return this.id; };
    TipoSubInvestigacion.prototype.getNombre = function () { return this.nombre; };
    return TipoSubInvestigacion;
}());
var TipoItemInvestigacion = /** @class */ (function () {
    function TipoItemInvestigacion(id, nombre, precio, tiempo, conseguido) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tiempo = tiempo;
        this.conseguido = conseguido;
    }
    TipoItemInvestigacion.prototype.getID = function () { return this.id; };
    TipoItemInvestigacion.prototype.getNombre = function () { return this.nombre; };
    TipoItemInvestigacion.prototype.getPrecio = function () { return this.precio; };
    TipoItemInvestigacion.prototype.getTiempo = function () { return this.tiempo; };
    TipoItemInvestigacion.prototype.setconseguido = function () {
        this.conseguido = true;
        console.log(' Comprada la investigación: ' + this.nombre);
    };
    TipoItemInvestigacion.prototype.getConseguido = function () { return this.conseguido; };
    return TipoItemInvestigacion;
}());
var CentroDeInvestigacion = /** @class */ (function (_super) {
    __extends(CentroDeInvestigacion, _super);
    function CentroDeInvestigacion(id, nombre, disp, posicion, palacio) {
        var _this = _super.call(this, id, nombre, Edificio_2.TipoEdificio.CENTRO_DE_INVESTIGACION, posicion, palacio) || this;
        _this.disp = disp;
        _this.listaInvestigaciones = new Array();
        var investigacion = new TipoInvestigacion(1, 'RECURSOS NATURALES');
        var subinvestigacion = new TipoSubInvestigacion(1, 'AGRICULTURA');
        var itemInvestigacion = new TipoItemInvestigacion(1, 'Cultivar frutales', 100, 10, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        itemInvestigacion = new TipoItemInvestigacion(2, 'Cultivar algodon', 150, 15, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(2, 'GANADERIA');
        itemInvestigacion = new TipoItemInvestigacion(1, 'Criar cabras', 50, 5, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        itemInvestigacion = new TipoItemInvestigacion(2, 'Criar gusanos de seda', 80, 8, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(3, 'MADERA');
        itemInvestigacion = new TipoItemInvestigacion(1, 'Mejorar producción un 5%', 50, 5, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(4, 'EXTRACCION DE ORO');
        itemInvestigacion = new TipoItemInvestigacion(1, 'Mejorar producción un 5%', 50, 5, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(5, 'EXTRACCION DE PIEDRA');
        itemInvestigacion = new TipoItemInvestigacion(1, 'Mejorar producción un 5%', 50, 5, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(6, 'EXTRACCION DE METALES');
        itemInvestigacion = new TipoItemInvestigacion(1, 'Obtener hierro', 50, 5, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        investigacion.addSubinvestigacion(subinvestigacion);
        _this.listaInvestigaciones.push(investigacion);
        investigacion = new TipoInvestigacion(2, 'EJERCITO');
        subinvestigacion = new TipoSubInvestigacion(1, 'INFANTERIA');
        itemInvestigacion = new TipoItemInvestigacion(1, 'Civil con hondas', 10, 5, false);
        subinvestigacion.addIteminvestigacion(itemInvestigacion);
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(2, 'CABALLERIA');
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(3, 'CARROS');
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(4, 'ASALTO');
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(5, 'OFICIALES');
        investigacion.addSubinvestigacion(subinvestigacion);
        _this.listaInvestigaciones.push(investigacion);
        investigacion = new TipoInvestigacion(3, 'COMERCIO');
        subinvestigacion = new TipoSubInvestigacion(1, 'ELEMENTOS DE TRANSPORTE');
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(2, 'CARRETERAS');
        investigacion.addSubinvestigacion(subinvestigacion);
        _this.listaInvestigaciones.push(investigacion);
        investigacion = new TipoInvestigacion(4, 'DIPLOMACIA');
        subinvestigacion = new TipoSubInvestigacion(1, 'EMBAJADAS');
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(2, 'ESPIAS');
        investigacion.addSubinvestigacion(subinvestigacion);
        _this.listaInvestigaciones.push(investigacion);
        investigacion = new TipoInvestigacion(5, 'INDUSTRIA');
        subinvestigacion = new TipoSubInvestigacion(1, 'ARMAS');
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(2, 'INVESTIGACION');
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(3, 'CONSTRUCCIÓN');
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(4, 'OCIO');
        investigacion.addSubinvestigacion(subinvestigacion);
        _this.listaInvestigaciones.push(investigacion);
        return _this;
    }
    CentroDeInvestigacion.prototype.getLista = function () { return JSON.stringify(this.listaInvestigaciones); };
    CentroDeInvestigacion.prototype.getItem = function (idTipo, idSubtipo, idItem) {
        var investigacion = this.listaInvestigaciones.filter(function (x) { return x.getID() === idTipo; });
        var subinvestigacion = investigacion[0].listaDeSubinvestigaciones.filter(function (x) { return x.getID() === idSubtipo; });
        var item = subinvestigacion[0].listaDeItems.filter(function (x) { return x.getID() === idItem; });
        return item[0];
    };
    CentroDeInvestigacion.prototype.iniciaInvestigacion = function (idTipo, idSubtipo, idItem) {
        var item = this.getItem(idTipo, idSubtipo, idItem);
        this.disp.addTareaRepetitiva(this, 'compraInvestigacion', item.getTiempo(), Array(idTipo, idSubtipo, idItem));
    };
    CentroDeInvestigacion.prototype.compraInvestigacion = function (v) {
        var idTipo = v[0];
        var idSubtipo = v[1];
        var idItem = v[2];
        var item = this.getItem(idTipo, idSubtipo, idItem);
        item.setconseguido();
        return -1; // Finalizar tarea
    };
    CentroDeInvestigacion.prototype.cancelaInvestigacion = function () {
        // para la 2.0 :-D
    };
    CentroDeInvestigacion.prototype.estaComprada = function (idTipo, idSubtipo, idItem) {
        var item = this.getItem(idTipo, idSubtipo, idItem);
        return item.getConseguido();
    };
    return CentroDeInvestigacion;
}(Edificio_1.Edificio));
exports.CentroDeInvestigacion = CentroDeInvestigacion;
