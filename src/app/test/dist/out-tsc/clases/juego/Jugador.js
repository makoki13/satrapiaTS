class Jugador {
    construct(idJugador, idUsuario, nombre, tipo) {
    }
}
var TipoJugador;
(function (TipoJugador) {
    TipoJugador[TipoJugador["SIN_JUEGO"] = 0] = "SIN_JUEGO";
    TipoJugador[TipoJugador["EMPERADOR"] = 1] = "EMPERADOR";
    TipoJugador[TipoJugador["SATRAPA"] = 2] = "SATRAPA";
    TipoJugador[TipoJugador["JEFE_DE_TRIBU"] = 3] = "JEFE_DE_TRIBU";
})(TipoJugador || (TipoJugador = {}));
export { Jugador };
export { TipoJugador };
//# sourceMappingURL=Jugador.js.map