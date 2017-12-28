import { Component, OnInit } from '@angular/core';
import { CentroDeInvestigacion } from '../../clases/juego/CentroDeInvestigacion';
import { Capital } from '../../clases/juego/Capital';
import { Dispatcher } from '../../clases/juego/Dispatcher';
import { Provincia } from '../../clases/juego/Imperio';
import { Jugador } from '../../clases/juego/Jugador';
import { Punto } from '../../clases/juego/Punto';
import { Cuartel } from '../../clases/juego/Edificio';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {
  myCapital: Capital;
  myDispatcher: Dispatcher;
  myCI: CentroDeInvestigacion;
  myCuartel: Cuartel;

  title = 'Satrapía';

  constructor() {
    this.myCapital = new Capital(1, 'Gandia', true, new Provincia(1, 'Valencia', new Jugador(), false, false), 0, new Punto(0, 0));
    this.myDispatcher = new Dispatcher ();

    this.myCI = new CentroDeInvestigacion (1, 'DSIC', this.myCapital, this.myDispatcher);
    this.myCI.compraInvestigacion([2, 1, 1]);

    this.myCuartel = new Cuartel (1, 'Centro de reclutamiento', this.myCapital, this.myDispatcher);

    this.myCuartel.entrenaCivilesConHonda();

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
