import { Localidad, Provincia } from './Imperio';
import { Palacio } from './Palacio';
import { CentroDeInvestigacion } from './CentroDeInvestigacion';
import { Silos, Cuartel, MinaDeOro } from './Edificio';
import { Punto } from './Punto';
import { Granja } from './Granja';
import { Serreria } from './Serreria';

class Capital extends Localidad {
  protected palacio: Palacio;
  protected centroDeInvestigacion: CentroDeInvestigacion;
  protected silos: Silos;
  protected cuartel: Cuartel;

  protected minasDeOro: Array<MinaDeOro>;
  protected granjas: Array<Granja>;
  protected serrerias: Array<Serreria>;

  constructor(id: number, nombre: string, provincia: Provincia, posicion: Punto ) {
    super(id, nombre, true, provincia, 50, posicion);

    this.minasDeOro = Array();
    this.granjas = Array();
    this.serrerias = Array();
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

  public addGranja(g: Granja) { this.granjas.push(g); }
  public getGranjas() { return this.granjas; }

  public addSerreria(s: Serreria) { this.serrerias.push(s); }
  public getSerrerias() { return this.serrerias; }
}

export { Capital };
