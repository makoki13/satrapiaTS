import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Parametros } from '../../clases/juego/Parametros';
import { HomeComponent } from './../home.component';
import { Granja } from '../../clases/juego/Granja';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styleUrls: ['./ajustes.component.css']
})
export class AjustesComponent implements OnInit {

  @ViewChild('granjaCosteConstruccion') granjaCosteConstruccion: ElementRef;
  @ViewChild('granjaTiempoConstruccion') granjaTiempoConstruccion: ElementRef;

  myGranja: Granja;

  constructor() {
    console.log( Parametros.Granja_costeContruccionGranja);
  }

  getGranjaCosteContruccion() {
    return Granja.costeConstruccion;
  }
  setGranjaCosteContruccion() {
    Parametros.Granja_costeContruccionGranja = this.granjaCosteConstruccion.nativeElement.value;
    Granja.costeConstruccion = this.granjaCosteConstruccion.nativeElement.value;
  }

  getGranjaTiempoContruccion() {
    return Granja.tiempoContruccion;
  }
  setGranjaTiempoContruccion() {
    Parametros.Granja_tiempoContruccion = this.granjaTiempoConstruccion.nativeElement.value;
    Granja.tiempoContruccion = this.granjaTiempoConstruccion.nativeElement.value;
  }

  ngOnInit() {
  }

}
