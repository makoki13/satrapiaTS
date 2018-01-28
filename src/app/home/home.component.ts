import { Component, OnInit } from '@angular/core';
import { PalacioComponent } from './palacio/palacio.component';

import { Capital } from '../clases/juego/Capital';
import { Provincia, Imperio } from '../clases/juego/Imperio';
import { Palacio } from '../clases/juego/Palacio';

import { Dispatcher } from '../clases/juego/Dispatcher';
import { Jugador, TipoJugador } from '../clases/juego/Jugador';
import { Punto } from '../clases/juego/Punto';
import {Routes, RouterModule, Router} from '@angular/router';

import {RoutingModule} from './home.routing';
import { MinaDeOro, Cuartel, Silos, TipoEdificio } from '../clases/juego/Edificio';
import { CentroDeInvestigacion } from '../clases/juego/CentroDeInvestigacion';
import { Almacen } from '../clases/juego/Almacen';
import { COMIDA, MADERA } from '../clases/juego/Recurso';
import { DBlocal } from '../clases/tools/Persistencia';
import { Parametros } from '../clases/juego/Parametros';
import { Granja } from '../clases/juego/Granja';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
  static myImperio: Imperio;
  static myCapital: Capital;
  static myDispatcher: Dispatcher;
  static minaDeOro: MinaDeOro;
  static myJugador: Jugador;
  static myProvincia: Provincia;

  static edificioSeleccionado: TipoEdificio;

  static IDpartida: number;

  router: Router;

  public r1 = false;
  public r2 = false;
  public r3 = false;
  public r4 = false;
  public r5 = false;
  public r6 = false;

  constructor(private _router: Router) {
    this.router = _router;

    this.run();
  }

  private cargaClases() {
    HomeComponent.myDispatcher = new Dispatcher ();

    HomeComponent.myJugador = new Jugador (1, 1, 'Makoki', TipoJugador.EMPERADOR);

    HomeComponent.myImperio = new Imperio (1, 'Hispania', HomeComponent.myJugador, false);

    HomeComponent.myProvincia = new Provincia(1, 'Valencia', new Jugador(1, 1, 'Makoki', TipoJugador.EMPERADOR), false, false);

    HomeComponent.myCapital = new Capital(1, 'Gandia', HomeComponent.myProvincia, new Punto(20, 25));

    const myPalacio: Palacio = new Palacio (1, 'Palacio de Makoki', HomeComponent.myCapital, HomeComponent.myDispatcher);

    const myCI: CentroDeInvestigacion = new CentroDeInvestigacion (1, 'DSIC', HomeComponent.myCapital, HomeComponent.myDispatcher);

    const myCuartel: Cuartel = new Cuartel (1, 'Centro de reclutamiento', HomeComponent.myCapital, HomeComponent.myDispatcher);

    const mySilos: Silos = new Silos(3, 'Silos de la ciudad', HomeComponent.myCapital, HomeComponent.myDispatcher);
    const almacenAlimentos: Almacen = new Almacen (1, 'Silo comida', COMIDA, HomeComponent.myCapital.getPosicion(), 5000);
    mySilos.addAlmacen (almacenAlimentos);
    const almacenMadera: Almacen = new Almacen (1, 'Silo madera', MADERA, HomeComponent.myCapital.getPosicion(), 5000);
    mySilos.addAlmacen (almacenMadera);
  }

  async run() {
    console.log('home.component run 1');
    const myself = this;
    try {
      // await DBlocal.inicializa();
      console.log('home.component run 2');
      await Parametros.inicializa('parametros').then (function() {
        console.log('home.component run 3');
        Granja.costeConstruccion = Parametros.Granja_Construccion_Coste;

        HomeComponent.IDpartida = Parametros.IDpartida;
        console.log('home.component constructor', Parametros.oroInicial);

      }).then( function() {
        // console.log('home.component constructor', Granja.costeConstruccion);
        myself.runDispatcher();
        // console.log('runDispatcher');
      });
    } catch (err) {
      console.log('err', err);
    }
    // console.log('home.component run 2');

    // this.moveToLogin();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async runDispatcher() {
    while (true) {
      HomeComponent.myDispatcher.ejecuta();
      await this.sleep(1000);
    }
  }

  ngOnInit() { this.cargaClases(); }

  public moveToHome() {
  }

  public moveToPalacio() {

  }

  private anula () {
    this.r1 = this.r2 = this.r3 = this.r4 = this.r5 = this.r6 =false;
  }

  public activa(ordinal) {
    this.anula();
    switch (ordinal) {
      case 1: this.r1 = true; break;
      case 2: this.r2 = true; break;
      case 3: this.r3 = true; break;
      case 4: this.r4 = true; break;
      case 5: this.r5 = true; break;
      case 6: this.r6 = true; break;
    }
  }

  public getNombreImperio() { return HomeComponent.myImperio.getNombre(); }
  public getNombrePais() { return HomeComponent.myProvincia.getNombre(); }
  public getNombreCiudad() { return HomeComponent.myCapital.getNombre(); }
  public getOro() {return HomeComponent.myCapital.getPalacio().getOroActual(); }

  public setIDpartida(partida: number) { HomeComponent.IDpartida = partida; }
  public getIDpartida() { return HomeComponent.IDpartida; }
}
