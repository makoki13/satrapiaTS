import { PaisComponent } from './pais.component';
import {Component} from '@angular/core';
import { Punto } from '../../clases/juego/Punto';
import { MinaDeOro, TipoEdificio } from '../../clases/juego/Edificio';

import { HomeComponent } from './../home.component';

import { Capital } from '../../clases/juego/Capital';
import { Provincia } from '../../clases/juego/Imperio';
import { Dispatcher } from '../../clases/juego/Dispatcher';

@Component({
  selector: 'app-mapa',
  styleUrls: ['./mapa.component.css'],
  templateUrl: './mapa.component.html',
})

export class MapaComponent {
  myCapital: Capital;
  myProvincia: Provincia;
  myDispatcher: Dispatcher;

  filas = 40;
  columnas = 50;

  elementos: Punto[][];

  constructor() {

    this.myCapital = HomeComponent.myCapital;
    this.myProvincia = HomeComponent.myProvincia;
    this.myDispatcher = HomeComponent.myDispatcher;

    let i = 0; let j = 0;
    this.elementos = [];
    for (i = 0; i < this.filas; i++) {
      this.elementos[i] =  [];
      for (j = 0; j < this.columnas; j++) {
        this.elementos[i][j] = new Punto(i, j);
        if ( (this.myCapital.getPosicion().getX() === i ) && (this.myCapital.getPosicion().getY() === j) ) {
          this.elementos[i][j].setEdificio(TipoEdificio.PALACIO);
        }
      }
    }

    console.log (this.elementos) ;
  }

  infoCelda(x: number, y: number) {
    // if (this.myProvincia)

    if (HomeComponent.edificioSeleccionado != null) {
      const edificio = HomeComponent.edificioSeleccionado;
      // alert('HC' + HomeComponent.edificioSeleccionado + ' : ' + edificio);
      switch (edificio) {
        case TipoEdificio.MINA_DE_ORO:
          this.elementos[x][y].setEdificio(edificio);
          const minaDeOro = new MinaDeOro (1, 'Mina de oro de la sierra', this.myCapital, this.myDispatcher);
          break;
          default:
            alert('NOPE');
            break;
      }
    }
  }

  getColorCelda(x: number, y: number) {
    let color = 'white';
    const edificio = this.elementos[x][y].getEdificio();
    if ( edificio != null) {
      switch (edificio) {
        case TipoEdificio.PALACIO:
          color = 'black';
          break;
        case TipoEdificio.MINA_DE_ORO:
          color = 'yellow';
          break;
      }
    }
    return color;
  }
}
