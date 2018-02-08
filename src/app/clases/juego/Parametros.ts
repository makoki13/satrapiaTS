import { DBlocal } from './../tools/Persistencia';
import { Granja } from './Granja';

export class Parametros {
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

    public static MinaDeHierro_Num_Total = 10;

    public static Transporte_Tiempo_Recalculo_Ruta = 1;
    public static Transporte_Velocidad = 0.83; // m/s

    public static Filon_Vacio = 0;

    public static oroInicial = 5000;

    public static IDpartida = null;

    constructor() {
      // Parametros.Granja_Construccion_Coste = DBlocal.getGranjaConstruccionCoste();
      // DBlocal.inicializa();
    }

    static inicializa(objeto): Promise<any> {
        // DBlocal.inicializa();
        // console.log('inicializa inicio', objeto);
        const p1 = DBlocal.db.get(objeto).then(function (doc) {
            // console.log('despues de');
            if (objeto === 'partida') {
              Parametros.IDpartida = doc.id;
            } else {
              // console.log('doc parametros: ', doc);
              Parametros.Granja_Construccion_Coste = doc.Granja_Construccion_Coste;
              Parametros.Granja_Construccion_Tiempo = doc.Granja_Construccion_Tiempo;
              Parametros.Granja_Productor_CantidadInicial = doc.Granja_Productor_CantidadInicial;
              Parametros.Granja_Productor_CantidadMaxima = doc.Granja_Productor_CantidadMaxima;
              Parametros.Granja_Productor_Ratio = doc.Granja_Productor_Ratio;
              Parametros.Granja_Almacen_Capacidad = doc.Granja_Almacen_Capacidad;
              Parametros.Granja_Cosecha_Tamanyo = doc.Granja_Cosecha_Tamanyo;
              Parametros.Granja_Cosecha_Frecuencia = doc.Granja_Cosecha_Frecuencia;
              Parametros.Granja_Num_Total = doc.Granja_Num_Total;

              Parametros.Serreria_Num_Total = doc.Serreria_Num_Total;

              Parametros.oroInicial = doc.Oro_Inicial;
              // console.log('init:', Parametros.oroInicial);
            }
            // console.log('inicializa fin', objeto);
        });
        return Promise.all([p1]).then(values => {
          // console.log('Promise.all parametros');
        });
    }

