import { MinaDeOro } from './../../clases/juego/Mina';
import { HomeComponent } from './../home.component';
import { Component, OnInit, Input } from '@angular/core';
import { Capital } from '../../clases/juego/Capital';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {
  @Input() showModal = false;

  myCapital: Capital;

  constructor() {
    this.myCapital = HomeComponent.myCapital;
  }

  ngOnInit() {
  }

  cancelAction() {}

  getMinasDeOro() { return this.myCapital.getMinasDeOro(); }
  getGranjas() { return this.myCapital.getGranjas(); }
  getSerrerias() { return this.myCapital.getSerrerias(); }
  getCanteras() { return this.myCapital.getCanteras(); }
  getMinasDeHierro() { return this.myCapital.getMinasDeHierro(); }

  muestraInformeMinaDeOro() { return HomeComponent.tipoInformePais === 1; }
  muestraInformeGranja() { return HomeComponent.tipoInformePais === 2; }
  muestraInformeSerreria() { return HomeComponent.tipoInformePais === 3; }
  muestraInformeCantera() { return HomeComponent.tipoInformePais === 4; }
  muestraInformeMinaDeHierro() { return HomeComponent.tipoInformePais === 5; }
}

