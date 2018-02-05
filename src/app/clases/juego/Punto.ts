import { TipoEdificio } from './Edificio';

class Punto {
  private tipoDeTerreno: TipoTerreno;
  private region: number; // Geografia fisica
  private provincia: number; // Geografia politica
  private edificio: TipoEdificio;

  static sonIguales(p: Punto, q: Punto)  {
    return ( (p.getX() === q.getX()) && (p.getY() === q.getY()) );
  }

  constructor(private x: number, private y: number, private z?: number) {
    this.edificio = null;
  }

  setAltura (z: number) { this.z = z; }

  setEdificio(e: TipoEdificio) { this.edificio = e; }

  getX() { return this.x; }
  getY() { return this.y; }
  getEdificio() { return this.edificio; }
  getTerreno() { return this.tipoDeTerreno; }
}

enum TipoTerreno {Sin_Definir, Prado, Bosque, Mar, Agua_Poco_Profunda}

export { Punto };
export { TipoTerreno };
