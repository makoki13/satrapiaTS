class Imperio {
    constructor(id, nombre, lider, tribu) {
        this.id = id;
        this.nombre = nombre;
        this.lider = lider;
        this.tribu = tribu;
    }
}
class Provincia extends Imperio {
    constructor(id, nombre, lider, tribu, esSatrapia) {
        super(id, nombre, lider, tribu);
    }
}
class Localidad {
    constructor(id, nombre, esCapital, provincia, numeroDeHabitantes, posicion) {
        this.id = id;
        this.nombre = nombre;
        this.esCapital = esCapital;
        this.provincia = provincia;
        this.numeroDeHabitantes = numeroDeHabitantes;
        this.posicion = posicion;
    }
    getPosicion() { return this.posicion; }
}
export { Localidad };
//# sourceMappingURL=Imperio.js.map