import { PaisComponent } from './pais.component';
import {Component} from '@angular/core';
import { Punto } from '../../clases/juego/Punto';
import { MinaDeOro, TipoEdificio } from '../../clases/juego/Edificio';

import { HomeComponent } from './../home.component';

import { Capital } from '../../clases/juego/Capital';
import { Provincia } from '../../clases/juego/Imperio';
import { Dispatcher } from '../../clases/juego/Dispatcher';
import { Granja } from '../../clases/juego/Granja';
import { Serreria } from '../../clases/juego/Serreria';

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

    // console.log (this.elementos) ;
  }

  construyeMinaDeOro() {
    const minaDeOro = new MinaDeOro (1, 'Mina de oro de la sierra', this.myCapital, this.myDispatcher);
    return -1;
  }

  construyeGranja() {
    const granja = new Granja (1, 'Granja', this.myCapital, this.myDispatcher);
    return -1;
  }

  construyeSerreria() {
    const serreria = new Serreria (1, 'Serreria', this.myCapital, this.myDispatcher);
    return -1;
  }

  infoCelda(x: number, y: number) {
    if (HomeComponent.edificioSeleccionado != null) {
      const edificio = HomeComponent.edificioSeleccionado;
      this.elementos[x][y].setEdificio(edificio);
      let precio = 0; let importeTotal = 0; let cantidadObtenida = 0;
      switch (edificio) {
        case TipoEdificio.MINA_DE_ORO:
          // this.setStatus ('Construendo mina de oro...');
          precio = MinaDeOro.costeConstruccion;
          importeTotal = precio * 1;
          cantidadObtenida = this.myCapital.getPalacio().gastaOro(importeTotal);
          if (cantidadObtenida < importeTotal ) {
            this.myCapital.getPalacio().entraOro(cantidadObtenida);
            alert (' Se aborta la construcción de la mina de oro: Oro insuficiente');
            return false;
          }
          this.myDispatcher.addTareaRepetitiva(this, 'construyeMinaDeOro', MinaDeOro.tiempoContruccion);
          break;

        case TipoEdificio.GRANJA:
          // this.setStatus ('Construendo mina de oro...');
          precio = Granja.costeConstruccion;
          importeTotal = precio * 1;
          cantidadObtenida = this.myCapital.getPalacio().gastaOro(importeTotal);
          if (cantidadObtenida < importeTotal ) {
            this.myCapital.getPalacio().entraOro(cantidadObtenida);
            alert (' Se aborta la construcción de la granja: Oro insuficiente');
            return false;
          }
          this.myDispatcher.addTareaRepetitiva(this, 'construyeGranja', Granja.tiempoContruccion);
          break;

        case TipoEdificio.SERRERIA:
          // this.setStatus ('Construendo mina de oro...');
          precio = Serreria.costeConstruccion;
          importeTotal = precio * 1;
          cantidadObtenida = this.myCapital.getPalacio().gastaOro(importeTotal);
          if (cantidadObtenida < importeTotal ) {
            this.myCapital.getPalacio().entraOro(cantidadObtenida);
            alert (' Se aborta la construcción de la serrería: Oro insuficiente');
            return false;
          }
          this.myDispatcher.addTareaRepetitiva(this, 'construyeSerreria', Serreria.tiempoContruccion);
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
        case TipoEdificio.GRANJA:
          color = 'green';
          break;
        case TipoEdificio.SERRERIA:
          color = 'brown';
          break;
      }
    }
    return color;
  }
}
