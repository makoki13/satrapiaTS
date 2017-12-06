class Recurso {
  constructor (id: number, nombre: string, tipo: TipoRecurso) {

  }
}

enum TipoRecurso { NATURAL = 1, FABRICADO = 2, MILITAR = 3 }

export { Recurso };
export { TipoRecurso };
