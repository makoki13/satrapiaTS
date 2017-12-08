class Tarea {
  constructor(private clase: any, private funcion: string, private vencimiento: Date, private delta: number = 0, private parametros?: any) {

  }

  getVencimiento() {
    return this.vencimiento;
  }

  setVencimiento () {
    this.vencimiento.setSeconds(this.vencimiento.getSeconds() + this.delta);
  }

  execFuncion() {
    this.clase[this.funcion](this.parametros);
  }
}

class Dispatcher {
  private listaDeTareas: Array<Tarea>;

  constructor() {
    this.listaDeTareas = new Array<Tarea>();
  }

  addTarea(c: any, f: string, tiempo: number, param?: any) {
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
    console.log(horaActual);
    const numTareas = this.listaDeTareas.length;

    if (numTareas === 0) {
      console.log(' Sin tareas pendientes ');
    } else {
      this.listaDeTareas.forEach(element => {
        if (element.getVencimiento() < horaActual ) {
          element.setVencimiento();
          element.execFuncion();
          console.log('Tarea ' + element.getVencimiento());
        }
      });
    }
  }
}

export  { Dispatcher };
