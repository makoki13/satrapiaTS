import { InformeComponent } from './informe.component';
import { MapaComponent } from './mapa.component';

import { Component, OnInit } from '@angular/core';

import {MatTableModule} from '@angular/material/table';

import {ViewChild} from '@angular/core';

import { HomeComponent } from './../home.component';

import { Punto } from '../../clases/juego/Punto';
import { Imperio } from '../../clases/juego/Imperio';
import { Provincia } from '../../clases/juego/Imperio';
import { Dispatcher } from '../../clases/juego/Dispatcher';
import { Jugador, TipoJugador } from '../../clases/juego/Jugador';
import { TipoEdificio, Edificio } from '../../clases/juego/Edificio';
import { Capital } from '../../clases/juego/Capital';
import { Palacio } from '../../clases/juego/Palacio';
import { Granja } from '../../clases/juego/Granja';
import { Serreria } from '../../clases/juego/Serreria';
import { Cantera } from '../../clases/juego/Cantera';
import { MinaDeOro } from '../../clases/juego/Mina';
import { MinaDeHierro } from './../../clases/juego/Mina';
import { Parametros } from '../../clases/juego/Parametros';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})

export class PaisComponent implements OnInit {
  static statusMinasDeOro = 'Construir';

  myImperio: Imperio;
  myJugador: Jugador;
  myProvincia: Provincia;
  myCapital: Capital;
  myDispatcher: Dispatcher;
  myPalacio: Palacio;
  myMinasDeOro: Array <MinaDeOro>;
  myGranjas: Array <Granja>;
  mySerrerias: Array <Serreria>;
  myCanteras: Array<Cantera>;
  myMinasDeHierro: Array<MinaDeHierro>;

  myInforme: InformeComponent;

  displayInforme = false;

  public static setStatusMinaDeOro(texto: string = 'Construir') { PaisComponent.statusMinasDeOro = texto; }

  constructor() {
    this.myImperio = HomeComponent.myImperio;
    this.myProvincia = HomeComponent.myProvincia;
    this.myCapital = HomeComponent.myCapital;
    this.myDispatcher = HomeComponent.myDispatcher;
    this.myJugador = HomeComponent.myJugador;
    this.myMinasDeOro = this.myCapital.getMinasDeOro();
    this.myGranjas = this.myCapital.getGranjas();
    this.mySerrerias = this.myCapital.getSerrerias();
    this.myCanteras = this.myCapital.getCanteras();
    this.myMinasDeHierro = this.myCapital.getMinasDeHierro();

    this.myInforme = new InformeComponent();

    HomeComponent.edificioSeleccionado = null;
  }

  ngOnInit() {
  }

  setTipoEleccion(edificio: TipoEdificio) {
    HomeComponent.edificioSeleccionado = edificio;
  }

  getDisplayInforme() {
    console.log ('getDisplayInforme', this.displayInforme);
    return this.displayInforme;
  }

  setMinaDeOro() { this.setTipoEleccion(TipoEdificio.MINA_DE_ORO); this.displayInforme = !this.displayInforme; }
  getMinasDeOro() { return this.myCapital.getMinasDeOro(); }
  numeroMinasDeOro() { return this.myCapital.getMinasDeOro().length; }
  numeroTotalDeMinasDeOro() { return Parametros.MinaDeOro_Num_Total; }
  costeMinaDeOro() { return MinaDeOro.costeConstruccion; }
  tiempoMinaDeOro() { return MinaDeOro.tiempoContruccion; }
  statusMinaDeOro() {
    return PaisComponent.statusMinasDeOro;
  }

  setGranja() { this.setTipoEleccion(TipoEdificio.GRANJA); }
  getGranjas() { return this.myCapital.getGranjas(); }
  numeroGranjas() { return this.myCapital.getGranjas().length; }
  costeGranja() { return Granja.costeConstruccion; }
  tiempoGranja() { return Granja.tiempoContruccion; }

  setSerreria() { this.setTipoEleccion(TipoEdificio.SERRERIA); }
  getSerrerias() { return this.myCapital.getSerrerias(); }
  numeroSerrerias() { return this.myCapital.getSerrerias().length; }
  costeSerreria() { return Serreria.costeConstruccion; }
  tiempoSerreria() { return Serreria.tiempoContruccion; }

  setCantera() { this.setTipoEleccion(TipoEdificio.CANTERA_DE_PIEDRA); }
  getCanteras() { return this.myCapital.getCanteras(); }
  numeroCanteras() { return this.myCapital.getCanteras().length; }
  costeCantera() { return Cantera.costeConstruccion; }
  tiempoCantera() { return Cantera.tiempoContruccion; }

  setMinaDeHierro() { this.setTipoEleccion(TipoEdificio.MINA_DE_HIERRO); }
  getMinasDeHierro() { return this.myCapital.getMinasDeHierro(); }
  numeroMinasDeHierro() { return this.myCapital.getMinasDeHierro().length; }
  costeMinaDeHierro() { return MinaDeHierro.costeConstruccion; }
  tiempoMinaDeHierro() { return MinaDeHierro.tiempoContruccion; }
}
