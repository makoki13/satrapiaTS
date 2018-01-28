import { PalacioComponent } from './../palacio/palacio.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Parametros } from '../../clases/juego/Parametros';
import { HomeComponent } from './../home.component';
import { Granja } from '../../clases/juego/Granja';
import { Serreria } from '../../clases/juego/Serreria';
import { Transporte } from '../../clases/juego/Transporte';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {

  @ViewChild('granjaCosteConstruccion') granjaCosteConstruccion: ElementRef;
  @ViewChild('granjaTiempoConstruccion') granjaTiempoConstruccion: ElementRef;
  @ViewChild('granjaCantidadInicial') granjaCantidadInicial: ElementRef;
  @ViewChild('granjaCantidadMaxima') granjaCantidadMaxima: ElementRef;

  @ViewChild('serreriaCosteConstruccion') serreriaCosteConstruccion: ElementRef;
  @ViewChild('serreriaTiempoConstruccion') serreriaTiempoConstruccion: ElementRef;
  @ViewChild('serreriaCantidadInicial') serreriaCantidadInicial: ElementRef;
  @ViewChild('serreriaCantidadMaxima') serreriaCantidadMaxima: ElementRef;

  @ViewChild('transporteTiempoRecalculo') transporteTiempoRecalculo: ElementRef;
  @ViewChild('transporteVelocidad') transporteVelocidad: ElementRef;

  @ViewChild('oroInicial') oroInicial: ElementRef;

  myGranja: Granja;

  constructor() {

  }

  // GRANJA
  getGranjaCosteContruccion() {
    Granja.costeConstruccion = Parametros.Granja_Construccion_Coste;
    return Granja.costeConstruccion;
  }
  setGranjaCosteContruccion() {
    Parametros.Granja_Construccion_Coste = this.granjaCosteConstruccion.nativeElement.value;
    Parametros.setGranjaConstruccionCoste(this.granjaCosteConstruccion.nativeElement.value);
    Granja.costeConstruccion = this.granjaCosteConstruccion.nativeElement.value;
  }

  getGranjaTiempoContruccion() {
    return Granja.tiempoContruccion;
  }
  setGranjaTiempoContruccion() {
    Parametros.Granja_Construccion_Tiempo = this.granjaTiempoConstruccion.nativeElement.value;
    Granja.tiempoContruccion = this.granjaTiempoConstruccion.nativeElement.value;
  }

  getGranjaCantidadInicial() {
    return Granja.cantidadInicial;
  }
  setGranjaCantidadInicial() {
    Parametros.Granja_Productor_CantidadInicial = this.granjaCantidadInicial.nativeElement.value;
    Granja.cantidadInicial = this.granjaCantidadInicial.nativeElement.value;
  }

  getGranjaCantidadMaxima() {
    return Granja.cantidadInicial;
  }
  setGranjaCantidadMaxima() {
    Parametros.Granja_Productor_CantidadMaxima = this.granjaCantidadMaxima.nativeElement.value;
    Granja.cantidadMaxima = this.granjaCantidadMaxima.nativeElement.value;
  }

  // SERRERIA
  getSerreriaCosteContruccion() {
    return Serreria.costeConstruccion;
  }
  setSerreriaCosteContruccion() {
    Parametros.Serreria_Construccion_Coste = this.serreriaCosteConstruccion.nativeElement.value;
    Serreria.costeConstruccion = this.serreriaCosteConstruccion.nativeElement.value;
  }

  getSerreriaTiempoContruccion() {
    return Serreria.tiempoContruccion;
  }
  setSerreriaTiempoContruccion() {
    Parametros.Serreria_Construccion_Tiempo = this.serreriaTiempoConstruccion.nativeElement.value;
    Serreria.tiempoContruccion = this.serreriaTiempoConstruccion.nativeElement.value;
  }

  getSerreriaCantidadInicial() {
    return Serreria.cantidadInicial;
  }
  setSerreriaCantidadInicial() {
    Parametros.Serreria_Productor_CantidadInicial = this.serreriaCantidadInicial.nativeElement.value;
    Serreria.cantidadInicial = this.serreriaCantidadInicial.nativeElement.value;
  }

  getSerreriaCantidadMaxima() {
    return Serreria.cantidadInicial;
  }
  setSerreriaCantidadMaxima() {
    Parametros.Serreria_Productor_CantidadMaxima = this.serreriaCantidadMaxima.nativeElement.value;
    Serreria.cantidadMaxima = this.serreriaCantidadMaxima.nativeElement.value;
  }

  // TRANSPORTE
  getTransporteTiempoRecalculo() {
    return Transporte.tiempoRecalculo;
  }
  setTransporteTiempoRecalculo() {
    Parametros.Transporte_Tiempo_Recalculo_Ruta = this.transporteTiempoRecalculo.nativeElement.value;
    Transporte.tiempoRecalculo = this.serreriaCantidadMaxima.nativeElement.value;
  }

  getTransporteVelocidad() {
    return Transporte.velocidad;
  }
  setTransporteVelocidad() {
    Parametros.Transporte_Velocidad = this.transporteVelocidad.nativeElement.value;
    Transporte.velocidad = this.transporteVelocidad.nativeElement.value;
  }

  getOroInicial() {
    return Parametros.oroInicial;
  }
  setOroInicial() {
    Parametros.setOroInicial(this.oroInicial.nativeElement.value);
  }

  ngOnInit() {
  }

}
