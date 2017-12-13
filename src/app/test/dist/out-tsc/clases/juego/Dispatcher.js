class Tarea {
    constructor(clase, funcion, vencimiento, delta = 0, parametros) {
        this.clase = clase;
        this.funcion = funcion;
        this.vencimiento = vencimiento;
        this.delta = delta;
        this.parametros = parametros;
    }
    getVencimiento() {
        return this.vencimiento;
    }
    setVencimiento() {
        this.vencimiento.setSeconds(this.vencimiento.getSeconds() + this.delta);
    }
    getNombreFuncion() { return this.funcion; }
    execFuncion() {
        return this.clase[this.funcion](this.parametros);
    }
}
class Dispatcher {
    constructor() {
        this.listaDeTareas = new Array();
    }
    addTareaRepetitiva(c, f, tiempo, param) {
        let nuevoVencimiento;
        let t;
        nuevoVencimiento = new Date();
        nuevoVencimiento.setSeconds(nuevoVencimiento.getSeconds() + tiempo);
        t = new Tarea(c, f, nuevoVencimiento, tiempo, param);
        this.listaDeTareas.push(t);
    }
    nada() { }
    ejecuta() {
        const horaActual = new Date;
        console.log(horaActual);
        const numTareas = this.listaDeTareas.length;
        if (numTareas === 0) {
            console.log(' Sin tareas pendientes ');
        }
        else {
            this.listaDeTareas.forEach((element, indice) => {
                if (element.getVencimiento() < horaActual) {
                    element.setVencimiento();
                    const rt = element.execFuncion();
                    // console.log('Tarea ' + element.getNombreFuncion() + ' con indice ' + indice + ' devolvió ' + rt);
                    if (rt === -1) {
                        this.listaDeTareas.splice(indice, 1);
                    }
                }
            });
        }
    }
}
export { Dispatcher };
//# sourceMappingURL=Dispatcher.js.map