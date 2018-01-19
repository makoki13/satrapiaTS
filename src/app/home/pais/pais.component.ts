import { MapaComponent } from './mapa.component';
import { Component, OnInit } from '@angular/core';

import {MatTableModule} from '@angular/material/table';

import {ViewChild} from '@angular/core';
// import {MatTableDataSource, MatTable} from '@angular/material';

import { HomeComponent } from './../home.component';

import { Punto } from '../../clases/juego/Punto';
import { Imperio } from '../../clases/juego/Imperio';
import { Provincia } from '../../clases/juego/Imperio';
import { Dispatcher } from '../../clases/juego/Dispatcher';
import { Jugador, TipoJugador } from '../../clases/juego/Jugador';
import { MinaDeOro, TipoEdificio, Edificio } from '../../clases/juego/Edificio';
import { Capital } from '../../clases/juego/Capital';
import { Palacio } from '../../clases/juego/Palacio';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})

export class PaisComponent implements OnInit {
  myImperio: Imperio;
  myJugador: Jugador;
  myProvincia: Provincia;
  myCapital: Capital;
  myDispatcher: Dispatcher;
  myPalacio: Palacio;
  myMinasDeOro: Array <MinaDeOro>;

  // edificioActual: TipoEdificio;

  constructor() {
    this.myImperio = HomeComponent.myImperio;
    this.myProvincia = HomeComponent.myProvincia;
    this.myCapital = HomeComponent.myCapital;
    this.myDispatcher = HomeComponent.myDispatcher;
    this.myJugador = HomeComponent.myJugador;
    this.myMinasDeOro = this.myCapital.getMinasDeOro();

    HomeComponent.edificioSeleccionado = null;
  }

  ngOnInit() {
  }

  setTipoEleccion(edificio: TipoEdificio) {
    HomeComponent.edificioSeleccionado = edificio;
  }

  setMinaDeOro() { this.setTipoEleccion(TipoEdificio.MINA_DE_ORO); }

  construye() {
    switch (HomeComponent.edificioSeleccionado) {
      case TipoEdificio.MINA_DE_ORO:
        HomeComponent.edificioSeleccionado = null;
        // this.addMinaDeOro();
        break;
    }
  }

  addMinaDeOro() {
    const minaDeOro = new MinaDeOro (1, 'Mina de oro de la sierra', this.myCapital, this.myDispatcher);
  }

  getMinasDeOro() { return this.myCapital.getMinasDeOro(); }
  numeroMinasDeOro() { return this.myCapital.getMinasDeOro().length; }
}
