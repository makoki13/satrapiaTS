class Tarea {
  constructor(private clase: any, private funcion: string, private vencimiento: Date, private delta: number = 0, private parametros?: any) {

  }

  getVencimiento() {
    return this.vencimiento;
  }

  setVencimiento () {
    this.vencimiento.setSeconds(this.vencimiento.getSeconds() + this.delta);
  }

  getNombreFuncion() { return this.funcion; }

  execFuncion(): any {
    return this.clase[this.funcion](this.parametros);
  }
}

class Dispatcher {
  private listaDeTareas: Array<Tarea>;

  constructor() {
    this.listaDeTareas = new Array<Tarea>();
  }

  addTareaRepetitiva(c: any, f: string, tiempo: number, param?: any) {
    let nuevoVencimiento: Date;
    let t: Tarea;

    nuevoVencimiento = new Date();
    nuevoVencimiento.setSeconds(nuevoVencimiento.getSeconds() + tiempo);

    t = new Tarea(c, f, nuevoVencimiento, tiempo, param);

    this.listaDeTareas.push(t);
  }

  nada() {}

  ejecuta() {
    const horaActual = new Date;
    const numTareas = this.listaDeTareas.length;

    console.log(horaActual +  ' Num Tareas: ' + numTareas);

    if (numTareas === 0) {
      console.log(' Sin tareas pendientes ');
    } else {
      this.listaDeTareas.forEach((element, indice) => {
        if (element.getVencimiento() < horaActual ) {
          element.setVencimiento();
          const rt = element.execFuncion();
          console.log('Tarea ' + element.getNombreFuncion() + ' con indice ' + indice + ' devolvió ' + rt);
          if ( rt === -1 ) {
            this.listaDeTareas.splice(indice, 1);
          }
        }
      });
    }
  }
}

export  { Dispatcher };
