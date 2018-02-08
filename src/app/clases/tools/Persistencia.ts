import PouchDB from 'pouchdb';

export class DBlocal {
  static db = null;

  static async inicializa () {
    // console.log('inicializa db', 'inicio');
    DBlocal.db = new PouchDB('satrapia');
    // console.log('inicializa db', 'fin');
    /*
    const doc = {
      '_id': 'partida',
      'identificador': '00001'
    };
    DBlocal.db.put(doc);
    */
    /*
    const doc = {
      '_id': 'parametros',
      'Granja_Construccion_Coste': 110,
      'Granja_Construccion_Tiempo': 10,
      'Granja_Productor_CantidadInicial': 0,
      'Granja_Productor_CantidadMaxima': 0, // Ilimitado
      'Granja_Productor_Ratio': 1,
      'Granja_Almacen_Capacidad': 5,
      'Granja_Cosecha_Tamanyo': 1,
      'Granja_Cosecha_Frecuencia': 1,

      'Serreria_Construccion_Coste': 110,
      'Serreria_Construccion_Tiempo': 10,
      'Serreria_Productor_CantidadInicial': 0,
      'Serreria_Productor_CantidadMaxima': 0, // Ilimitado
      'Serreria_Productor_Ratio': 1,
      'Serreria_Almacen_Capacidad': 5,
      'Serreria_Cosecha_Tamanyo': 1,
      'Serreria_Cosecha_Frecuencia': 1,

      'Transporte_Tiempo_Recalculo_Ruta': 1,
      'Transporte_Velocidad': 0.83, // m/s

      'Filon_Vacio': 0
    };

    DBlocal.db.put(doc);
    */
  }

  static getRegistro(registro) {
    DBlocal.db.get(registro).then(function (doc) {
      return (doc);
    });
  }

}
