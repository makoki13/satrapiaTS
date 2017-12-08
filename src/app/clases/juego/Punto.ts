class Punto {
  private tipoDeTerreno: TipoTerreno;
  private region: number; // Geografia fisica
  private provincia: number; // Geografia politica

  constructor(private x: number, private y: number, private z?: number) {

  }

  setAltura (z: number) { this.z = z; }
}

enum TipoTerreno {Sin_Definir, Prado, Bosque, Mar, Agua_Poco_Profunda}

export { Punto };
export { TipoTerreno };
