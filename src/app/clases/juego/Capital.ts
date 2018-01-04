import { Localidad, Provincia } from './Imperio';
import { Palacio } from './Palacio';
import { CentroDeInvestigacion } from './CentroDeInvestigacion';
import { Silos, Cuartel, MinaDeOro } from './Edificio';
import { Punto } from './Punto';

class Capital extends Localidad {
  protected palacio: Palacio;
  protected centroDeInvestigacion: CentroDeInvestigacion;
  protected silos: Silos;
  protected cuartel: Cuartel;

  protected minasDeOro: Array<MinaDeOro>;

  constructor(id: number, nombre: string, provincia: Provincia, posicion: Punto ) {
    super(id, nombre, true, provincia, 50, posicion);

    this.minasDeOro = Array();
  }

  public setPalacio (p: Palacio) { this.palacio = p; }
  public getPalacio () { return this.palacio; }

  public setCentroDeInvestigacion (c: CentroDeInvestigacion) { this.centroDeInvestigacion = c; }
  public getCentroDeInvestigacion () { return this.centroDeInvestigacion; }

  public setSilos (s: Silos) { this.silos = s; }
  public getSilos () { return this.silos; }

  public setCuartel (c: Cuartel) { this.cuartel = c; }
  public getCuartel () { return this.cuartel; }

  public addMinaDeOro(m: MinaDeOro) { this.minasDeOro.push(m); }
  public getMinasDeOro() { return this.minasDeOro; }
}

export { Capital };
