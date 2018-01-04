import { Component, OnInit } from '@angular/core';
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
  // myMinasDeOro: Array <MinaDeOro>;

  constructor() {
    this.myDispatcher = new Dispatcher ();

    this.myJugador = new Jugador (1, 1, 'Makoki', TipoJugador.EMPERADOR);
    this.myImperio = new Imperio (1, 'Valencia', this.myJugador, false);
    this.myCapital = new Capital(1, 'Gandia',
      new Provincia(1, 'Valencia', new Jugador(1, 1, 'Makoki', TipoJugador.EMPERADOR), false, false),
      new Punto(0, 0));
    this.myPalacio = new Palacio (1, 'Palacio de Makoki', this.myCapital, this.myDispatcher);
    const miMinaDeOro = new MinaDeOro (2, 'Mina de la Sierra', this.myCapital, this.myDispatcher);

    this.runDispatcher();
  }

  ngOnInit() {
  }

  getMinasDeOro() { return this.myCapital.getMinasDeOro(); }

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