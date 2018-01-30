import { Cantera } from './Cantera';
import { Localidad, Provincia } from './Imperio';
import { Palacio } from './Palacio';
import { CentroDeInvestigacion } from './CentroDeInvestigacion';
import { Silos, Cuartel, MinaDeOro } from './Edificio';
import { Punto } from './Punto';
import { Granja } from './Granja';
import { Serreria } from './Serreria';
import { Mercado } from './Mercado';
import { Embajada } from './Embajada';
import { Taberna } from './Taberna';

class Capital extends Localidad {
  protected palacio: Palacio;
  protected centroDeInvestigacion: CentroDeInvestigacion;
  protected silos: Silos;
  protected cuartel: Cuartel;
  protected mercado: Mercado;
  protected embajada: Embajada;
  protected taberna: Taberna;

  protected minasDeOro: Array<MinaDeOro>;
  protected granjas: Array<Granja>;
  protected serrerias: Array<Serreria>;
  protected canteras: Array<Cantera>;

  constructor(id: number, nombre: string, provincia: Provincia, posicion: Punto ) {
    super(id, nombre, true, provincia, 50, posicion);

    this.minasDeOro = Array();
    this.granjas = Array();
    this.serrerias = Array();
    this.canteras = Array();
  }

  public setPalacio (p: Palacio) { this.palacio = p; }
  public getPalacio () { return this.palacio; }

  public setCentroDeInvestigacion (c: CentroDeInvestigacion) { this.centroDeInvestigacion = c; }
  public getCentroDeInvestigacion () { return this.centroDeInvestigacion; }

  public setSilos (s: Silos) { this.silos = s; }
  public getSilos () { return this.silos; }

  public setCuartel (c: Cuartel) { this.cuartel = c; }
  public getCuartel () { return this.cuartel; }

  public setMercado (m: Mercado) { this.mercado = m; }
  public getMercado () { return this.mercado; }

  public setEmbajada (e: Embajada) { this.embajada = e; }
  public getEmbajada () { return this.embajada; }

  public setTaberna (t: Taberna) { this.taberna = t; }
  public getTaberna () { return this.taberna; }

  public addMinaDeOro(m: MinaDeOro) { this.minasDeOro.push(m); }
  public getMinasDeOro() { return this.minasDeOro; }

  public addGranja(g: Granja) { this.granjas.push(g); }
  public getGranjas() { return this.granjas; }

  public addSerreria(s: Serreria) { this.serrerias.push(s); }
  public getSerrerias() { return this.serrerias; }

  public addCantera(c: Cantera) { this.canteras.push(c); }
  public getCanteras() { return this.canteras; }
}

export { Capital };
