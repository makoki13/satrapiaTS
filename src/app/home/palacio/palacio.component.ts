import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

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
    this.myCapital = new Capital(1, 'Gandia',
      new Provincia(1, 'Valencia', new Jugador(1, 1, 'Makoki', TipoJugador.EMPERADOR), false, false),
      new Punto(0, 0));
    this.myDispatcher = new Dispatcher ();

    this.myPalacio = new Palacio (1, 'Palacio de Makoki', this.myCapital, this.myDispatcher);

    this.runDispatcher();
  }

  ngOnInit() {
  }


  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async runDispatcher() {
    while (true) {
      this.myDispatcher.ejecuta();
      await this.sleep(1000);
    }
  }

}
