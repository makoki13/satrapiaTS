import { DBlocal } from './../tools/Persistencia';
import { Granja } from './Granja';

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

    static async inicializa(objeto) {
        // DBlocal.inicializa();

        await DBlocal.db.get(objeto).then(function (doc) {
            Parametros.Granja_Construccion_Coste = doc.Granja_Construccion_Coste;
            console.log('init:', Parametros.Granja_Construccion_Coste);
        });
        console.log('inicializa fin');
    }

    static getGranjaConstruccionCoste() {
        DBlocal.db.get('parametros').then(function (doc) {
            return Parametros.Granja_Construccion_Coste = doc.Granja_Construccion_Coste;
        });
    }

    static setGranjaConstruccionCoste(valor: number) {
        Parametros.Granja_Construccion_Coste = valor;
        DBlocal.db.get('parametros').then(function (doc) {
            doc.Granja_Construccion_Coste = valor;
            // put them back
            return DBlocal.db.put(doc);
          }).then(function () {
            // fetch mittens again
            return DBlocal.db.get('parametros');
          }).then(function (doc) {
            console.log(doc);
          });
    }
}

export {Parametros};
