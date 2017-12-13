import { Edificio } from './Edificio';
import { TipoEdificio } from './Edificio';
class TipoInvestigacion {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.listaDeSubinvestigaciones = new Array();
    }
    addSubinvestigacion(subinvestigacion) {
        this.listaDeSubinvestigaciones.push(subinvestigacion);
    }
    getID() { return this.id; }
    getNombre() { return this.nombre; }
}
class TipoSubInvestigacion {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.listaDeItems = new Array();
    }
    addIteminvestigacion(item) {
        this.listaDeItems.push(item);
    }
    getID() { return this.id; }
    getNombre() { return this.nombre; }
}
class TipoItemInvestigacion {
    constructor(id, nombre, precio, tiempo, conseguido) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.tiempo = tiempo;
        this.conseguido = conseguido;
    }
    getID() { return this.id; }
    getNombre() { return this.nombre; }
    getPrecio() { return this.precio; }
    getTiempo() { return this.tiempo; }
    setconseguido() {
        this.conseguido = true;
        console.log(' Comprada la investigación: ' + this.nombre);
    }
    getConseguido() { return this.conseguido; }
}
class CentroDeInvestigacion extends Edificio {
    constructor(id, nombre, disp, posicion, palacio) {
        super(id, nombre, TipoEdificio.CENTRO_DE_INVESTIGACION, posicion, palacio);
        this.disp = disp;
        this.listaInvestigaciones = new Array();
        let investigacion = new TipoInvestigacion(1, 'RECURSOS NATURALES');
        let subinvestigacion = new TipoSubInvestigacion(1, 'AGRICULTURA');
        let itemInvestigacion = new TipoItemInvestigacion(1, 'Cultivar frutales', 100, 10, false);
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
        this.listaInvestigaciones.push(investigacion);
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
        this.listaInvestigaciones.push(investigacion);
        investigacion = new TipoInvestigacion(3, 'COMERCIO');
        subinvestigacion = new TipoSubInvestigacion(1, 'ELEMENTOS DE TRANSPORTE');
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(2, 'CARRETERAS');
        investigacion.addSubinvestigacion(subinvestigacion);
        this.listaInvestigaciones.push(investigacion);
        investigacion = new TipoInvestigacion(4, 'DIPLOMACIA');
        subinvestigacion = new TipoSubInvestigacion(1, 'EMBAJADAS');
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(2, 'ESPIAS');
        investigacion.addSubinvestigacion(subinvestigacion);
        this.listaInvestigaciones.push(investigacion);
        investigacion = new TipoInvestigacion(5, 'INDUSTRIA');
        subinvestigacion = new TipoSubInvestigacion(1, 'ARMAS');
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(2, 'INVESTIGACION');
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(3, 'CONSTRUCCIÓN');
        investigacion.addSubinvestigacion(subinvestigacion);
        subinvestigacion = new TipoSubInvestigacion(4, 'OCIO');
        investigacion.addSubinvestigacion(subinvestigacion);
        this.listaInvestigaciones.push(investigacion);
    }
    getLista() { return JSON.stringify(this.listaInvestigaciones); }
    getItem(idTipo, idSubtipo, idItem) {
        const investigacion = this.listaInvestigaciones.filter(x => x.getID() === idTipo);
        const subinvestigacion = investigacion[0].listaDeSubinvestigaciones.filter(x => x.getID() === idSubtipo);
        const item = subinvestigacion[0].listaDeItems.filter(x => x.getID() === idItem);
        return item[0];
    }
    iniciaInvestigacion(idTipo, idSubtipo, idItem) {
        const item = this.getItem(idTipo, idSubtipo, idItem);
        this.disp.addTareaRepetitiva(this, 'compraInvestigacion', item.getTiempo(), Array(idTipo, idSubtipo, idItem));
    }
    compraInvestigacion(v) {
        const idTipo = v[0];
        const idSubtipo = v[1];
        const idItem = v[2];
        const item = this.getItem(idTipo, idSubtipo, idItem);
        item.setconseguido();
        return -1; // Finalizar tarea
    }
    cancelaInvestigacion() {
        // para la 2.0 :-D
    }
    estaComprada(idTipo, idSubtipo, idItem) {
        const item = this.getItem(idTipo, idSubtipo, idItem);
        return item.getConseguido();
    }
}
export { CentroDeInvestigacion };
//# sourceMappingURL=CentroDeInvestigacion.js.map