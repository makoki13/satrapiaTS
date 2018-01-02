class Jugador {
  constructor (private idJugador: number, private idUsuario: number, private nombre: string, private tipo: TipoJugador) {

  }
}

enum TipoJugador { SIN_JUEGO, EMPERADOR, SATRAPA, JEFE_DE_TRIBU }

export { Jugador };
export { TipoJugador };
