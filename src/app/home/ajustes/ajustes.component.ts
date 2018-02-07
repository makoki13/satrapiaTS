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
  @ViewChild('granjaRatio') granjaRatio: ElementRef;
  @ViewChild('granjaCapacidadAlmacen') granjaCapacidadAlmacen: ElementRef;
  @ViewChild('granjaTamanyoCosecha') granjaTamanyoCosecha: ElementRef;
  @ViewChild('granjaFrecuenciaCosecha') granjaFrecuenciaCosecha: ElementRef;
  @ViewChild('granjaMaximoNumero') granjaMaximoNumero: ElementRef;

  @ViewChild('serreriaCosteConstruccion') serreriaCosteConstruccion: ElementRef;
  @ViewChild('serreriaTiempoConstruccion') serreriaTiempoConstruccion: ElementRef;
  @ViewChild('serreriaCantidadInicial') serreriaCantidadInicial: ElementRef;
  @ViewChild('serreriaCantidadMaxima') serreriaCantidadMaxima: ElementRef;
  @ViewChild('serreriaMaximoNumero') serreriaMaximoNumero: ElementRef;

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
    Granja.tiempoContruccion = Parametros.Granja_Construccion_Tiempo;
    return Granja.tiempoContruccion;
  }
  setGranjaTiempoContruccion() {
    Parametros.Granja_Construccion_Tiempo = this.granjaTiempoConstruccion.nativeElement.value;
    Parametros.setGranjaConstruccionTiempo(this.granjaTiempoConstruccion.nativeElement.value);
    Granja.tiempoContruccion = this.granjaTiempoConstruccion.nativeElement.value;
  }

  getGranjaCantidadInicial() {
    Granja.cantidadInicial = Parametros.Granja_Productor_CantidadInicial;
    return Granja.cantidadInicial;
  }
  setGranjaCantidadInicial() {
    Parametros.Granja_Productor_CantidadInicial = this.granjaCantidadInicial.nativeElement.value;
    Parametros.setGranjaProductorCantidadInicial(this.granjaCantidadInicial.nativeElement.value);
    Granja.cantidadInicial = this.granjaCantidadInicial.nativeElement.value;
  }

  getGranjaCantidadMaxima() {
    Granja.cantidadMaxima = Parametros.Granja_Productor_CantidadMaxima;
    return Granja.cantidadMaxima;
  }
  setGranjaCantidadMaxima() {
    Parametros.Granja_Productor_CantidadMaxima = this.granjaCantidadMaxima.nativeElement.value;
    Parametros.setGranjaProductorCantidadMaxima(this.granjaCantidadMaxima.nativeElement.value);
    Granja.cantidadMaxima = this.granjaCantidadMaxima.nativeElement.value;
  }

  getGranjaRatio() {
    Granja.ratio = Parametros.Granja_Productor_Ratio;
    return Granja.ratio;
  }
  setGranjaRatio() {
    Parametros.Granja_Productor_Ratio = this.granjaRatio.nativeElement.value;
    Parametros.setGranjaProductorRatio(this.granjaRatio.nativeElement.value);
    Granja.ratio = this.granjaRatio.nativeElement.value;
  }

  getGranjaCapacidadAlmacen() {
    Granja.capacidadAlmacen = Parametros.Granja_Almacen_Capacidad;
    return Granja.capacidadAlmacen;
  }
  setGranjaCapacidadAlmacen() {
    Parametros.Granja_Almacen_Capacidad = this.granjaCapacidadAlmacen.nativeElement.value;
    Parametros.setGranjaAlmacenCapacidad(this.granjaCapacidadAlmacen.nativeElement.value);
    Granja.capacidadAlmacen = this.granjaCapacidadAlmacen.nativeElement.value;
  }

  getGranjaTamanyoCosecha() {
    Granja.tamanyoCosecha = Parametros.Granja_Cosecha_Tamanyo;
    return Granja.tamanyoCosecha;
  }
  setGranjaTamanyoCosecha() {
    Parametros.Granja_Cosecha_Tamanyo = this.granjaTamanyoCosecha.nativeElement.value;
    Parametros.setGranjaCosechaTamanyo(this.granjaTamanyoCosecha.nativeElement.value);
    Granja.tamanyoCosecha = this.granjaTamanyoCosecha.nativeElement.value;
  }

  getGranjaCosechaFrecuencia() {
    Granja.cosechaFrecuencia = Parametros.Granja_Cosecha_Frecuencia;
    return Granja.cosechaFrecuencia;
  }
  setGranjaCosechaFrecuencia() {
    Parametros.Granja_Cosecha_Frecuencia = this.granjaFrecuenciaCosecha.nativeElement.value;
    Parametros.setGranjaCosechaFrecuencia(this.granjaFrecuenciaCosecha.nativeElement.value);
    Granja.cosechaFrecuencia = this.granjaFrecuenciaCosecha.nativeElement.value;
  }

  getGranjaMaximoNumero() {
    Granja.maximoItems = Parametros.Granja_Num_Total;
    return Granja.maximoItems;
  }
  setGranjaMaximoNumero() {
    Parametros.Granja_Num_Total = this.granjaMaximoNumero.nativeElement.value;
    Parametros.setGranjaNumTotal(this.granjaMaximoNumero.nativeElement.value);
    Granja.maximoItems = this.granjaMaximoNumero.nativeElement.value;
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

  getSerreriaMaximoNumero() {
    Serreria.maximoItems = Parametros.Serreria_Num_Total;
    return Serreria.maximoItems;
  }
  setSerreriaMaximoNumero() {
    Parametros.Serreria_Num_Total = this.serreriaMaximoNumero.nativeElement.value;
    Parametros.setSerreriaNumTotal(this.serreriaMaximoNumero.nativeElement.value);
    Serreria.maximoItems = this.serreriaMaximoNumero.nativeElement.value;
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
