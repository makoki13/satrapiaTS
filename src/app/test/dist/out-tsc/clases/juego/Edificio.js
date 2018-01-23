import { Extractor } from './Extractor';
import { Productor } from './Productor';
import { Almacen } from './Almacen';
import { ORO } from './Recurso';
import { Transporte } from './Transporte';
import { CivilConHonda } from './Recurso';
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
class Edificio {
    constructor(id, nombre, tipo, posicion, palacio) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.posicion = posicion;
        this.palacio = palacio;
    }
    getPosicion() { return this.posicion; }
    setPalacio(p) { this.palacio = p; }
    getAlmacenPalacio() { return this.palacio.getAlmacen(); }
    setCentroDeInvestigacionPalacio(ci) { this.palacio.centroDeInvestigacion = ci; }
    getCentroInvestigacionPalacio() { return this.palacio.centroDeInvestigacion; }
}
class Palacio extends Edificio {
    constructor(id, nombre, disp, posicion) {
        super(id, nombre, TipoEdificio.PALACIO, posicion, null);
        this.disp = disp;
        this.impuestos = new Productor(null, ORO, 10, 10, 1);
        this.almacen = new Almacen(66, 'Deposito de oro', [ORO], posicion, Number.MAX_VALUE.valueOf());
        const cantidadInicial = 2;
        this.recaudador = new Extractor(this.impuestos, this.almacen, cantidadInicial);
        this.disp.addTareaRepetitiva(this, 'recaudaImpuestos', 15);
    }
    setPalacio() { super.setPalacio(this); }
    recaudaImpuestos() {
        const cantidad = this.recaudador.getCantidad();
        this.almacen.addCantidad(cantidad);
        // console.log ( 'Almacen del palacio tiene ' + this.getOroActual() );
    }
    getOroActual() { return this.almacen.getCantidad(); }
    getAlmacen() { return this.almacen; }
}
class Silos extends Edificio {
    constructor(id, nombre, disp, posicion, palacio) {
        super(id, nombre, TipoEdificio.SILOS, posicion, palacio);
        this.disp = disp;
    }
    addAlmacen(nuevoAlmacen) {
        this.almacenes.push(nuevoAlmacen);
    }
}
class Cuartel extends Edificio {
    constructor(id, nombre, disp, posicion, palacio) {
        super(id, nombre, TipoEdificio.CUARTEL, posicion, palacio);
        this.disp = disp;
    }
    getTropas() { return JSON.stringify(this.unidades); }
    addUnidades(v) {
        const idTipo = v[0];
        const cantidad = v[1];
        const indiceElemento = this.unidades.findIndex(x => x.id === idTipo);
        if (indiceElemento === -1) {
            const nuevaUnidad = { id: idTipo, cantidad };
            this.unidades.push(nuevaUnidad);
        }
        else {
            this.unidades[indiceElemento].cantidad += cantidad;
        }
        this.getTropas();
        return -1;
    }
    entrenaCivilesConHonda(cantidad = 0) {
        if (cantidad === 0) {
            cantidad = CivilConHonda.maxUnidadesEnEntrenamiento();
        }
        if (cantidad > CivilConHonda.maxUnidadesEnEntrenamiento()) {
            cantidad = CivilConHonda.maxUnidadesEnEntrenamiento();
        }
        const myCI = super.getCentroInvestigacionPalacio();
        if (myCI.estaComprada(2, 1, 1)) {
            console.log(' Se inicia reclutamiento de unidades de infanteria: "Civiles con honda".');
            this.disp.addTareaRepetitiva(this, 'addUnidades', 5, Array(10001, cantidad));
        }
        else {
            console.log(' No se puede entrenar "Civiles con honda". La investigación no está realizada.');
        }
    }
}
class MinaDeOro extends Edificio {
    constructor(id, nombre, disp, posicion, palacio) {
        super(id, nombre, TipoEdificio.MINA_DE_ORO, posicion, palacio);
        this.disp = disp;
        this.hayEnvioEnMarcha = false;
        this.filon = new Productor(null, ORO, 30, 30, 1);
        this.almacen = new Almacen(67, 'Filón de oro', [ORO], posicion, 5);
        const cantidadInicial = 1;
        this.mineros = new Extractor(this.filon, this.almacen, cantidadInicial);
        this.disp.addTareaRepetitiva(this, 'extrae', 1);
    }
    extrae() {
        const cantidad = this.mineros.getCantidad();
        this.almacen.addCantidad(cantidad);
        // console.log ( 'Almacen de la mina de oro tiene ' + this.getOroActual() + ' Capacidad máx: ' + this.almacen.getMaxCantidad() );
        /* Si el almacen alcanza el tope enviar un transporte de oro a palacio */
        if (this.almacen.getCantidad() >= this.almacen.getMaxCantidad()) {
            if (this.hayEnvioEnMarcha === false) {
                this.hayEnvioEnMarcha = true;
                this.enviaOroHaciaPalacio();
            }
        }
    }
    enviaOroHaciaPalacio() {
        const cantidad = this.almacen.restaCantidad(this.almacen.getCantidad());
        const transporteDeOro = new Transporte(this.almacen, super.getAlmacenPalacio(), ORO, cantidad);
        transporteDeOro.calculaViaje();
        this.disp.addTareaRepetitiva(transporteDeOro, 'envia', 1);
    }
    getOroActual() { return this.almacen.getCantidad(); }
}
export { Cuartel };
export { Palacio };
export { MinaDeOro };
export { Edificio };
export { TipoEdificio };
//# sourceMappingURL=Edificio.js.map
