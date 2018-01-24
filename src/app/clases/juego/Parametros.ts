import { DBlocal } from './../tools/Persistencia';

class Parametros {
    // public static Granja_Construccion_Coste = DBlocal.getGranjaConstruccionCoste();
    public static Granja_Construccion_Coste = 50;
    public static Granja_Construccion_Tiempo = 10;
    public static Granja_Productor_CantidadInicial = 0;
    public static Granja_Productor_CantidadMaxima = 0; // Ilimitado

    public static Granja_Productor_Ratio = 1;
    public static Granja_Almacen_Capacidad = 5;
    public static Granja_Cosecha_Tamanyo = 1;
    public static Granja_Cosecha_Frecuencia = 1;

    public static Serreria_Construccion_Coste = 110;
    public static Serreria_Construccion_Tiempo = 10;
    public static Serreria_Productor_CantidadInicial = 0;
    public static Serreria_Productor_CantidadMaxima = 0; // Ilimitado
    public static Serreria_Productor_Ratio = 1;
    public static Serreria_Almacen_Capacidad = 5;
    public static Serreria_Cosecha_Tamanyo = 1;
    public static Serreria_Cosecha_Frecuencia = 1;

    public static Transporte_Tiempo_Recalculo_Ruta = 1;
    public static Transporte_Velocidad = 0.83; // m/s

    public static Filon_Vacio = 0;

    constructor() {
      // Parametros.Granja_Construccion_Coste = DBlocal.getGranjaConstruccionCoste();
      // DBlocal.inicializa();
    }

    static async inicializa() {
      let datos: any;

      console.log('inicializa parametros 1');

      await DBlocal.inicializa();

      DBlocal.db.get('parametros').then(function (doc) {
        datos = JSON.stringify(doc);
        console.log('inicializa parametros fin');
        Parametros.Granja_Construccion_Coste = datos.Granja_Construccion_Coste;
        console.log('Parametros.Granja_Construccion_Coste', Parametros.Granja_Construccion_Coste);
      });
    }
}

export {Parametros};
