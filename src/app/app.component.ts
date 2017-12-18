import { Component } from '@angular/core';

import { Palacio } from './clases/juego/Edificio';
import { CentroDeInvestigacion } from './clases/juego/CentroDeInvestigacion';
import { Dispatcher } from './clases/juego/Dispatcher';
import { Punto } from './clases/juego/Punto';
import { Cuartel } from './clases/juego/Edificio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myDispatcher: Dispatcher;
  myPalacio: Palacio;
  myCuartel: Cuartel;

  title = 'Satrapía';
  cantidad: number;

  constructor() {
    this.myDispatcher = new Dispatcher ();

    this.myPalacio = new Palacio (1, 'Palacio de Makoki', this.myDispatcher, new Punto (0, 0));
    this.myPalacio.setPalacio();

    const myCI = new CentroDeInvestigacion (1, 'DSIC', this.myDispatcher, new Punto (0, 0), this.myPalacio);
    this.myPalacio.setCentroDeInvestigacionPalacio (myCI);

    this.myCuartel = new Cuartel (1, 'Centro de reclutamiento', this.myDispatcher, this.myPalacio.getPosicion(), this.myPalacio);
    myCI.compraInvestigacion([2, 1, 1]);
    this.myCuartel.entrenaCivilesConHonda();

    this.runDispatcher();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async runDispatcher() {
    while (true) {
      this.myDispatcher.ejecuta();
      this.cantidad = this.myPalacio.getOroActual();
      await this.sleep(1000);
    }
  }
}



