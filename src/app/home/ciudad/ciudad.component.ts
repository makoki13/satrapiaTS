import { HomeComponent } from './../home.component';
import { HomeModule } from './../home.module';
import { Component, OnInit } from '@angular/core';
import { CentroDeInvestigacion } from '../../clases/juego/CentroDeInvestigacion';
import { TipoInvestigacion } from '../../clases/juego/CentroDeInvestigacion';
import { Capital } from '../../clases/juego/Capital';
import { Dispatcher } from '../../clases/juego/Dispatcher';
import { Provincia } from '../../clases/juego/Imperio';
import { Jugador, TipoJugador } from '../../clases/juego/Jugador';
import { Punto } from '../../clases/juego/Punto';
import { Cuartel, Silos } from '../../clases/juego/Edificio';
import { Almacen } from '../../clases/juego/Almacen';
import { COMIDA } from '../../clases/juego/Recurso';
import { UnidadMilitar } from '../../clases/juego/Recurso';

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
    this.myCapital = HomeComponent.myCapital;
    this.myDispatcher = HomeComponent.myDispatcher;
    this.mySilos = this.myCapital.getSilos();

    this.myCI = this.myCapital.getCentroDeInvestigacion();
    this.myCI.compraInvestigacion([2, 1, 1]); // Test solamente

    this.myCuartel =  this.myCapital.getCuartel();
    this.myCuartel.entrenaCivilesConHonda(); // Test solamente
  }

  getAlmacenes() { return this.mySilos.getLista(); }
  getInvestigaciones() { return this.myCI.getLista(); }

  ngOnInit() {
  }
}
