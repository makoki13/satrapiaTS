import { Component, OnInit } from '@angular/core';
import { CentroDeInvestigacion } from '../../clases/juego/CentroDeInvestigacion';
import { Capital } from '../../clases/juego/Capital';
import { Dispatcher } from '../../clases/juego/Dispatcher';
import { Provincia } from '../../clases/juego/Imperio';
import { Jugador } from '../../clases/juego/Jugador';
import { Punto } from '../../clases/juego/Punto';
import { Cuartel, Silos } from '../../clases/juego/Edificio';
import { Almacen } from '../../clases/juego/Almacen';
import { COMIDA } from '../../clases/juego/Recurso';

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
  mySilos: Silos;

  title = 'Satrapía';

  constructor() {
    this.myCapital = new Capital(1, 'Gandia', true, new Provincia(1, 'Valencia', new Jugador(), false, false), 0, new Punto(0, 0));
    this.myDispatcher = new Dispatcher ();

    this.mySilos = new Silos(3, 'Silos de la ciudad', this.myCapital, this.myDispatcher);
    const almacenAlimentos: Almacen = new Almacen (1, 'Silo comida', [COMIDA], this.myCapital.getPosicion(), 5000);
    this.mySilos.addAlmacen (almacenAlimentos);

    this.myCI = new CentroDeInvestigacion (1, 'DSIC', this.myCapital, this.myDispatcher);
    this.myCI.compraInvestigacion([2, 1, 1]);

    this.myCuartel = new Cuartel (1, 'Centro de reclutamiento', this.myCapital, this.myDispatcher);
    this.myCuartel.entrenaCivilesConHonda();

    this.runDispatcher();
  }

  getAlmacenes() { return this.mySilos.getLista(); }
  getInvestigaciones() { return this.myCI.getLista(); }

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
