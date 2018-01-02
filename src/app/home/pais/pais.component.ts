import { Component, OnInit } from '@angular/core';
import { Imperio } from '../../clases/juego/Imperio';
import { Dispatcher } from '../../clases/juego/Dispatcher';
import { Jugador, TipoJugador } from '../../clases/juego/Jugador';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  myImperio: Imperio;
  myJugador: Jugador;
  myDispatcher: Dispatcher;

  constructor() {
    this.myJugador = new Jugador (1, 1, 'Makoki', TipoJugador.EMPERADOR);
    this.myImperio = new Imperio (1, 'Valencia', this.myJugador, false);
    this.myDispatcher = new Dispatcher ();
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
