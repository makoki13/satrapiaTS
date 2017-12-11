class Punto {
  private tipoDeTerreno: TipoTerreno;
  private region: number; // Geografia fisica
  private provincia: number; // Geografia politica

  static sonIguales(p: Punto, q: Punto)  {
    return ( (p.getX() === q.getX()) && (p.getY() === q.getY()) );
  }

  constructor(private x: number, private y: number, private z?: number) {

  }

  setAltura (z: number) { this.z = z; }

  getX() { return this.x; }
  getY() { return this.y; }
}

enum TipoTerreno {Sin_Definir, Prado, Bosque, Mar, Agua_Poco_Profunda}

export { Punto };
export { TipoTerreno };
