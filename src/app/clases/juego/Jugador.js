"use strict";
exports.__esModule = true;
var Jugador = /** @class */ (function () {
    function Jugador() {
    }
    Jugador.prototype.construct = function (idJugador, idUsuario, nombre, tipo) {
    };
    return Jugador;
}());
exports.Jugador = Jugador;
var TipoJugador;
(function (TipoJugador) {
    TipoJugador[TipoJugador["SIN_JUEGO"] = 0] = "SIN_JUEGO";
    TipoJugador[TipoJugador["EMPERADOR"] = 1] = "EMPERADOR";
    TipoJugador[TipoJugador["SATRAPA"] = 2] = "SATRAPA";
    TipoJugador[TipoJugador["JEFE_DE_TRIBU"] = 3] = "JEFE_DE_TRIBU";
})(TipoJugador || (TipoJugador = {}));
exports.TipoJugador = TipoJugador;
