import { HomeComponent } from './../home.component';
import { HomeModule } from './../home.module';
import { Component, OnInit } from '@angular/core';
import { CentroDeInvestigacion, TipoItemInvestigacion, TipoSubInvestigacion } from '../../clases/juego/CentroDeInvestigacion';
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
import { CivilConHonda } from '../../clases/juego/Recurso';

import {MatListModule} from '@angular/material/list';
import { Mercado } from '../../clases/juego/Mercado';
import { Embajada } from '../../clases/juego/Embajada';
import { Taberna } from '../../clases/juego/Taberna';
import { ElementRef } from '@angular/core/src/linker/element_ref';

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
  myMercado: Mercado;
  myEmbajada: Embajada;
  myTaberna: Taberna;

  title = 'Satrapía';

  investigationSeleccionada: any = null;
  subinvestigationSeleccionada: any = null;

  public verCI = 'inline-block';
  public verSilos = 'none';
  public verCuartel = 'none';
  public verMercado = 'none';
  public verEmbajada = 'none';
  public verTaberna = 'none';

  public investigacionActual: TipoInvestigacion = null;
  public subInvestigacionActual: TipoSubInvestigacion = null;

  constructor() {
    this.myCapital = HomeComponent.myCapital;
    this.myDispatcher = HomeComponent.myDispatcher;
    this.mySilos = this.myCapital.getSilos();

    this.myCI = this.myCapital.getCentroDeInvestigacion();
    this.investigacionActual = this.myCI.getLista()[0];
    this.subInvestigacionActual = this.investigacionActual.getLista()[0];

    this.myCuartel = this.myCapital.getCuartel();
    this.myMercado = this.myCapital.getMercado();
    this.myEmbajada = this.myCapital.getEmbajada();
    this.myTaberna = this.myCapital.getTaberna();
  }

  getAlmacenes() { return this.mySilos.getLista(); }
  getInvestigaciones() { return this.myCI.getLista(); }

  public getColorInvestigacion(item: TipoItemInvestigacion) {
    if (item.estaSiendoInvestigada()) { return 'red'; }

    if (item.getConseguido() === true) { return 'black'; }
    const importe = item.getPrecio();
    if (importe > this.myCapital.getPalacio().getOroActual()) { return 'gray'; }

    const indiceActual = item.getID();
    if (indiceActual > 1) {
      // if (item.getID() === 2) {console.log(item.getNombre() + ':' + (indiceActual - 1).toString()); }
      if  (item.getSubTipo().estaInvestigada(indiceActual - 2) === false) { return 'gray'; }
    }

    return 'green';
  }

  public investiga (item: TipoItemInvestigacion) {
    this.myCI.iniciaInvestigacion (item.getSubTipo().getTipo().getID(), item.getSubTipo().getID(), item.getID(), this.myCapital);
  }

  ngOnInit() {
  }

  public muestraCI() { this.verCuartel = 'none'; this.verSilos = 'none'; this.verMercado = 'none'; this.verCI = 'inline-block';
    this.verEmbajada = 'none'; this.verTaberna = 'none'; }
  public muestraSilos() { this.verCuartel = 'none'; this.verCI = 'none'; this.verMercado = 'none'; this.verSilos = 'inline-block';
    this.verEmbajada = 'none'; this.verTaberna = 'none'; }
  public muestraCuartel() { this.verSilos = 'none'; this.verCI = 'none'; this.verMercado = 'none'; this.verCuartel = 'inline-block';
    this.verEmbajada = 'none'; this.verTaberna = 'none'; }
  public muestraMercado() { this.verSilos = 'none'; this.verCI = 'none'; this.verCuartel = 'none'; this.verMercado = 'inline-block';
    this.verEmbajada = 'none'; this.verTaberna = 'none'; }
  public muestraEmbajada() { this.verSilos = 'none'; this.verCI = 'none'; this.verCuartel = 'none'; this.verMercado = 'none';
    this.verEmbajada = 'inline-block'; this.verTaberna = 'none';  }
  public muestraTaberna() { this.verSilos = 'none'; this.verCI = 'none'; this.verCuartel = 'none'; this.verMercado = 'none';
    this.verEmbajada = 'none'; this.verTaberna = 'inline-block';  }

  public activoCI() { return this.verCI; }
  public activoSilos() { return this.verSilos; }
  public activoCuartel() { return this.verCuartel; }
  public activoMercado() { return this.verMercado; }
  public activoEmbajada() { return this.verEmbajada; }
  public activoTaberna() { return this.verTaberna; }

  public setInvestigacionActual(o: any, investigacion: TipoInvestigacion) {
    if (this.investigationSeleccionada !== null) { this.investigationSeleccionada.style = 'background-color: white'; }
    this.investigationSeleccionada = o.currentTarget;
    o.currentTarget.style = 'background-color:pink;';
    this.investigacionActual = investigacion;
    this.subInvestigacionActual = this.investigacionActual.getLista()[0];
  }
  public setSubinvestigacionActual(o: any, subinvestigacion: TipoSubInvestigacion) {
    if (this.subinvestigationSeleccionada !== null) { this.subinvestigationSeleccionada.style = 'background-color: white'; }
    this.subinvestigationSeleccionada = o.currentTarget;
    o.currentTarget.style = 'background-color:pink;';
    this.subInvestigacionActual = subinvestigacion;
  }

  public getStatusMercado() { return this.myCapital.getMercado().getStatus(); }
  public getStatusTaberna() { return this.myCapital.getTaberna().getStatus(); }
  public getStatusEmbajada() { return this.myCapital.getEmbajada().getStatus(); }
}
