class Tarea {
  constructor (private funcion: Function, private vencimiento: Date ) {

  }
}

class Dispatcher {
  private static listaDeTareas: Array < Tarea >;

  static addTarea (f: Function, tiempo: number ) {
    let nuevoVencimiento: Date;
    let t: Tarea;

    nuevoVencimiento = new Date();

    t = new Tarea (f, nuevoVencimiento);

    Dispatcher.listaDeTareas.push (t);

  }

  static ejecuta() {

  }
}
