class Punto {
  private tipoDeTerreno: TipoTerreno;
  private region: number; // Geografia fisica
  private provincia: number; // Geografia politica

  constructor(private x: number, private y: number, private z: number) {

  }
}

enum TipoTerreno {Sin_Definir, Prado, Bosque, Mar, Agua_Poco_Profunda}

export {Punto};
export { TipoTerreno };
