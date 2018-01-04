import { Component, OnInit } from '@angular/core';
import { PalacioComponent } from './palacio/palacio.component';
import { Capital } from '../clases/juego/Capital';
import { Provincia } from '../clases/juego/Imperio';
import { Jugador, TipoJugador } from '../clases/juego/Jugador';
import { Punto } from '../clases/juego/Punto';
import {Routes, RouterModule, Router} from '@angular/router';

import {RoutingModule} from './home.routing';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
  static myCapital: Capital;

  router: Router;

  public r1 = false;
  public r2 = false;
  public r3 = false;
  public r4 = false;
  public r5 = false;

  constructor(private _router: Router) {
    this.router = _router;
    this.moveToPalacio();

    HomeComponent.myCapital = new Capital(1, 'Gandia',
      new Provincia(1, 'Valencia', new Jugador(1, 1, 'Makoki', TipoJugador.EMPERADOR), false, false),
      new Punto(0, 0));
  }

  ngOnInit() {}

  public moveToHome() {
  }

  public moveToPalacio() {
    console.log ('Move to palacio');
    // this.router.navigate(['home']);
  }

  private anula () {
    this.r1 = this.r2 = this.r3 = this.r4 = this.r5 = false;
  }
  public activa(ordinal) {
    this.anula();
    switch (ordinal) {
      case 1: this.r1 = true; break;
      case 2: this.r2 = true; break;
      case 3: this.r3 = true; break;
      case 4: this.r4 = true; break;
      case 5: this.r5 = true; break;
    }
  }
}
