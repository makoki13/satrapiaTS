class Jugador {
  construct (idJugador: number, idUsuario: number, nombre: string, tipo: TipoJugador) {

  }
}

enum TipoJugador { SIN_JUEGO, EMPERADOR, SATRAPA, JEFE_DE_TRIBU }

export { Jugador };
export { TipoJugador };
