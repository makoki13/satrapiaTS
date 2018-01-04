import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { HomeComponent } from './../home.component';

import { Palacio } from '../../clases/juego/Palacio';
import { CentroDeInvestigacion } from '../../clases/juego/CentroDeInvestigacion';
import { Dispatcher } from '../../clases/juego/Dispatcher';
import { Punto } from '../../clases/juego/Punto';
import { Cuartel } from '../../clases/juego/Edificio';
import { Capital } from '../../clases/juego/Capital';
import { Provincia } from '../../clases/juego/Imperio';
import { Jugador, TipoJugador } from '../../clases/juego/Jugador';

@Component({
  selector: 'app-palacio',
  templateUrl: './palacio.component.html',
  styleUrls: ['./palacio.component.css']
})

@Injectable()
export class PalacioComponent implements OnInit {
  myCapital: Capital;
  myDispatcher: Dispatcher;
  myPalacio: Palacio;

  title = 'Satrapía';

  constructor() {
    this.myCapital = HomeComponent.myCapital;
    this.myDispatcher = HomeComponent.myDispatcher;
    this.myPalacio = this.myCapital.getPalacio();
  }

  ngOnInit() {
  }
}
