"use strict";
exports.__esModule = true;
var Tarea = /** @class */ (function () {
    function Tarea(clase, funcion, vencimiento, delta, parametros) {
        if (delta === void 0) { delta = 0; }
        this.clase = clase;
        this.funcion = funcion;
        this.vencimiento = vencimiento;
        this.delta = delta;
        this.parametros = parametros;
    }
    Tarea.prototype.getVencimiento = function () {
        return this.vencimiento;
    };
    Tarea.prototype.setVencimiento = function () {
        this.vencimiento.setSeconds(this.vencimiento.getSeconds() + this.delta);
    };
    Tarea.prototype.getNombreFuncion = function () { return this.funcion; };
    Tarea.prototype.execFuncion = function () {
        return this.clase[this.funcion](this.parametros);
    };
    return Tarea;
}());
var Dispatcher = /** @class */ (function () {
    function Dispatcher() {
        this.listaDeTareas = new Array();
    }
    Dispatcher.prototype.addTareaRepetitiva = function (c, f, tiempo, param) {
        var nuevoVencimiento;
        var t;
        nuevoVencimiento = new Date();
        nuevoVencimiento.setSeconds(nuevoVencimiento.getSeconds() + tiempo);
        t = new Tarea(c, f, nuevoVencimiento, tiempo, param);
        this.listaDeTareas.push(t);
    };
    Dispatcher.prototype.nada = function () { };
    Dispatcher.prototype.ejecuta = function () {
        var _this = this;
        var horaActual = new Date;
        var numTareas = this.listaDeTareas.length;
        console.log(horaActual + ' Num Tareas: ' + numTareas);
        if (numTareas === 0) {
            console.log(' Sin tareas pendientes ');
        }
        else {
            this.listaDeTareas.forEach(function (element, indice) {
                if (element.getVencimiento() < horaActual) {
                    element.setVencimiento();
                    var rt = element.execFuncion();
                    console.log('Tarea ' + element.getNombreFuncion() + ' con indice ' + indice + ' devolvió ' + rt);
                    if (rt === -1) {
                        _this.listaDeTareas.splice(indice, 1);
                    }
                }
            });
        }
    };
    return Dispatcher;
}());
exports.Dispatcher = Dispatcher;
