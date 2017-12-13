class Recurso {
    constructor(id, nombre, tipo) {
        this.tipo = tipo;
        this.nombre = nombre;
    }
    getNombre() { return this.nombre; }
}
var TipoRecurso;
(function (TipoRecurso) {
    TipoRecurso[TipoRecurso["NATURAL"] = 1] = "NATURAL";
    TipoRecurso[TipoRecurso["FABRICADO"] = 2] = "FABRICADO";
    TipoRecurso[TipoRecurso["MILITAR"] = 3] = "MILITAR";
})(TipoRecurso || (TipoRecurso = {}));
const ORO = new Recurso(1, 'ORO', 1);
class UnidadMilitar extends Recurso {
    constructor(id, nombre, vidaInicial, dañoInflingido, fuerza, moral, maxUnidadesEnCuartel = 1) {
        super(id, nombre, 3);
        this.vidaInicial = vidaInicial;
        this.dañoInflingido = dañoInflingido;
        this.fuerza = fuerza;
        this.moral = moral;
        this.dañoRecibido = 0;
        UnidadMilitar.unidadesEnCuartel = maxUnidadesEnCuartel;
    }
}
class CivilConHonda extends UnidadMilitar {
    constructor(vidaInicial, dañoInflingido, fuerza, moral) {
        super(1001, 'Civil con honda', vidaInicial, dañoInflingido, fuerza, moral, 10);
    }
    static maxUnidadesEnEntrenamiento() { return UnidadMilitar.unidadesEnCuartel; }
}
class Arquero extends UnidadMilitar {
    constructor(vidaInicial, dañoInflingido, fuerza, moral) {
        super(1002, 'Arquero', vidaInicial, dañoInflingido, fuerza, moral, 10);
    }
}
export { Recurso };
export { ORO };
export { UnidadMilitar };
export { CivilConHonda };
//# sourceMappingURL=Recurso.js.map