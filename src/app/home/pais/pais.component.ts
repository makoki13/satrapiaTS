import { Component, OnInit } from '@angular/core';

import { HomeComponent } from './../home.component';

import { Punto } from '../../clases/juego/Punto';
import { Imperio } from '../../clases/juego/Imperio';
import { Provincia } from '../../clases/juego/Imperio';
import { Dispatcher } from '../../clases/juego/Dispatcher';
import { Jugador, TipoJugador } from '../../clases/juego/Jugador';
import { MinaDeOro } from '../../clases/juego/Edificio';
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
  myCapital: Capital;
  myDispatcher: Dispatcher;
  myPalacio: Palacio;
  myMinasDeOro: Array <MinaDeOro>;

  constructor() {
    this.myImperio = HomeComponent.myImperio;
    this.myCapital = HomeComponent.myCapital;
    this.myDispatcher = HomeComponent.myDispatcher;
    this.myJugador = HomeComponent.myJugador;
    this.myMinasDeOro = this.myCapital.getMinasDeOro();
  }

  ngOnInit() {
  }

  getMinasDeOro() { return this.myCapital.getMinasDeOro(); }
}
