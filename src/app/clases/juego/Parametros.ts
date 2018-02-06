import { DBlocal } from './../tools/Persistencia';
import { Granja } from './Granja';

class Parametros {
    public static MinaDeOro_Num_Total = 10;

    public static Granja_Construccion_Coste = 50;
    public static Granja_Construccion_Tiempo = 10;
    public static Granja_Productor_CantidadInicial = 0;
    public static Granja_Productor_CantidadMaxima = 0; // Ilimitado
    public static Granja_Productor_Ratio = 1;
    public static Granja_Almacen_Capacidad = 5;
    public static Granja_Cosecha_Tamanyo = 1;
    public static Granja_Cosecha_Frecuencia = 1;
    public static Granja_Num_Total = 10;

    public static Serreria_Construccion_Coste = 110;
    public static Serreria_Construccion_Tiempo = 10;
    public static Serreria_Productor_CantidadInicial = 0;
    public static Serreria_Productor_CantidadMaxima = 0; // Ilimitado
    public static Serreria_Productor_Ratio = 1;
    public static Serreria_Almacen_Capacidad = 5;
    public static Serreria_Cosecha_Tamanyo = 1;
    public static Serreria_Cosecha_Frecuencia = 1;
    public static Serreria_Num_Total = 10;

    public static Cantera_Construccion_Coste = 110;
    public static Cantera_Construccion_Tiempo = 10;
    public static Cantera_Productor_CantidadInicial = 10000;
    public static Cantera_Productor_CantidadMaxima = 10000;
    public static Cantera_Productor_Ratio = 1;
    public static Cantera_Almacen_Capacidad = 5;
    public static Cantera_Cosecha_Tamanyo = 1;
    public static Cantera_Cosecha_Frecuencia = 1;
    public static Cantera_Num_Total = 10;

    public static Transporte_Tiempo_Recalculo_Ruta = 1;
    public static Transporte_Velocidad = 0.83; // m/s

    public static Filon_Vacio = 0;

    public static oroInicial = 5000;

    public static IDpartida = null;

    constructor() {
      // Parametros.Granja_Construccion_Coste = DBlocal.getGranjaConstruccionCoste();
      // DBlocal.inicializa();
    }

    static async __test() {
        console.log('TEST');
    }

    static inicializa(objeto): Promise<any> {
        // DBlocal.inicializa();
        console.log('inicializa inicio', objeto);
        const p1 = DBlocal.db.get(objeto).then(function (doc) {
            Parametros.__test();
            // console.log('despues de');
            if (objeto === 'partida') {
                console.log('doc de partida', doc);
                Parametros.IDpartida = doc.id;
                console.log('doc partida: ', Parametros.IDpartida);
            } else {
              Parametros.Granja_Construccion_Coste = doc.Granja_Construccion_Coste;
              console.log('init granja-construccion-coste:', Parametros.Granja_Construccion_Coste);
              Parametros.oroInicial = doc.Oro_Inicial;
              // console.log('init:', Parametros.oroInicial);
            }
            console.log('inicializa fin', objeto);
        });
        return Promise.all([p1]).then(values => {
          console.log('Promise.all parametros');
        });
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
            // console.log(doc);
          });
    }

    static getOroInicial() {
        DBlocal.db.get('parametros').then(function (doc) {
            // console.log('getOroInicial', doc);
            return Parametros.oroInicial = doc.Oro_Inicial;
        });
    }

    static setOroInicial(valor: number) {
        Parametros.oroInicial = valor;
        DBlocal.db.get('parametros').then(function (doc) {
            doc.Oro_Inicial = valor;
            // put them back
            // console.log('setOroInicial', doc);
            return DBlocal.db.put(doc);
          }).then(function () {
            // fetch mittens again
            return DBlocal.db.get('parametros');
          }).then(function (doc) {
            // console.log(doc);
          });
    }
}

export {Parametros};
