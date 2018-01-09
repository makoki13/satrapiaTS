import {Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { NgModule } from '@angular/core';
import { CiudadComponent} from './ciudad.component';
import { InvestigacionesComponent } from './investigaciones/investigaciones.component';

@NgModule({
  imports: [ MatChipsModule],
  declarations: [InvestigacionesComponent]
})
export class CiudadModule {

  constructor(private _ciudadComponent: CiudadComponent) { }


  getListaAlmacenes() {
    return this._ciudadComponent.mySilos.getLista();
  }

}