    static getGranjaConstruccionCoste() {
        DBlocal.db.get('parametros').then(function (doc) {
            return Parametros.Granja_Construccion_Coste = doc.Granja_Construccion_Coste;
        });
    }
    static getGranjaConstruccionTiempo() {
      DBlocal.db.get('parametros').then(function (doc) {
          return Parametros.Granja_Construccion_Tiempo = doc.Granja_Construccion_Tiempo;
      });
    }
    static getGranjaProductorCantidadInicial() {
      DBlocal.db.get('parametros').then(function (doc) {
        return Parametros.Granja_Productor_CantidadInicial = doc.Granja_Productor_CantidadInicial;
      });
    }
    static getGranjaProductorCantidadMaxima() {
      DBlocal.db.get('parametros').then(function (doc) {
        return Parametros.Granja_Productor_CantidadMaxima = doc.Granja_Productor_CantidadMaxima;
      });
    }
    static getGranjaProductorRatio() {
      DBlocal.db.get('parametros').then(function (doc) {
        return Parametros.Granja_Productor_Ratio = doc.Granja_Productor_Ratio;
      });
    }
    static getGranjaAlmacenCapacidad() {
      DBlocal.db.get('parametros').then(function (doc) {
        return Parametros.Granja_Almacen_Capacidad = doc.Granja_Almacen_Capacidad;
      });
    }
    static getGranjaCosechaTamanyo() {
      DBlocal.db.get('parametros').then(function (doc) {
        return Parametros.Granja_Cosecha_Tamanyo = doc.Granja_Cosecha_Tamanyo;
      });
    }
    static getGranjaCosechaFrecuencia() {
      DBlocal.db.get('parametros').then(function (doc) {
        return Parametros.Granja_Cosecha_Frecuencia = doc.Granja_Cosecha_Frecuencia;
      });
    }
    static getGranjaNumTotal() {
      DBlocal.db.get('parametros').then(function (doc) {
        return Parametros.Granja_Num_Total = doc.Granja_Num_Total;
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

    static setGranjaConstruccionTiempo(valor: number) {
        Parametros.Granja_Construccion_Tiempo = valor;
        DBlocal.db.get('parametros').then(function (doc) {
          doc.Granja_Construccion_Tiempo = valor;
          return DBlocal.db.put(doc);
        }).then(function () {
          return DBlocal.db.get('parametros');
        });
    }

    static setGranjaProductorCantidadInicial(valor: number) {
      Parametros.Granja_Productor_CantidadInicial = valor;
        DBlocal.db.get('parametros').then(function (doc) {
          doc.Granja_Productor_CantidadInicial = valor;
          return DBlocal.db.put(doc);
        }).then(function () {
          return DBlocal.db.get('parametros');
        });
    }

    static setGranjaProductorCantidadMaxima(valor: number) {
      Parametros.Granja_Productor_CantidadMaxima = valor;
        DBlocal.db.get('parametros').then(function (doc) {
          doc.Granja_Productor_CantidadMaxima = valor;
          return DBlocal.db.put(doc);
        }).then(function () {
          return DBlocal.db.get('parametros');
        });
    }
    static setGranjaProductorRatio(valor: number) {
      Parametros.Granja_Productor_Ratio = valor;
        DBlocal.db.get('parametros').then(function (doc) {
          doc.Granja_Productor_Ratio = valor;
          return DBlocal.db.put(doc);
        }).then(function () {
          return DBlocal.db.get('parametros');
        });
    }
    static setGranjaAlmacenCapacidad(valor: number) {
      Parametros.Granja_Almacen_Capacidad = valor;
        DBlocal.db.get('parametros').then(function (doc) {
          doc.Granja_Almacen_Capacidad = valor;
          return DBlocal.db.put(doc);
        }).then(function () {
          return DBlocal.db.get('parametros');
        });
    }
    static setGranjaCosechaTamanyo(valor: number) {
      Parametros.Granja_Cosecha_Tamanyo = valor;
        DBlocal.db.get('parametros').then(function (doc) {
          doc.Granja_Cosecha_Tamanyo = valor;
          return DBlocal.db.put(doc);
        }).then(function () {
          return DBlocal.db.get('parametros');
        });
    }
    static setGranjaCosechaFrecuencia(valor: number) {
      Parametros.Granja_Cosecha_Frecuencia = valor;
        DBlocal.db.get('parametros').then(function (doc) {
          doc.Granja_Cosecha_Frecuencia = valor;
          return DBlocal.db.put(doc);
        }).then(function () {
          return DBlocal.db.get('parametros');
        });
    }
    static setGranjaNumTotal(valor: number) {
      Parametros.Granja_Num_Total = valor;
        DBlocal.db.get('parametros').then(function (doc) {
          doc.Granja_Num_Total = valor;
          return DBlocal.db.put(doc);
        }).then(function () {
          return DBlocal.db.get('parametros');
        });
    }


    static getSerreriaNumTotal() {
      DBlocal.db.get('parametros').then(function (doc) {
        console.log('parametros setSerreriaNumTotal', doc.Serreria_Num_Total);
        return Parametros.Serreria_Num_Total = doc.Serreria_Num_Total;
      });
    }

    static setSerreriaNumTotal(valor: number) {
      Parametros.Serreria_Num_Total = valor;
        DBlocal.db.get('parametros').then(function (doc) {
          doc.Serreria_Num_Total = valor;
          return DBlocal.db.put(doc);
        }).then(function () {
          return DBlocal.db.get('parametros');
        });
    }

    static getOroInicial() {
        DBlocal.db.get('parametros').then(function (doc) {
            return Parametros.oroInicial = doc.Oro_Inicial;
        });
    }

    static setOroInicial(valor: number) {
        Parametros.oroInicial = valor;
        DBlocal.db.get('parametros').then(function (doc) {
            doc.Oro_Inicial = valor;
            return DBlocal.db.put(doc);
          }).then(function () {
            return DBlocal.db.get('parametros');
          });
    }
}
